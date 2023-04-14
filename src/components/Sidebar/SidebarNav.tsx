import { menuLinks } from '../../data/menuLinks'

import { Links } from './Links'

export const SideBarNav = () => {
    return (
        <nav className="w-full">
            <ul>
                {
                    menuLinks.map((item: any, index: number) => <Links key={index} item={item} />)
                }
            </ul>

            <div className="h-full flex items-center">
                <div className="flex items-center seld-end gap-5 self-end">
                    <img src="/logOut.svg" alt="" />
                    <a href="/">
                        <span className="text-base text-gray-300 font-medium">Sair</span>
                    </a>
                </div>
            </div>
        </nav>
    )
}
