import React, { useState } from 'react';
import SideNavbar from '@/components/SideNavbar';
import TopBar from '@/components/TopBar';
import '@/assets/styles/layout.scss';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({children}) => {
  const [collapsed, setCollapsed] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const handleCollapse = () => {
    setCollapsed(!collapsed);
  };
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className='layout-container'>
      <div className={collapsed ? "collapsed layout-main" : "layout-main"}>
        <TopBar />
        <SideNavbar 
            collapsed={collapsed} 
            onToggleCollapse={handleCollapse} 
            isOpen={isSidebarOpen} 
            closeSidebar={closeSidebar} 
        />
        <div className="children-container">
          <div className='children-main'>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout;
