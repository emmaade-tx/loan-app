import { Link } from "react-router-dom";
import { ReactComponent as Logo } from '@/assets/images/logo.svg';
import { ReactComponent as SearchIcon } from '@/assets/images/search-icon.svg';
import { ReactComponent as BellIcon } from '@/assets/images/bell-icon.svg';
import { ReactComponent as Avatar } from '@/assets/images/avatar.svg';
import { ReactComponent as DropDownIcon } from '@/assets/images/dropdown-icon.svg';
import MobileNav from "@/components/MobileNav";
// import { ReactComponent as MobileBurgerIcon } from '@/assets/images/burger-icon.svg';

interface TopBarProps {
  toggleSidebar: () => void
}
const TopBar: React.FC<TopBarProps> = ({toggleSidebar}) => {
    return (
      <div className="top-nav-container">
        <div>
          <div className="top-nav-wrapper">
            <Logo />
            <div className="search-bar">
              <input type="search" placeholder="Search for anything" />
              <button>
                <SearchIcon />
              </button>
            </div>
            <div className="top-nav-group">
              <Link to="#">Docs</Link>
              <BellIcon />
              <div className="top-nav-avatar">
                <Avatar className="avatar" />
                <p>Adedeji</p>
                <DropDownIcon />
              </div>
            </div>
            <div className="menu-icon">
              <MobileNav toggleSidebar={toggleSidebar} />
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default TopBar;