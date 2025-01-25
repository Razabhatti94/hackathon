import React, { Profiler, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Link, Outlet, useLocation } from "react-router-dom";
import { TbLogout } from "react-icons/tb";
import { IoIosNotificationsOutline, IoIosSearch, IoIosGitBranch } from "react-icons/io";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { SiGoogleclassroom, SiCoursera } from "react-icons/si";
import { HiOutlineBars3 } from "react-icons/hi2";
import { IoCalendarNumberOutline, IoPeopleSharp, IoTimerOutline, IoSettingsOutline } from "react-icons/io5";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { MdOutlineQuiz, MdOutlineMessage, MdOutlineAssignmentInd } from "react-icons/md";
import {
  PiGitBranch,
  PiStudent,
  PiChalkboardTeacher,
  PiSquaresFour,
  PiUser,
  PiCalendar,
  PiClipboard,
  PiPen,
  PiBell,
  PiClipboardText,
  PiCertificateLight,
} from "react-icons/pi";
import { FaChalkboardTeacher, FaCity, FaUserCircle } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";
import MenuList from "./MenuList";
import SelectOption from "./SelectTheme";
import { NavLink } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import ButtonM from "./ButtonM";
import axios from "axios";
import { message } from "antd";
import Cookies from "js-cookie";
import Header from "../components/HeaderToogle";
import { jwtDecode } from "jwt-decode";


