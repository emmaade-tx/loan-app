import React, { useState } from 'react';
import SideNavbar from '@/components/SideNavbar';
import TopBar from '@/components/TopBar';
import '@/assets/styles/layout.scss';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({children}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className='layout-container'>
      <TopBar toggleSidebar={toggleSidebar} />
      <div className="children-container">
        <SideNavbar 
          isOpen={isSidebarOpen} 
        />
        <div className='children-main'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Layout;
