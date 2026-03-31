import { Link } from "react-router-dom"
import navbar from "../data/dashboardSidebar"
import { X } from "lucide-react"


const Sidebar = ({setShowSideBar, showSideBar}) => {

    return (
        <>
            {/* large screen */}
            <div className='w-[250px] shadow-sm h-screen p-4 hidden md:block'>

                <div className="flex gap-5 flex-col">
                    {
                        navbar.map((items, ind) => {

                            const Icon = items?.icon
                            const classAdd = items.title === 'Dashboard' && 'bg-gray-200'
                            return (
                                <div key={ind}>
                                    <ul className={`flex gap-2 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 active:scale-75 transition-all duration-300 ${classAdd}`}>
                                        <Icon />
                                        <Link to={items.link}>{items.title}</Link>
                                    </ul>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            {/* small screen */}
            <div
                style={{ width: showSideBar }}
                className={` left-0 shadow-sm h-screen overflow-hidden md:hidden absolute bg-white transition-all duration-300`}>

                <div
                    onClick={() => setShowSideBar('0px')}
                    className="m-2 flex justify-end cursor-pointer">
                    <X />
                </div>

                <div className="flex gap-5 flex-col p-4">
                    {
                        navbar.map((items, ind) => {

                            const Icon = items?.icon
                            const classAdd = items.title === 'Dashboard' && 'bg-gray-200'
                            return (
                                <div key={ind}>
                                    <ul className={`flex gap-2 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 active:scale-75 transition-all duration-300 ${classAdd}`}>
                                        <Icon />
                                        <Link to={items.link}>{items.title}</Link>
                                    </ul>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Sidebar