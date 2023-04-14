import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<any> {
    title: string;
}

export const Button = ({ title, ...props }: ButtonProps) => {
    return (
        <button
            {...props}
            className="w-full h-[45px] bg-blue-500 rounded-full text-center text-white font-medium text-lg ease-out duration-300 hover:brightness-75"
        >
            {title}
        </button>
    )
}