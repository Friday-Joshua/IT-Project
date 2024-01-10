'use client'
import { Eye, EyeClosed } from "@phosphor-icons/react";
import React, { FormEvent, InputHTMLAttributes, useState } from "react";
import styles from '../styles/input.module.css';
import { SlidersHorizontal } from "@phosphor-icons/react/dist/ssr";
import SearchFilter from "../(routes)/shop/searchFilter";

type InputType = InputHTMLAttributes<HTMLInputElement> & { label: string };

export function InputText({ id, placeholder, label, defaultValue, name }: InputType): React.ReactNode {
    return (
        <section className="flex flex-col gap-2 justify-start w-full max-w-full">
            <label className="text-b-100 text-lg" htmlFor={id}>{label}</label>
            <input defaultValue={defaultValue} name={name} className={`${styles.inputUser} h-12 focus:border-accent outline-none focus:outline-none transition-all duration-150 pl-12 rounded-md border border-w-100 px-4 py-2`} type="text" id={id} placeholder={placeholder} required />
        </section>
    )
}
export function InputTextArea({ id, placeholder, label, defaultValue, name }: InputType): React.ReactNode {
    return (
        <section className="flex flex-col gap-2 justify-start w-full max-w-full">
            <label className="text-b-100 text-lg" htmlFor={id}>{label}</label>
            <textarea defaultValue={defaultValue} name={name} className={`h-40 focus:border-accent outline-none focus:outline-none transition-all duration-150 p-2 rounded-md border border-w-100 px-4 py-2`} id={id} placeholder={placeholder} required />
        </section>
    )
}

export function InputTel({ id, placeholder, label, defaultValue, name }: InputType): React.ReactNode {
    return (
        <section className="flex flex-col gap-2 justify-start w-full max-w-full">
            <label className="text-b-100 text-lg" htmlFor={id}>{label}</label>
            <input defaultValue={defaultValue} name={name} maxLength={11} className={`${styles.inputPhone} h-12 focus:border-accent outline-none focus:outline-none transition-all duration-150 pl-12 rounded-md border border-w-100 px-4 py-2`} type="tel" id={id} placeholder={placeholder} required />
        </section>
    )
}

export function InputEmail({ label, placeholder, id, defaultValue, name }: InputType): React.ReactNode {
    return (
        <section className="flex flex-col gap-2 justify-start w-full max-w-full">
            <label htmlFor={id} className="text-b-100 text-lg" >{label}</label>
            <input defaultValue={defaultValue} name={name} type="email" id={id} placeholder={placeholder} required className={`${styles.inputEmail} h-12 focus:border-accent outline-none focus:outline-none transition-all duration-150 pl-12 rounded-md border border-w-100 px-4 py-2`} />
        </section>
    )
}

export function InputOTP({ label, placeholder, id, name }: InputType): React.ReactNode {

    function handleInput(e: FormEvent<HTMLInputElement>) {
        if (e.currentTarget.value.length > 6) {
            e.currentTarget.value = e.currentTarget.value.substring(0, 6);
            return
        }
    }
    return (
        <section className="flex flex-col gap-2 justify-start w-full max-w-full">
            <label className="text-b-100 text-lg" htmlFor={id}>{label}</label>
            <input name={name} onKeyUp={handleInput} className={`tracking-[1em] h-12 focus:border-accent outline-none focus:outline-none transition-all duration-150 rounded-md border border-w-100 px-4 py-2`} type="number" id={id} placeholder={placeholder} required />

        </section>
    )
}
export function InputSubmit({ label }: InputType): React.ReactNode {
    return (
        <button type="submit" className="w-full text-center font-medium text-lg bg-accent text-a-50 rounded-full px-6 py-4 transition duration-200 active:scale-95 active:opacity-50 hover:opacity-80">{label}</button>
    )
}

export function InputPassword({ label, placeholder, id, defaultValue, name }: InputType): React.ReactNode {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    function visibilityToggler() {
        setIsVisible(!isVisible);
    }
    return (
        <section className="flex flex-col gap-2 justify-start w-full max-w-full">
            <div className="flex flex-row justify-between items-center">
                <label className="text-b-100" htmlFor={id}>{label}</label>
                {isVisible ? <EyeClosed size={20} onClick={visibilityToggler} /> : <Eye size={20} onClick={visibilityToggler} />}

            </div>
            <input defaultValue={defaultValue} name={name} className={`${styles.inputPassword} h-12 focus:border-accent outline-none focus:outline-none transition-all duration-150 pl-12 rounded-md border border-w-100 px-4 py-2`} type={isVisible ? "text" : "password"} id={id} placeholder={placeholder} required />
        </section>
    )
}

export function InputSearch({ placeholder }: Omit<InputType, 'label' | 'defaultValue' | 'name' | 'id'>): React.ReactNode {
    const [filter, setFilter] = useState<string>('all');
    
    return (
        <>
            <div className=" bg-secondary flex justify-start gap-3 items-center divide-x divide-gray-200 rounded-full border border-w-100 h-16 ">
                <input className={`${styles.inputSearch} w-[80%] font-bold placeholder:font-normal text-lg text-h-color rounded-full h-full focus:border-accent outline-none focus:outline-none transition-all duration-150 pl-12 py-2`} type="text" placeholder={placeholder} required />
                <span className="flex justify-center items-center p-2 w-[20%] h-full aspect-square transition duration-200 active:rounded-r-full rounded-r-full active:bg-w-500">
                    <SlidersHorizontal size={24} className="text-icon fill-slate-600" onClick={() => {
                        document.getElementById('filterScrim').classList.remove('hidden');
                        document.getElementById('filterContainer').classList.add('slideUp');
                    }} />
                </span>
            </div>
            <SearchFilter onFilter={[filter,setFilter]} />
        </>
    )
}

export function SearchBar() {
    return <InputSearch placeholder="search for clothes" />
}
