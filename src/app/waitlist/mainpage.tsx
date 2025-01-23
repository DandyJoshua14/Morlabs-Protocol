'use client'
import React, { useState } from 'react'
import '../globals.css'
import { PiEyeClosedThin } from "react-icons/pi";
import { GoEye } from "react-icons/go";
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const App = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [showToaster, setShowToaster] = useState(false);
    const [username, setUserName] = useState("")
    const [email_address, setEmailAddress] = useState("")
    const [country, setCountry] = useState("")
    const router = useRouter();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setIsLoading(true)
        let joinWaitlist = () => {

        }
    };

    return (
        <>
            <div>
                <form className='flex flex-col w-ful p-4'></form>
            </div>
        </>
    )
}

export default App
