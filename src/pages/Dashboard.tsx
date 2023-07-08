import React from 'react';
import Layout from '@/components/Layout';
import CardAnalysis from '@/components/CardAnalysis';
import { useFetchUsers } from '@/hooks/useFetchUsers';
import UsersTable from '@/components/UsersTable';
import '@/assets/styles/dashboard.scss'; 

const Dashboard: React.FC = () => {
  const { loading, data } = useFetchUsers();
  return (
    <Layout>
      <div className='dahboard-container'>
        <div className='title'>Users</div>
        <CardAnalysis />
        {loading ? (
          <div className='loader'></div>
        ) : data ? (
          <UsersTable data={data} />
        ): (
          <div className='error'>Something went wrong</div>
        )}
      </div>
    </Layout>
  );
};

export default Dashboard;
