import { ReactComponent as MenuIcon } from "@/assets/images/menu-icon.svg";

interface mobileNavProps {
    toggleSidebar: () => void;
};

const MobileNav: React.FC<mobileNavProps> = ({toggleSidebar}) => {
  return (
    <div className="mobile-nav-container">
      <button onClick={toggleSidebar}>
        <MenuIcon fill="#292D32" />
      </button>
    </div>
  );
}

export default MobileNav;