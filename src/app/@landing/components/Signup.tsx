"use client";

import { recoleta_regular } from "@/fonts/fonts";
import { ChangeEvent, FormEvent } from "react";
import { useAlertBoxContext } from "@/contexts/AlertContext";
import { useState } from "react";
import { validateSignupForm } from "@/lib/validations/validate";
import { motion } from "framer-motion";
import { Oval } from "react-loader-spinner";

function Signup() {
    const initialFormData = {
        email: "",
        username: "",
        name: "",
        password: "",
        confirmPassword: "",
    };

    const { alertUser } = useAlertBoxContext();
    const [formData, setFormData] = useState(initialFormData);
    const [passwordMatch, setPasswordMatch] = useState(false);
    const [showUsernameNote, setShowUsernameNote] = useState(false);
    const [loading, setLoading] = useState(false);

    async function handleOnSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const validate = validateSignupForm(formData);
        if (!validate.success) {
            alertUser(validate.message);
            return;
        }
        setLoading(true);
        const response = await fetch("/api/signup/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },

            body: JSON.stringify(formData),
        });
        const responseData = await response.json();
        alertUser(responseData.message);
        setLoading(false);
    }

    function handleOnChange(event: ChangeEvent<HTMLInputElement>) {
        const name = event.target.name;
        setFormData((prevData) => {
            const newFormData = {
                ...prevData,
                [name]: event.target.value,
            };
            if (
                newFormData.password.length > 0 &&
                newFormData.confirmPassword.length > 0 &&
                newFormData.password === newFormData.confirmPassword
            ) {
                setPasswordMatch(true);
            } else setPasswordMatch(false);
            return newFormData;
        });
    }

    function handleFocusUsernameNotice() {
        setShowUsernameNote(true);
        return;
    }

    function handleBlurUsernameNotice() {
        setShowUsernameNote(false);
        return;
    }

    return (
        <section className="" id="signup">
            <h1 className={`header ${recoleta_regular.className}`}>Sign up</h1>
            <p>
                {" "}
                Join the music exploration! Sign up now to discover, share, and
                groove with us{" "}
            </p>

            <form onSubmit={handleOnSubmit} className="form">
                <div className="entry">
                    <label htmlFor="signup-email"> enter email </label> <br />
                    <input
                        onChange={handleOnChange}
                        id="signup-email"
                        name="email"
                        type="email"
                    />
                </div>
                <div className="entry">
                    <label htmlFor="signup-username"> create username </label>{" "}
                    <br />
                    <input
                        onChange={handleOnChange}
                        id="signup-username"
                        name="username"
                        type="text"
                        onFocus={handleFocusUsernameNotice}
                        onBlur={handleBlurUsernameNotice}
                    />
                    <motion.div
                        variants={{
                            hidden: {
                                height: 0,
                                overflow: "hidden",
                                opacity: 0,
                            },
                            show: {
                                height: "auto",
                                opacity: 1,
                            },
                        }}
                        initial="hidden"
                        animate={showUsernameNote ? "show" : "hidden"}
                        className="text-xs m-0 p-0 usernameNote"
                    >
                        <h1>note:</h1>
                        <ul className="list-disc md:list-none px-3">
                            <li>
                                username must contain more than 3 consecative
                                alphabet
                            </li>
                            <li>
                                only @,_ and numbers are allowed in username
                            </li>
                        </ul>
                    </motion.div>
                </div>
                <div className="entry">
                    <label htmlFor="signup-password"> create password </label>{" "}
                    <br />
                    <input
                        onChange={handleOnChange}
                        id="signup-password"
                        name="password"
                        type="password"
                    />
                </div>
                <div className="entry">
                    <motion.label
                        variants={{
                            disabled: { color: "#FB3680" },
                            enable: { color: "#a5d6a7" },
                        }}
                        initial={{ color: "#000000" }}
                        animate={passwordMatch ? "enable" : "disabled"}
                        htmlFor="signup-confirm-password"
                    >
                        confirm password
                    </motion.label>
                    <br />
                    <input
                        onChange={handleOnChange}
                        id="signup-confirm-password"
                        name="confirmPassword"
                        type="password"
                    />
                </div>
                <div className="entry">
                    <div className="flex gap-3 items-center">
                        <motion.button> sign up </motion.button>
                        <Oval
                            color={"#000000"}
                            secondaryColor={"#D3D3D3"}
                            height={20}
                            width={20} 
                            strokeWidth={7}
                            visible={loading}
                        />
                    </div>
                </div>
            </form>

            <div className="underline">
                <a href="#signin"> Dont Have An Account?? </a>
            </div>
        </section>
    );
}

export default Signup;
