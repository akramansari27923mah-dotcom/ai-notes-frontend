import { Menu } from "lucide-react"
import { AuthCon } from "../contexts/auth.context"
const Nav = ({setShowSideBar}) => {

    const { user } = AuthCon()


    return (
        <div className="bg-gray-100 p-4">

            <div className="flex justify-between items-center ">

                <div className="flex items-center gap-2">
                    <Menu onClick={() => setShowSideBar('200px')} className="md:hidden cursor-pointer" />
                <h1 className="text-lg font-semibold">All Notes</h1>
                </div>

                <div className="flex justify-center items-center gap-3">

                    <div className="lg:flex flex-col text-sm hidden md:block">
                        <label className="text-end">
                            {user?.username}
                        </label>
                        {user?.email}
                    </div>

                    <label
                        className="px-4 py-2 capitalize rounded-full text-base font-semibold bg-white flex ">
                        {user?.username[0]}
                    </label>

                </div>

            </div>

        </div>
    )
}

export default Nav