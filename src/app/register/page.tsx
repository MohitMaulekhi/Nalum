"use client";
import React, { useState, FormEvent, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import toast from "react-hot-toast";
import Link from "next/link";
import { useAuth } from "@/firebase/auth";

const RegisterPage = () => {
    const [error, setError] = useState("");
    const { currentUser, signup } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (currentUser) {
            router.push("/dashboard");
        }
    }, [currentUser, router]);

    const isValidEmail = (email: string) => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return emailRegex.test(email);
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const email = (form.elements.namedItem('email') as HTMLInputElement).value;
        const password = (form.elements.namedItem('password') as HTMLInputElement).value;
        const confirmPassword = (form.elements.namedItem('confirmPassword') as HTMLInputElement).value;

        if (!isValidEmail(email)) {
            setError("Email is invalid");
            toast.error("Email is invalid");
            return;
        }

        if (!password || password.length < 8) {
            setError("Password is invalid");
            toast.error("Password is invalid");
            return;
        }

        if (confirmPassword !== password) {
            setError("Passwords are not equal");
            toast.error("Passwords are not equal");
            return;
        }

        try {
            await signup(email, password);
            toast.success("Account created successfully");
            router.push("/login");
        } catch (error) {
            if (error instanceof Error) {
                toast.error("Error, try again " + error.message);
                setError(error.message);
            }
        }
    };

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8 bg-contain">
            <div className="flex justify-center flex-col items-center">
                <Image className="rounded-full" src="/logo.png" alt="logo" width={60} height={60} />
                <h2 className="mt-6 text-center text-2xl leading-9 tracking-tight text-gray-900">
                    Sign up on our website
                </h2>
            </div>

            <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-[480px]">
                <div className="bg-white px-6 py-6 shadow sm:rounded-lg sm:px-12">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Password
                            </label>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <label
                                htmlFor="confirmPassword"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Confirm password
                            </label>
                            <div className="mt-2">
                                <input
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black"
                                />
                                <label
                                    htmlFor="remember-me"
                                    className="ml-3 block text-sm leading-6 text-gray-900"
                                >
                                    Accept our terms and privacy policy
                                </label>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full border-[#181818] justify-center rounded-md bg-[#181818] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-white transition-colors hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                            >
                                Sign up
                            </button>
                            <Link
                                href={'/login'}
                                className="ml-3 block mt-1 text-sm leading-6 text-gray-900 text-right"
                            >
                                Already have an account?
                            </Link>
                            <div className="relative mt-10">
                                <div
                                    className="absolute inset-0 flex items-center"
                                    aria-hidden="true"
                                >
                                    <div className="w-full border-t border-gray-200" />
                                </div>
                                <div className="relative flex justify-center text-sm font-medium leading-6">
                                    <span className="bg-white px-6 text-gray-900">
                                        Or continue with
                                    </span>
                                </div>
                            </div>
                            <button
                                onClick={() => { }}
                                className="flex mt-6 w-full items-center border border-gray-300 justify-center gap-3 rounded-md bg-white px-3 py-1.5 text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                            >
                                <span className="text-lg font-semibold leading-6 flex justify-center items-center gap-5">
                                    <Image className="rounded-full" src="/google_logo.png" alt="logo" width={30} height={30} />
                                    Google
                                </span>
                            </button>
                            <p className="text-red-600 text-center text-[16px] my-4">
                                {error && error}
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
