import React, { useState } from "react";
import { HiMenuAlt3, HiOutlineUser } from "react-icons/hi";
import { RiSettings4Line } from "react-icons/ri";
import { FiMessageSquare, FiFolder, FiShoppingCart } from "react-icons/fi";
import { MdOutlineDashboard } from "react-icons/md";
import { TbReportAnalytics } from "react-icons/tb";
import { Link } from "react-router-dom";

const Menus = [
  { name: "Dashboard", link: "/", icon: MdOutlineDashboard },
  { name: "User", link: "/", icon: HiOutlineUser },
  { name: "Messages", link: "/", icon: FiMessageSquare, margin: true },
  { name: "aAnalytics", link: "/", icon: TbReportAnalytics },
  { name: "File Manager", link: "/", icon: FiFolder },
  { name: "Cart", link: "/", icon: FiShoppingCart, margin: true },
  { name: "Settings", link: "/", icon: RiSettings4Line },
];

function SidebarTwo() {
  const [open, setOpen] = useState(true);
  return (
    <div className="flex gap-6 bg-slate-500">
      <div
        className={`bg-[#0e0e0e] min-h-screen ${
          open ? "w-72" : "w-16"
        } duration-500 text-gray-100 px-4`}
      >
        <div className="py-3 flex justify-end">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="mt-4 flex flex-col gap-4 relative ">
          {Menus?.map((menu, index) => (
            <Link
              to={menu.link}
              key={index}
              className={`${
                menu?.margin && "mt-5"
              } group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2
                style={{ transitionDelay: `${index + 3}00ms` }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"} absolute left-48 text-gray-900 bg-white font-semibold whitespace-pre rounded-md drop-shadow-lg px-0 py-0 group-hover:px-2  group-hover:py-1 w-0 overflow-hidden  group-hover:left-14 group-hover:duration-300 group-hover:w-fit `}
              >
                {/*   */}
                {menu.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SidebarTwo;
