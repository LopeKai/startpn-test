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
                    <span className={`${props.disabled && 'opacity-50 cursor-not-allowed'} text-black font-bold text-sm xl:text-xs`}>
                        {props.label}
                    </span>
                </div>
                <Field
                    {...props}
                    name={props.name}
                    as="select"
                    className={`${props.disabled && 'opacity-50 cursor-not-allowed'} w-full text-sm px-4 h-16 xl:h-10 rounded-[10px] bg-[#eceef1] border-none focus:outline-none focus:border-purple `}
                >
                    <option>{props.option}</option>
                    {props.children && props.children}
                </Field>
                <span className="text-xs text-red-500">{props.error}</span>
            </label>
        </div>
    );
}
