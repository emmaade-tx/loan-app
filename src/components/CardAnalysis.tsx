import { ReactComponent as Users } from '@/assets/images/group-icon.svg';
import { ReactComponent as ActiveUsers } from '@/assets/images/group2-icon.svg';
import { ReactComponent as UsersWithSavings } from '@/assets/images/users-with-savings-icon.svg';
import { ReactComponent as GroupUsers } from '@/assets/images/loan-user-icon.svg';

const CardAnalysis = () => {
  const cardItems = [
    {
      id: 1,
      text: 'Users',
      icon: <Users />,
      count: '2,453',
    },
    {
      id: 2,
      text: 'Active Users',
      icon: <ActiveUsers />,
      count: '2,453',
    },
    {
      id: 3,
      text: 'Users with loans',
      icon: <GroupUsers />,
      count: '12,453',
    },
    {
      id: 4,
      text: 'Users with savings',
      icon: <UsersWithSavings />,
      count: '102,453',
    },
  ]
  return (
    <div className="cards">
      {cardItems.map(item => (
        <div key={item.id} className='card'>
          {item.icon}
          <p className='card-text'>{item.text}</p>
          <p className='card-count'>{item.count}</p>
        </div>
      ))}
    </div>
  );
}

export default CardAnalysis;