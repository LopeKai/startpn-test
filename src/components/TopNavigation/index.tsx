import { TbRadiusBottomLeft } from 'react-icons/tb'

import avatarUser from "../../images/png/imageUser.png"
import { FaUserAlt } from 'react-icons/fa'

export const TopNavigation = () => {
    return (
        <section className="flex items-center justify-between gap-10 lg:gap-0">
            <h1 className="text-blue-500 text-sm lg:text-3xl font-semibold">Não conformidades</h1>

            <div className="px-4 w-full lg:w-[234px] h-[55px] bg-white rounded-full flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <FaUserAlt 
                        className="w-[20px]"
                    />
                    <p className="text-xs lg:text-sm">Usuário</p>
                </div>
                <div className="flex items-center gap-5">
                    <TbRadiusBottomLeft
                        className="rotate-[-45deg] w-3"
                    />
                </div>
            </div>
        </section>
    )
}