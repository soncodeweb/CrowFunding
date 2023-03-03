import React from "react";
import { NavLink } from "react-router-dom";
import {
  IconCampaign,
  IconDashboard,
  IconLight,
  IconLogout,
  IconPayment,
  IconProfile,
  IconWithdraw,
} from "../../components/icons";
const sidebarLinks = [
  {
    icon: <IconDashboard></IconDashboard>,
    title: "Dashboard",
    url: "/",
  },
  {
    icon: <IconCampaign></IconCampaign>,
    title: "Campaign",
    url: "/campaign",
  },
  {
    icon: <IconPayment></IconPayment>,
    title: "Payment",
    url: "/payment",
  },
  {
    icon: <IconWithdraw></IconWithdraw>,
    title: "Withdraw",
    url: "/withdraw",
  },
  {
    icon: <IconProfile></IconProfile>,
    title: "Profile",
    url: "/profile",
  },
  {
    icon: <IconLogout></IconLogout>,
    title: "Logout",
    url: "/#",
    onclick: () => {},
  },
  {
    icon: <IconLight></IconLight>,
    title: "Light/Dark",
    url: "/#",
    onclick: () => {},
  },
];

const DashboardSidebar = () => {
  return (
    <div className="w-full md:w-[76px] rounded-3xl bg-white shadow-shadowPrimary py-10 px-[14px] flex flex-col">
      {sidebarLinks.map((link) => (
        <div
          key={link.title}
          className="flex items-center md:justify-center gap-x-5 md:md-8 md:w-12 md:h-12 mb-7 text-icon-color last:ml-auto last:rounded-lg last:bg-white last:shadow-shadowPrimary"
        >
          <NavLink
            to={link.url}
            className={({ isActive }) =>
              isActive ? "text-primary" : undefined
            }
          >
            <span className="">{link.icon}</span>
            <span className="text-sm font-medium text-text3 md:hidden ">
              {link.title}
            </span>
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default DashboardSidebar;
