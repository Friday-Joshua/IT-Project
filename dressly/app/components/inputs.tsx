'use client'
import React, {MouseEvent, useState,useRef, createRef, useEffect, FormEvent, FormHTMLAttributes, InputHTMLAttributes, LabelHTMLAttributes} from "react";
import styles from './input.module.css'
import {Eye,EyeClosed} from "@phosphor-icons/react"

type InputType = InputHTMLAttributes<HTMLInputElement> & {label:string};

function Text({id,placeholder,label,defaultValue,name} : InputType):React.ReactNode{
    return (
        <section className="flex flex-col gap-2 justify-start w-full max-w-full">
            <label className="text-b-100" htmlFor={id}>{label}</label>
            <input defaultValue={defaultValue} name={name} className={`${styles.inputUser} h-12 focus:border-accent outline-none focus:outline-none transition-all duration-150 pl-12 rounded-md border border-w-100 px-4 py-2`} type="text" id={id} placeholder={placeholder} required />
        </section>
    )
}

function Tel({id,placeholder,label,defaultValue,name} : InputType):React.ReactNode{
    return (
        <section className="flex flex-col gap-2 justify-start w-full max-w-full">
            <label className="text-b-100" htmlFor={id}>{label}</label>
            <input defaultValue={defaultValue} name={name} maxLength={11} className={`${styles.inputPhone} h-12 focus:border-accent outline-none focus:outline-none transition-all duration-150 pl-12 rounded-md border border-w-100 px-4 py-2`} type="tel" id={id} placeholder={placeholder} required />
        </section>
    )
}

function Email({label,placeholder,id,defaultValue,name}:InputType):React.ReactNode{
    return (
        <section className="flex flex-col gap-2 justify-start w-full max-w-full">
            <label htmlFor={id} className="text-b-100" >{label}</label>
            <input defaultValue={defaultValue}name={name} type="email" id={id} placeholder={placeholder} required   className={`${styles.inputEmail} h-12 focus:border-accent outline-none focus:outline-none transition-all duration-150 pl-12 rounded-md border border-w-100 px-4 py-2`} />
        </section>
    )
}

function OTP({label,placeholder,id,name}:InputType):React.ReactNode{

    function handleInput(e:FormEvent<HTMLInputElement>){
        if(e.currentTarget.value.length > 6) {
            e.currentTarget.value = e.currentTarget.value.substring(0,6);
            return
        }
    }
       return (
        <section className="flex flex-col gap-2 justify-start w-full max-w-full">
            <label className="text-b-100" htmlFor={id}>{label}</label>
            <input name={name} onKeyUp={handleInput} className={`tracking-[1em] h-12 focus:border-accent outline-none focus:outline-none transition-all duration-150 rounded-md border border-w-100 px-4 py-2`} type="number" id={id} placeholder={placeholder} required />

        </section>
    )
}
function Button({label,onClick}:InputType):React.ReactNode{
    return (
        <button type="submit">{label}</button>
    )
}

function Password({label,placeholder,id,defaultValue,name}:InputType):React.ReactNode{
    const [isVisible,setIsVisible] = useState<boolean>(false);
    function visibilityToggler() {
        setIsVisible(!isVisible);
    }
    return (
        <section className="flex flex-col gap-2 justify-start w-full max-w-full">
            <div className="flex flex-row justify-between items-center">
                <label className="text-b-100" htmlFor={id}>{label}</label>
                {isVisible ? <EyeClosed size={20} onClick={visibilityToggler} />:<Eye size={20} onClick={visibilityToggler} /> }
                
            </div>
            <input defaultValue={defaultValue} name={name} className={`${styles.inputPassword} h-12 focus:border-accent outline-none focus:outline-none transition-all duration-150 pl-12 rounded-md border border-w-100 px-4 py-2`} type={isVisible ? "text" : "password"} id={id} placeholder={placeholder} required />
        </section>
    )
}


export default function Input(){}
Input.Text = Text;
Input.Password = Password;
Input.Submit = Button;
Input.OTP = OTP;
Input.Email = Email;
Input.Tel = Tel;