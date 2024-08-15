import { useAppDispatch, useAppSelector } from "@/app/redux";
import { setIsSidebarCollapsed } from "@/state";
import {
  Archive,
  CircleDollarSign,
  Clipboard,
  Layout,
  LucideIcon,
  Menu,
  SlidersHorizontal,
  Users,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {};

interface SidebarLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
  isCollapsed: boolean;
}

const SidebarLink = ({
  href,
  icon: Icon,
  label,
  isCollapsed,
}: SidebarLinkProps) => {
  const pathName = usePathname();
  const isActive = href === "/" || (pathName === "/" && href === "/dashboard");

  return (
    <Link href={href}>
      <div
        className={`cursor-pointer flex items-center ${
          isCollapsed ? "justify-center py-4" : "px-8 py-4"
        }  
        hover:text-blue-500 hover:bg-blue-200 gap-3 transition-colors ${
          isActive ? "bg-blue-200 text-white" : ""
        }
        `}
      >
        <Icon className="w-6 h-6 !text-gray-700" />
        <span
          className={`${
            isCollapsed ? "hidden" : "block"
          } font-medium text-gray-700`}
        >
          {label}
        </span>
      </div>
    </Link>
  );
};

function Sidebar({}: Props) {
  const dispatch = useAppDispatch();
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  );
  const toggleSidebarCollapsed = () =>
    dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
  const sidebarClassNames = `flex flex-col fixed ${
    isSidebarCollapsed ? "w-0 md:w-16" : "w-72 md:w-64"
  }  bg-white transition-all duration-300 overflow-hidden  h-full shadow-md z-40 `;
  return (
    <div className={sidebarClassNames}>
      {/* header section */}
      <div
        className={`${
          isSidebarCollapsed ? "px-5" : "px-8"
        } flex gap-3 justify-between md:justify-normal items-center pt-8`}
      >
        <div>Logo</div>

        <h1 className="font-extrabold text-xl">WallE Stocks</h1>
        <button
          className="flex md:hidden bg-gray-100 hover:bg-blue-100 rounded-full px-3 py-3"
          onClick={toggleSidebarCollapsed}
        >
          <Menu size={18} />
        </button>
      </div>
      <div
        className={`flex-grow mt-8 ${
          isSidebarCollapsed ? "" : "flex flex-col"
        } `}
      >
        <SidebarLink
          href="/dashboard"
          icon={Layout}
          label="Dashboard"
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLink
          href="/inventory"
          icon={Archive}
          label="Inventory"
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLink
          href="/products"
          icon={Clipboard}
          label="Products"
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLink
          href="/users"
          icon={Users}
          label="Users"
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLink
          href="/settings"
          icon={SlidersHorizontal}
          label="Settings"
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLink
          href="/expenses"
          icon={CircleDollarSign}
          label="Expenses"
          isCollapsed={isSidebarCollapsed}
        />
      </div>
      <div
        className={` ${
          isSidebarCollapsed ? "hidden" : ""
        } text-center text-xs text-gray-500`}
      >
        &copy; 2024 WallE Stocks.
      </div>
    </div>
  );
}

export default Sidebar;
