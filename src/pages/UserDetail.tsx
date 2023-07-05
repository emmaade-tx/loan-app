import Layout from "@/components/Layout";
import CardTab from "@/components/CardTab";
import CardDetails from "@/components/CardDetails";

const UserDetail = () => {
  return (
    <Layout>
      <div className='user-detail-container'>
        <header>
          <div className='title'>User Details</div>
          <div>
            <button>BLACKLIST USER</button>
            <button>ACTIVATE USER</button>
          </div>
        </header>
        <CardTab />
        <CardDetails />
      </div>
    </Layout>
  )
};

export default UserDetail;
