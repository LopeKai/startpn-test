import { Field } from 'formik';
import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    description?: string;
    error?: any;
}

export const Input = (props: InputProps) => {
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
                        className="placeholder:text-[#A0A0A0] placeholder:font-medium w-full text-sm px-3 h-[50px] rounded-[10px] bg-white border  border-gray-100 outline-none "
                    />
                </div>
                <span className="relative mt-1 text-xs text-red-500">{props.error}</span>
            </label>
        </div>
    );
}