const Dashboard = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [currentUser, setCurrentUser] = useState("");
  const [search, setSearch] = useState("");
  const [menu, setMenu] = useState(true);
  const theme = useTheme();
  const navigate = useNavigate();


 useEffect(() => {
    const decodeToken = async () => {
      try {
        const token = Cookies.get("token");
        if (token) {
          const decoded = jwtDecode(token);
          setCurrentUser(decoded);
          return;
        } else {
          navigate("/");
        }
      } catch (error) {
        console.error("Error decoding token:", error);
      }
    };
    decodeToken();
  }, [navigate, messageApi]);

  // const handleSignOut = async () => {
  //   try {
  //     await Cookies.remove("token");
  //     setSession(null);
  //     console.log("User has been logged out.");
  //     navigate("/");
  //     messageApi.success("User Signout successful!");
  //   } catch (error) {
  //     console.error("Error logging out:", error);
  //   }
  // };

  const adminArray = [
    {
      id: 1,
      name: "Dashboard",
      route: "/admin",
      icon: <PiSquaresFour />,
      length: "Dashboard"?.length,
    },
    {
      id: 2,
      name: "Batch",
      route: "/admin/batch",
      icon: <PiChalkboardTeacher />,
      length: 0,
    },
    {
      id: 3,
      name: "Course",
      route: "/admin/course",
      icon: <SiGoogleclassroom />,
      // length: totalCount.courseCount,
    },
    {
      id: 4,
      name: "Teacher",
      route: "/admin/trainer",
      icon: <LiaChalkboardTeacherSolid />,
      // length: trainer?.length,
    },
    {
      id: 5,
      name: "Student",
      route: "/admin/student",
      icon: <PiStudent />,
      // length: students?.length,
    },
    {
      id: 6,
      name: "Class",
      route: "/admin/class",
      icon: <PiChalkboardTeacher />,
      // length: classes?.length,
    },
    {
      id: 7,
      name: "Section",
      route: "/admin/section",
      icon: <IoTimerOutline />,
      length: 0,
    },
    {
      id: 8,
      name: "Registration",
      route: "/admin/registration",
      icon: <IoIosSearch />,
      // length: registration?.length,
    },
    {
      id: 9,
      name: "Campus",
      route: "/admin/campus",
      icon: <SiCoursera />,
      // length: totalCount.campuseCount,
    },
    {
      id: 12,
      name: "Reports",
      route: "/admin/reports",
      icon: <MdOutlineMessage />,
      length: "Reports".length,
    },
    {
      id: 13,
      name: "Quiz",
      route: "/admin/quiz",
      icon: <MdOutlineQuiz />,
      // length: quiz?.length,
    },
    {
      id: 14,
      name: "Results",
      route: "/admin/result",
      icon: <PiCertificateLight />,
      // length: results?.length,
    },
    {
      id: 15,
      name: "Fee",
      route: "/admin/fee",
      icon: <HiOutlineCurrencyDollar />,
      length: "Fee".length,
    },

    {
      id: 17,
      name: "Attendance",
      route: "/admin/attendance",
      icon: <IoIosGitBranch />,
      // length: attendance?.length,
    },
    {
      id: 18,
      name: "Curriculum",
      route: "/admin/curriculam",
      icon: <PiChalkboardTeacher />,
      // length: curriculums?.length,
    },
    {
      id: 19,
      name: "Assignments",
      route: "/admin/assignments",
      icon: <MdOutlineAssignmentInd />,
      // length: assignments?.length,
    },
    {
      id: 20,
      name: "Users",
      route: "/admin/user",
      icon: <FaUserCircle />,
    },
    {
      id: 21,
      name: "City",
      route: "/admin/city",
      icon: <FaCity />,
      length: 0,
    },
  ];

  const staffArray = [
    { id: 1, name: "Dashboard", route: "/dashboard", icon: <PiSquaresFour /> },
    { id: 2, name: "Profile", route: "/profile", icon: <PiUser /> },
    {
      id: 3,
      name: "Courses",
      route: "/courses",
      icon: <FaChalkboardTeacher />,
    },
    {
      id: 4,
      name: "Assignments",
      route: "/assignments",
      icon: <PiClipboard />,
    },
    { id: 5, name: "Results", route: "/result", icon: <PiClipboardText /> },
    {
      id: 6,
      name: "Notifications",
      route: "/notifications",
      icon: <IoIosNotificationsOutline />,
    },
  ];

  // const HandleSearch = () => {
  //   console.log("search Item=>", search);
  //   setSearch;
  // };
  // const HandleMenu = () => {
  //   setMenu(menu ? false : true);
  // };

  return (
    <div className="w-full h-screen p-2 overflow-hidden">
      {contextHolder}
      <div className="h-full w-full flex gap-1 flex-row rounded-md">
        <div className={`h-full ${menu ? "w-2/12" : "w-1/12"} left flex flex-col justify-start items-center`}>
          <div className="flex  gap-4 w-full px-7 py-3 border-b-2 h-14">
            {/* <button onClick={HandleMenu} className="justify-self-start text-2xl">
              <HiOutlineBars3 />
            </button> */}
            {menu && <h1 className="text-lg font-semibold text-center rounded-lg h-full w-full">Admin</h1>}
          </div>
          <div className="flex flex-col gap-2 w-full h-full overflow-y-auto justify-start scrollbar-hide">
            <MenuList array={adminArray} menu={menu} />
          </div>

          <div className="w-full py-2">
            <ul className="flex flex-col space-y-2">
              <li className="hover:bg-gray-300 hover:text-gray-600 rounded-md transition-colors duration-200">
                <NavLink
                  to={"/admin/settings"}
                  className="flex items-center px-4 py-2 text-sm rounded-sm"
                  style={({ isActive }) => ({
                    backgroundColor: isActive ? theme.palette.primary.main : "inherit",
                    color: isActive ? "white" : "inherit",
                  })}
                >
                  <span className="w-1/4 flex items-center justify-center text-xl">
                    <IoSettingsOutline />
                  </span>
                  {menu && (
                    <span className="w-2/4 truncate text-md font-medium transition-colors duration-200">Settings</span>
                  )}
                </NavLink>
              </li>
              <li className="hover:bg-gray-300 hover:text-gray-600 rounded-md transition-colors duration-200">
                <NavLink
                  to={"/"}
                  className="flex items-center px-4 py-2 text-sm rounded-sm"
                  style={({ isActive }) => ({
                    backgroundColor: isActive ? theme.palette.primary.main : "inherit",
                    color: isActive ? "white" : "inherit",
                  })}
                >
                  <span className="w-1/4 flex items-center justify-center text-xl">
                    <IoLogOutOutline />
                  </span>
                  {menu && (
                    <span className="w-2/4 truncate text-md font-medium transition-colors duration-200">Logout</span>
                  )}
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className={`h-full ${menu ? "w-10/12" : "w-11/12"} flex flex-col gap-1 bg-white text-neutral-900 `}>
          <div className="flex flex-row justify-between gap-1 w-full border-b border-neutral-300 px-4 h-14">
            {/* <div className="flex flex-row w-2/12">
              <h1 className="text-lg font-semibold flex text-start rounded-lg justify-center items-center h-full w-full">
                SMIT Portal
              </h1>
            </div>
            <div className="flex flex-row gap-1 w-7/12 rounded-lg justify-center items-center">
              <input
                type="search"
                name="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                id="search"
                placeholder="Search"
                className="rounded-md w-2/3 p-2 border border-neutral-300 placeholder-neutral-500"
              />
              <ButtonM
                onClick={HandleSearch}
                className="rounded-md w-1/3 p-2 border border-neutral-300 bg-neutral-200 text-neutral-900 hover:bg-neutral-300"
                text={"Search"}
              />
            </div>
            <div className="flex flex-row justify-center items-center gap-2 w-2/12">
              <div className="flex justify-center items-center p-2 text-neutral-500 hover:text-neutral-700">
                <IoIosNotificationsOutline className="text-2xl" />
              </div>
              <div className="flex justify-center items-center p-2 text-neutral-500 hover:text-neutral-700">
                <MdOutlineMessage className="text-2xl" />
              </div>
              <div className="flex justify-center items-center p-2 text-neutral-500 hover:text-neutral-700">
                <SelectOption className="text-2xl" />
              </div>
              
              <div className="flex justify-center items-center p-2 text-neutral-500 hover:text-neutral-700">
                <Header />
              </div>
              
            </div> */}
            <Header />
          </div>
          <div className="h-full overflow-x-hidden overflow-y-auto scrollbar-custom">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
