import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import CardTab from "@/components/CardTab";
import CardDetails from "@/components/CardDetails";
import { getUser } from "@/store";
import { useParams } from "react-router-dom";
import "@/assets/styles/userdetail.scss";

const UserDetail = () => {
  const [user, setUser] = useState();
  const { id } = useParams();

  useEffect(() => {
    async function fetchUser(id: string) {
        const resp = await getUser(id);

        setUser(resp);
    }

    if (id) {
      fetchUser(id);
    }
  }, []);

  return (
    <Layout>
      <div className='user-detail-container'>
        <header>
          <div className='title'>User Details</div>
          <div className="btn-group">
            <button className="blacklist">BLACKLIST USER</button>
            <button className="active">ACTIVATE USER</button>
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
