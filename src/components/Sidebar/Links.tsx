interface LinksProps {
    item: {
        title: string;
        icon: string;
    }
}

export const Links = ({ item }: LinksProps) => {
    return (
        <li
            className="mb-8 cursor-pointer hover:text-red pr-5 bg-red">
            <div className="flex items-center justify-between">
                <div className="flex items-center justify-between gap-3">
                    <img
                        src={item.icon}
                        alt=""
                    />

                    <a href="/dashboard">
                        <span className="text-sm text-gray-300 font-medium">
                            {item.title}
                        </span>
                    </a>
                </div>
            </div>
        </li>
    )
}