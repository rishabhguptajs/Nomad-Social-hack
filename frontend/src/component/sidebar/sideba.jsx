    import React, { useState } from "react";
    import { MdSpaceDashboard } from "react-icons/md";
    import { CgCommunity } from "react-icons/cg";
    import { IoIosHeartDislike } from "react-icons/io";
    import { TbBrandBooking } from "react-icons/tb";
    import { FaMessage } from "react-icons/fa6";
    import { FaHandsHelping } from "react-icons/fa";
    import { IoIosSettings } from "react-icons/io";
    import { IoLogOut } from "react-icons/io5";
    import { FaSearch } from "react-icons/fa";
    import { GiHamburgerMenu } from "react-icons/gi";
    const Sidebar = () => {
        const [isOpen,setIsOpen] = useState(false);
        const toggleSidebar = ()=>{
    setIsOpen(!isOpen)
        }
    return (
        <div className="bg-[#1C1F37] flex flex-col h-[100vh]  sm:w-64 md:w-80 lg:w-96 xl:w-[40vh] justify-between font-helvetica">
            <div className=" btn  sm:hidden flex justify-end">
    <GiHamburgerMenu size={32}  onClick={toggleSidebar} />
            </div>
            {/*<div className="flex flex-row space-x-4 p-4">
            <FaSearch className="text-white" />
            <input type="search" placeholder="Search..." className="p-2 rounded-md flex-grow text-black" />
    </div> */}
            
        <div className="flex flex-row space-x-4">
            <MdSpaceDashboard size={32} />
            <span>Dashboard</span>
        </div>
        <div className="flex flex-row space-x-4">
            <CgCommunity size={32} />
            <span>Community</span>
        </div>
        <div className="flex flex-row space-x-4">
            <IoIosHeartDislike size={32}/>
            <span>Favourite</span>
        </div>
        <div className="flex flex-row space-x-4">
            <TbBrandBooking size={32}/>
            <span>Booking</span>
        </div>
        <div className="flex flex-row space-x-4">
            <FaMessage size={32}/>
            <span>Message</span>
        </div>
        <div className="flex flex-row space-x-4">
            <FaHandsHelping size={32}/>
            <span>Help</span>
        </div>
        <div className="flex flex-row space-x-4">
            <IoIosSettings size={32}/>
            <span>Setting</span>
        </div>
        <div className="flex flex-row space-x-4">
            <IoLogOut size={32}/>
            <span>Log out</span>
        </div>
        </div>
    );
    };

    export default Sidebar;