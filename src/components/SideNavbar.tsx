import { ReactComponent as SwitchOrgIcon } from '@/assets/images/switch-org-icon.svg';
import { ReactComponent as DashboardIcon } from '@/assets/images/dashboard-icon.svg';
import { ReactComponent as UserGroupIcon } from '@/assets/images/user-group-icon.svg';
import { ReactComponent as GuarantorIcon } from '@/assets/images/guarantor-icon.svg';
import { ReactComponent as LoanIcon } from '@/assets/images/loan-icon.svg';
import { ReactComponent as SavingIcon } from '@/assets/images/saving-icon.svg';
import { ReactComponent as LoanRequestIcon } from '@/assets/images/loan-request-icon.svg';
import { ReactComponent as WhitelistIcon } from '@/assets/images/whitelist-icon.svg';
import { ReactComponent as KarmaIcon } from '@/assets/images/karma-icon.svg';
import { ReactComponent as OrganizationIcon } from '@/assets/images/organization-icon.svg';
import { ReactComponent as LoanProductIcon } from '@/assets/images/loan-product-icon.svg';
import { ReactComponent as SavingProductIcon } from '@/assets/images/saving-product-icon.svg';
import { ReactComponent as FeesAndChargesIcon } from '@/assets/images/fees-charges-icon.svg';
import { ReactComponent as TransactionIcon } from '@/assets/images/transaction-icon.svg';
import { ReactComponent as ServicesIcon } from '@/assets/images/services-icon.svg';
import { ReactComponent as SettlementIcon } from '@/assets/images/settlement-icon.svg';
import { ReactComponent as ServiceAccountIcon } from '@/assets/images/service-account-icon.svg';
import { ReactComponent as ReportIcon } from '@/assets/images/report-icon.svg';
import { ReactComponent as PreferencesIcon } from '@/assets/images/preferences-icon.svg';
import { ReactComponent as FeesAndPricingIcon } from '@/assets/images/fees-pricing-icon.svg';
import { ReactComponent as AuditLogIcon } from '@/assets/images/audit-log-icon.svg';
import { ReactComponent as SystemMessage } from '@/assets/images/system-message-icon.svg';
import { ReactComponent as DecisionModelIcon } from '@/assets/images/decision-model-icon.svg';
import { ReactComponent as ChevronDownIcon } from '@/assets/images/chevron-down-icon.svg';
import { ReactComponent as LogoutIcon } from '@/assets/images/logout-icon.svg';
import { Link, useLocation, useNavigate } from 'react-router-dom';

  interface SideNavbarProps {
    isOpen: boolean;
  }

  const SideNavbar: React.FC<SideNavbarProps> = ({ isOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    {
        id: 1,
        to: "#",
        icon: <SwitchOrgIcon />,
        title: "Switch Organization",
    },
    {
        id: 2,
        to: "/dashboard",
        icon: <DashboardIcon />,
        title: "Dashboard",
    },
    {
        id: 3,
        to: "#",
        title: "CUSTOMERS",
    },
    {
        id: 4,
        to: "/dashboard/users",
        icon: <UserGroupIcon />,
        title: "Users",
    },
    {
        id: 5,
        to: "#",
        icon: <GuarantorIcon />,
        title: "Guarantors",
    },
    {
        id: 6,
        to: "#",
        icon: <LoanIcon />,
        title: "Loans",
    },
    {
        id: 7,
        to: "#",
        icon: <DecisionModelIcon />,
        title: "Decision Models",
    },
    {
        id: 8,
        to: "#",
        icon: <SavingIcon />,
        title: "Savings",
    },
    {
        id: 9,
        to: "#",
        icon: <LoanRequestIcon />,
        title: "Loan Requests",
    },
    {
        id: 10,
        to: "#",
        icon: <WhitelistIcon />,
        title: "Whitelist",
    },
    {
        id: 11,
        to: "#",
        icon: <KarmaIcon />,
        title: "Karma",
    },
    {
        id: 12,
        to: "#",
        title: "BUSINESSES",
    },
    {
        id: 13,
        to: "#",
        icon: <OrganizationIcon />,
        title: "Organization",
    },
    {
        id: 14,
        to: "#",
        icon: <LoanProductIcon />,
        title: "Loan Products",
    },
    {
        id: 15,
        to: "#",
        icon: <SavingProductIcon />,
        title: "Savings Products",
    },
    {
        id: 16,
        to: "#",
        icon: <FeesAndChargesIcon />,
        title: "Fees and Charges",
    },
    {
        id: 17,
        to: "#",
        icon: <TransactionIcon />,
        title: "Transactions",
    },
    {
        id: 18,
        to: "#",
        icon: <ServicesIcon />,
        title: "Services",
    },
    {
        id: 19,
        to: "#",
        icon: <ServiceAccountIcon />,
        title: "Service Account",
    },
    {
        id: 20,
        to: "#",
        icon: <SettlementIcon />,
        title: "Settlements",
    },
    {
        id: 21,
        to: "#",
        icon: <ReportIcon />,
        title: "Reports",
    },
    {
        id: 22,
        to: "#",
        title: "SETTINGS",
    },
    {
        id: 23,
        to: "#",
        icon: <PreferencesIcon />,
        title: "Preferences",
    },
    {
        id: 24,
        to: "#",
        icon: <FeesAndPricingIcon />,
        title: "Fees aand Pricing",
    },
    {
        id: 25,
        to: "#",
        icon: <AuditLogIcon />,
        title: "Audit Logs",
    },
    {
        id: 26,
        to: "#",
        icon: <SystemMessage />,
        title: "Systems Messages",
    },
  ];

  return (
    <div className={`${isOpen ? "open" : ""} side-nav-container`}>
	  <>
        <ul className="side-nav-menu-items">
          {navItems.map(item => (
            <div key={item.id}>
              {item.icon ? (
                <Link to={`${item.to}`}>
                  <li className={`side-nav-item ${location.pathname === item.to ? "active" : ""}`}>
                    {item.icon}
                    <span>{item.title}</span>
                      {item.id === 1 && (
                        <span>
                          <ChevronDownIcon />
                        </span>
                      )}
                  </li>
                </Link>
              ) : (
                <li className="side-nav-item-header">
                  <span>{item.title}</span>
                  </li>
              )}
            </div>
          ))}
        </ul>

        <div className="logout" onClick={() => navigate('/')}>
            <div>
                <LogoutIcon/>
                <span>Logout</span>
            </div>

            <span className="version">v1.2.0</span>
        </div>
	  </>
	</div>
  );
}

export default SideNavbar;