import { Field } from 'formik';
import { ReactEventHandler, ReactNode } from 'react';

interface SelectMenuProps {
    name?: string;
    option?: string;
    label?: string;
    options?: object[];
    error?: any;
    children?: ReactNode;
    onChange?: ReactEventHandler;
    disabled?: boolean;
}

export const SelectModal = (props: SelectMenuProps) => {
    return (
        <div>
            <label className="block mb-1">
                <div className="mb-1">
                    <span className={`${props.disabled && 'opacity-50 cursor-not-allowed'} text-black text-sm`}>
                        {props.label}
                    </span>
                </div>
                <Field
                    {...props}
                    name={props.name}
                    as="select"
                    className={`${props.disabled && 'opacity-50 cursor-not-allowed'} placeholder:text-[#A0A0A0] placeholder:font-medium w-full text-sm px-3 h-[50px] rounded-[10px] bg-white border  border-gray-100 outline-none`}
                >
                    <option>{props.option}</option>
                    {props.children && props.children}
                </Field>
                <span className="text-xs text-red-500">{props.error}</span>
            </label>
        </div>
    );
}

