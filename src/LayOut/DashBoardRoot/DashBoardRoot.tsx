import { RiLogoutCircleRLine, RiMotorbikeFill } from "react-icons/ri";
import Logo from "../../SharedComponent/Navbar/Logo";
import useUser from "../../CustomHocks/useUser";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { BsCartCheckFill } from "react-icons/bs";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";


const DashBoardRoot = () => {
    const { logOutUser } = useUser();
    const [isOpen, setOpen] = useState<boolean>(false)
    const location = useLocation()

    const nav: React.ReactNode[] = [
        <NavLink
            key="order" to="/my-dashBoard"
            className={() => ` hover:text-color-s px-3 rounded-sm flex items-center gap-2 ${location?.pathname==='/my-dashBoard' ? 'text-color-s font-bold ' : 'text-white'}`}
        > <BsCartCheckFill /> My Order </NavLink>,
        <NavLink key="bikes" to="/my-dashBoard/my-bikes"
            className={({ isActive }) => `   hover:text-color-s px-3 rounded-sm flex items-center gap-2 ${isActive ? 'text-color-s font-bold' : ''}`}
        ><RiMotorbikeFill /> Our Bikes</NavLink>,

        <div className="border-b-4 border-color-op my-5"></div>,
        <NavLink
            key="home" to="/"
            className={({ isActive }) => ` hover:text-color-s px-3 rounded-sm flex items-center gap-2 ${isActive ? 'text-color-s font-bold ' : ''}`}
        > <BsCartCheckFill />Home </NavLink>,

    ]


    return (

        <div className=" relative grid  lg:grid-cols-12  md:grid-cols-12  grid-cols-1 w-full  bg-color-p ">
            {/* for big screen */}
            <div className={`  bg-color-op h-screen lg:col-span-3 md:col-span-3  flex-col  lg:flex md:flex hidden    transition-all ease-in-out duration-500 overflow-hidden `}>
                <div className="p-2 flex gap-2 items-end  ">
                    <button onClick={() => setOpen(!isOpen)} className="mb-1 lg:hidden md:hidden flex"> <GiHamburgerMenu /> </button>
                    <Logo></Logo>
                </div>
                <div className="flex-grow p-4 bg-color-p m-1 flex flex-col text-white list-none">
                    {nav.map((item, idx) => <li key={idx}>{item}</li>)}

                </div>

                <div className="p-4 ">
                    <a onClick={() => logOutUser()} className=" flex items-center gap-2 group cursor-pointer text-white hover:text-gray-400 w-32" ><RiLogoutCircleRLine className="group-hover:text-color-s" /> Logout</a>
                </div>
            </div>


            {/* for mobile Screen  */}
            <div className={`  absolute ${isOpen ? 'w-6/12 left-0' : 'w-0  -left-52'} bg-color-op h-screen lg:col-span-3 md:col-span-3  flex-col  lg:hidden md:hidden flex   transition-all ease-in-out duration-500 overflow-hidden `}>
                <div className="p-2 flex gap-2 items-end  ">
                    <button onClick={() => setOpen(!isOpen)} className="mb-1"> <GiHamburgerMenu /> </button>
                    <Logo></Logo>
                </div>

                <div className="flex-grow p-4 bg-color-p m-1 flex flex-col text-white list-none">
                    {nav.map((item, idx) => <li key={idx}>{item}</li>)}
                </div>

                <div className="p-4 ">
                    <a onClick={() => logOutUser()} className=" flex items-center gap-2 group cursor-pointer text-white hover:text-gray-400 w-32" ><RiLogoutCircleRLine className="group-hover:text-color-s" /> Logout</a>
                </div>
            </div>


            <div className="lg:col-span-9 md:col-span-9 col-span-full  bg-color-p border-2 border-color-op min-h-screen">

                <div className="p-2 lg:hidden md:hidden flex gap-2 items-end  bg-color-op ">
                    <button onClick={() => setOpen(!isOpen)} className="mb-1"> <GiHamburgerMenu /> </button>
                    <Logo></Logo>
                </div>
                <div className=" w-full p-4 ">
                    <Outlet></Outlet>

                </div>


            </div>

        </div>


    );
};

export default DashBoardRoot;