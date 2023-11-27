import React from 'react';
import styleCSS from './FormsControls.module.css';

export const Input = ({input, meta, ...props}) => {
    const hasError = meta.error && meta.touched;
    return (
        <div className={styleCSS.formControl + " " + (hasError ? styleCSS.error : "")} >
            <div><input {...input} {...props} type={props.type} /><label>{props.label}</label></div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Textarea = ({input, meta, ...props}) => {
    const hasError = meta.error && meta.touched;
    return (
        <div className={styleCSS.formControl + " " + (hasError ? styleCSS.error : "")} >
            <div><textarea {...input} {...props} /></div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}