import React, { useState } from 'react';
import Filter from '@/components/Filter';
import { toast } from 'react-toastify';
import { useTable, usePagination, useSortBy, Row, Column } from 'react-table';
import { ReactComponent as SortIcon } from '@/assets/images/filter-results-icon.svg';
import { ReactComponent as SettingsIcon } from '@/assets/images/settings-icon.svg';
import { ReactComponent as NextIcon } from '@/assets/images/next-icon.svg';
import { ReactComponent as PrevIcon } from '@/assets/images/prev-icon.svg';
import { ReactComponent as ActivateIcon } from '@/assets/images/activate-icon.svg';
import { ReactComponent as BlacklistIcon } from '@/assets/images/blacklist-icon.svg';
import { ReactComponent as EyeIcon } from '@/assets/images/eye-icon.svg';
import format from 'date-fns/format';
import { User } from '@/types/user';

import { getUser, storeUserData, updateStatus } from '@/store';
import { capitalizeFirstChar } from '@/helper';
import { Link, useNavigate } from 'react-router-dom';
  
interface dataProps {
  data: User[];
}

const UsersTable: React.FC<dataProps> = ({ data: originalData }) => {
  const [data, setData] = useState<User[]>(originalData);
  const [selectedRow, setSelectedRow] = useState<number | null>(null);
  const [pageSize, setPageSize] = useState<number>(10);
  const [pageIndex, setPageIndex] = useState<number>(0);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const navigate = useNavigate();

  const fetchData = async () => {
    const updatedData = await Promise.all(data.map(async (user) => {
      const fetchedUser = await getUser(user.id);
      if (fetchedUser) {
        return { ...user, status: fetchedUser.status };
      }
      return user;
    }));
  
    setData(updatedData);
  };
  
    
  React.useEffect(() => {
    fetchData();
  }, []);

  const columns: Array<Column<User>> = React.useMemo(() => [
    {
      Header: 'ORGANIZATION',
      accessor: 'organizationName',
      id: 'organization'
    },
    {
      Header: 'USERNAME',
      accessor: 'username',
    },
    {
      Header: 'EMAIL',
      accessor: 'email',
    },
    {
      Header: 'PHONE NUMBER',
      accessor: 'phoneNumber',
    },
    {
      Header: 'DATE JOINED',
      accessor: 'createdAt',
      Cell: ({ cell: { value } }: { cell: { value: string } }) => {
        let formattedDate = "N/A";
        if (value) {
          const parsedDate = new Date(value);
          formattedDate = format(parsedDate, "MMMM d, yyyy h:mm a");
        }
        return <React.Fragment>{formattedDate}</React.Fragment>;
      }
    },
    {
      Header: 'STATUS',
      id: 'status',
      accessor: (row: User) => row.status ? row.status : 'pending',
      Cell: ({ cell: { value } }: { cell: { value: string } }) => {
        return <React.Fragment><div className={`status ${value}`}><p>{capitalizeFirstChar(value)}</p></div></React.Fragment>;
      }
    },
    {
        id: 'settings',
        accessor: () => '',
        disableSortBy: true,
        Cell: ({ row }: { row: Row<User> }) => (
          
          <div className="dropdown">
            <div
              className={`dropdown-icon ${selectedRow === row.index ? 'active' : ''}`}
              onClick={() => handleRowClick(row.index)}
            >
              <SettingsIcon />
            </div>
            {selectedRow === row.index && (
              <div className="dropdown-content">
                <Link to='#' onClick={() => handleUserClick(row.original)} className="dropdown-item"><EyeIcon /><span>View Details</span></Link>
                <Link to="#" onClick={() => handleStatusUpdate(row.original.id, 'Blacklisted')} className="dropdown-item"><BlacklistIcon /><span>BlackList User</span></Link>
                <Link to="#" onClick={() => handleStatusUpdate(row.original.id, 'Active')} className="dropdown-item"><ActivateIcon /><span>Activate User</span></Link>
              </div>
            )}
          </div>
        ),
      },
  ], [selectedRow]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex, pageSize }, // Set initial page index and page size here
    },
    useSortBy,
    usePagination
  );

  const handleFilterButtonClick = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const handleRowClick = (rowIndex: number) => {
    setSelectedRow(rowIndex === selectedRow ? null : rowIndex);
  };

  const handlePageSizeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPageSize(Number(event.target.value));
    setPageIndex(0);
  };

  const renderPageNumbers = () => {
    const pagesToShow = 3; // Number of pages to show before and after the current page
    const ellipsis = (
      <span key="ellipsis" className="pagination-ellipsis">
        ...
      </span>
    );

    let pageNumbers: (JSX.Element | string | number)[] = [];

    if (pageCount <= 7) {
      // Show all page numbers
      for (let i = 0; i < pageCount; i++) {
        pageNumbers.push(
          <div
            key={i}
            className={pageIndex === i ? 'active' : ''}
            onClick={() => gotoPage(i)}
          >
            {i + 1}
          </div>
        );
      }
    } else {
      // Show a subset of page numbers with ellipsis
      const start = Math.max(0, pageIndex - pagesToShow);
      const end = Math.min(pageCount - 1, pageIndex + pagesToShow);

      for (let i = start; i <= end; i++) {
        pageNumbers.push(
          <div
            key={i}
            className={pageIndex === i ? 'active' : ''}
            onClick={() => gotoPage(i)}
          >
            {i + 1}
          </div>
        );
      }

      if (start > 1) {
        pageNumbers = [1, ellipsis, ...pageNumbers];
      }

      if (end < pageCount - 2) {
        pageNumbers = [...pageNumbers, ellipsis, pageCount];
      }
    }

    return pageNumbers;
  };

  const handleStatusUpdate = async (id: string | number, status: string) => {
    updateStatus(id, status);
    toast.success("Status updated");
  }

  const handleFilter = (formData: FormData) => {
    const filteredData = data.filter((user) => {
      const organization = formData.get('organization') as string;
      const username = formData.get('username') as string;
      const email = formData.get('email') as string;
      const date = formData.get('date') as string;
      const phoneNumber = formData.get('phoneNumber') as string;
      const status = formData.get('status') as string;
  
      // Filter based on the form inputs
      return (
        (!organization || user.organizationName.toLowerCase() === organization.toLowerCase()) &&
        (!username || user.username.toLowerCase().includes(username.toLowerCase())) &&
        (!email || user.email.toLowerCase().includes(email.toLowerCase())) &&
        (!date || user.createdAt.toLowerCase().includes(date.toLowerCase())) &&
        (!phoneNumber || user.phoneNumber.includes(phoneNumber)) &&
        (status === undefined || !status || user.status?.toLowerCase() === status.toLowerCase() || (user.status === undefined && status.toLowerCase() === 'pending'))
      );
    });
  
    // Update the table data with the filtered data
    // You can store the filtered data in state or use it directly
    setData(filteredData);
    handleFilterButtonClick();
  };

  const handleReset = () => {
    setData(originalData);
    handleFilterButtonClick();
  }

  const handleUserClick = async (row: User) => {
    await storeUserData(row);
    navigate(`/dashboard/user/${row.id}`);
  }
  
  return (
    <>
      <button className='toggle-btn' onClick={handleFilterButtonClick}>Toggle Filter</button>
      <div className='table-container'>
        <table className='table' {...getTableProps()}>
          <thead>
            {headerGroups.map(headerGroup => (  
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render('Header')}
                    {column.id !== 'settings' && (
                      <span>
                        {column.isSorted ? (
                          column.isSortedDesc ? (
                              <SortIcon className='sort-icon desc' />
                          ) : (
                              <SortIcon className='sort-icon asc' />
                          )
                          ) : (
                          <SortIcon className='sort-icon' />
                        )}
                      </span>
                    )}
                    {isFilterOpen && column.id === 'organization' && (
                      <Filter onSubmit={handleFilter} onReset={handleReset} />
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row: Row<User>) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell, index) => (
                    <td {...cell.getCellProps()} key={index}>
                      {cell.column.id === 'organization' ? (
                        <span onClick={() => handleUserClick(row.original)}>
                          {cell.render('Cell')}
                        </span>
                      ) : (
                        cell.render('Cell')
                      )}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="pagination">
          <div className="pagination-left">
            Showing {" "}
            <select value={pageSize} onChange={handlePageSizeChange}>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
              <option value="40">40</option>
              <option value="50">50</option>
            </select> {" "}
            out of {data.length}
          </div>
          <div className="pagination-right">
            <div
              onClick={() => previousPage()}
              className={`pagination-button ${canPreviousPage ? '' : 'disabled'}`}
            >
              <PrevIcon />
            </div>
            {renderPageNumbers()}
            <div
              onClick={() => nextPage()}
              className={`pagination-button ${canNextPage ? '' : 'disabled'}`}
            >
              <NextIcon />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UsersTable;
