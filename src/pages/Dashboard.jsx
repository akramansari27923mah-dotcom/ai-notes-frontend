import Nav from '../dashboardComponents/Nav'
import Cards from '../dashboardComponents/Cards'
import Sidebar from '../dashboardComponents/Sidebar'
import { useState } from 'react'

const Dashboard = () => {

    const [showSideBar, setShowSideBar] = useState('200px')


    return (
        <div className='flex'>
            <Sidebar showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
            <div className='w-full'>
                <Nav setShowSideBar={setShowSideBar} />
                <div className='p-8 bg-gray-200 h-[88.8vh] hide-scroll overflow-scroll'>
                    <Cards />
                </div>
            </div>
        </div>
    )
}

export default Dashboard