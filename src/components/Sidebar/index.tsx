import logo from '../../images/png/logo.png'

import { SideBarNav } from './SidebarNav'

export const Sidebar = () => {
    return (
        <aside className="hidden lg:block w-full bg-white border border-gray-100 rounded-tr-[17px] rounded-br-[17px] ">
            <div className="my-12 pl-7">
                <a href="/dashboard">
                    <header>
                        <img
                            src={logo}
                            alt="Logotipo"
                        />
                    </header>
                </a>

                <div className="flex w-full mt-20">
                    <SideBarNav />
                </div>
            </div>
        </aside >
    )
}