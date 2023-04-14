import { Field } from "formik"
import { InputHTMLAttributes } from "react";

interface InputModalProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    description?: string;
    error?: any;
}

export const InputModal = (props: InputModalProps) => {
    return (
        <div className="mb-6">
            <label className="block mb-3">
                <div className="mb-1">
                    <span className="text-black text-sm">
                        {props.label}
                    </span>
                </div>
                <div>
                    <Field
                        {...props}
                        className="bg-[#eceef1] placeholder:text-[#cacaca] placeholder:font-normal w-full text-sm px-3 h-10 rounded-[10px]  outline-none "
                    />
                </div>
                <span className="relative mt-1 text-xs text-red-500">{props.error}</span>
            </label>
        </div>
    )
}