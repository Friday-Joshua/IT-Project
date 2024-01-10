'use client'

import dynamic from "next/dynamic";
// import type { Metadata } from "next";
import { FormEvent, HTMLAttributes, useState } from "react";
import {useRouter} from 'next/navigation';

// export const metaData:Metadata = {
//     title:"Dressly | Signup for a free account"
// }

const Link = dynamic(() => import('next/link'));
const Spacer = dynamic(() => import('@/app/components/spacer'));
const ArrowRight = dynamic(() => import('@phosphor-icons/react/dist/ssr').then(mod => mod.ArrowRight));
const CaretLeft = dynamic(() => import('@phosphor-icons/react/dist/ssr').then(mod => mod.CaretLeft));
const X = dynamic(() => import('@phosphor-icons/react/dist/ssr').then(mod => mod.X));
const InputEmail = dynamic(() => import('@/app/components/inputs').then(mod => mod.InputEmail));
const InputPassword = dynamic(() => import('@/app/components/inputs').then(mod => mod.InputPassword));
const InputOTP = dynamic(() => import('@/app/components/inputs').then(mod => mod.InputOTP));


type FormState = Partial<{ email: string, password: string }>;

export default function Page() {
    const [currentPhase, setCurrentPhase] = useState<number>(0);
    const [formState, setFormState] = useState<FormState>({
        email: '', password: '',
    });
;

    function setProgress(phase: number) {
        setCurrentPhase(phase);
    }

    function saveFormState(state: FormState) {
        setFormState(state);
    }

    return (
        <main className="bg-primary mb-24 mx-5">
            {currentPhase === 0
                ? <Phase1 formState={[formState, setFormState]} progress={setProgress} />
                : <Phase2 formState={[formState, setFormState]} progress={setProgress} />
            }

            <div className="w-screen -mx-6 fixed bottom-0 bg-secondary p-4 border-t">
                <p className="text-b-500 text-small-2 font-bold">Step {currentPhase + 1}</p>
                <div className="flex flex-row justify-start gap-2 items-center mt-2">
                    <div className={`${currentPhase == 0 ? "w-8 bg-accent" : "w-4 bg-a-50"} h-2 rounded-full transition duration-170`}></div>
                    <div className={`${currentPhase == 0 ? "w-4 bg-a-50" : "w-8 bg-accent"}
                    h-2 rounded-full transition duration-170`}></div>
                </div>
            </div>
        </main>
    )
}

function Phase1({ formState: [prevState, setFormState], progress }: HTMLAttributes<HTMLElement> &
{ formState: ReturnType<typeof useState<FormState>>, progress: (phase: number) => void }) {

    const [isFormValid, setIsFormValid] = useState(false);

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        // retrieving and storing user inputs
        const fd = new FormData(e.currentTarget);
        const state = { email: fd.get("email") as string, password: fd.get('password') as string };
        setFormState(state); // updating formstate
        progress(1) //proceeding to Create Password
    }

    return (
        <section className="mb-12">
            <div className="flex flex-row justify-between items-center mt-4">
                <header>
                    <h1 className="text-h3 font-black">Sign In</h1>
                </header>
                <Link href={'/'}>
                    <X size={24} color="text-b-500 " className="active:opacity-5" />
                </Link>
            </div>
            <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
                <InputEmail defaultValue={(prevState as FormState).email} label='Email' name="email" id="email" placeholder="me@example.com" />
                <InputPassword defaultValue={(prevState as FormState).password} name="password" label="Password" id="password" placeholder="***********" />
                <Link href={'/password-reset'} className=" underline text-b-500">Can&apos;t remember password?</Link>
                <button type="submit" disabled={isFormValid} className="lg:hover:bg-a-600 active:bg-a-600 bg-accent flex flext-row justify-center items-center rounded-full h-[50px] text-a-50 gap-2">Next: Create Password <ArrowRight size={20} /></button>
            </form>
            <div className="mt-5">
                <p>Don&apos;t have an account?</p>
                <Link href={'/signup'} className={'mt-2 block rounded-full w-fit p-3 bg-a-50 text-accent'}>Sign Up</Link>
            </div>
        </section>
    )
}


function Phase2({ formState: [prevState, setFormState], progress }: HTMLAttributes<HTMLElement> &
{ formState: ReturnType<typeof useState<FormState>>, progress: (phase: number) => void}) {

    const router = useRouter();

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        // retrieving and storing user inputs
        const fd = new FormData(e.currentTarget);
        const secretOTP = "123456";
        const enteredOTP = fd.get('otp');
        if (secretOTP === enteredOTP) {
            e.currentTarget.reset(); ``
            alert(`Account Created! ${JSON.stringify(prevState)}`);
            router.push('/')
        } else {
            return
        }

    }

    return (
        <>
            <div className="flex flex-row justify-start mt-4">
                <CaretLeft size={24} color="text-b-500" onClick={() => progress(0)} />
            </div>
            <header>
                <h1 className="text-h3 font-black">OTP</h1>
            </header>
            <p>A 6-digit verification code has been sent to <span className="font-bold">johndoe@example.com.</span> Enter the code in the textbox below</p>
            <form onSubmit={handleSubmit} className="mt-12 flex flex-col gap-5">
                <InputOTP name="otp" label="OTP" id="otp" placeholder="0 0 0 0 0 0" />
                <button type="submit" className="lg:hover:bg-a-600 active:bg-a-600 bg-accent flex flext-row justify-center items-center rounded-full h-[50px] text-a-50 gap-2">Verify OTP </button>
            </form>
        </>
    )
}