import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import CardTab from "@/components/CardTab";
import CardDetails from "@/components/CardDetails";
import { getUser, updateStatus } from "@/store";
import { Link, useParams } from "react-router-dom";
import { ReactComponent as BackIcon } from '@/assets/images/back-icon.svg'; 
import "@/assets/styles/userdetail.scss";

const UserDetail = () => {
  const [user, setUser] = useState();
  const { id } = useParams();

  useEffect(() => {
    async function fetchUser(id: string) {
      const resp = await getUser(id);
      console.log(resp);
      setUser(resp);
    }

    if (id) {
      fetchUser(id);
    }
  }, []);

  const handleStatusUpdate = async (id: string | number, status: string) => {
    updateStatus(id, status)
  }

  return (
    <Layout>
      <div className='user-detail-container'>
      <Link to="/dashboard/users" className="back-link">
				<BackIcon /> <span>Back to Users</span>
			</Link>
        <header>
          <div className='title'>User Details</div>
          <div className="btn-group">
            {id && (
              <>
                <button onClick={() => handleStatusUpdate(id, 'Blacklisted')} className="blacklist">BLACKLIST USER</button>
                <button onClick={() => handleStatusUpdate(id, "Active")} className="active">ACTIVATE USER</button>
              </>
            )}
          </div>
        </header>
        {user && (
          <>
            <CardTab user={user} />
            <CardDetails user={user} />
          </>
        )}
      </div>
    </Layout>
  )
};

export default UserDetail;
