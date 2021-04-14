import React from "react";
import './SignInForm.css'
import {useForm} from "react-hook-form";

export default function SignInForm() {
    const {register, handleSubmit, formState: { errors }} = useForm();

    function onSubmit() {
        console.log("Jij wilt versturen")
    }

    // console.log("ERROR:", errors)

    return <form onSubmit={handleSubmit(onSubmit)}>

        <label htmlFor="username">Username</label>
        <input
            name="username"
            type="text"
            aria-invalid={errors.username ? "true" : "false"}
            {...register('username', { required: true })}
        />
        {errors.username && (
            <span role="alert">
          This field is required
        </span>
        )}

        <label htmlFor="password">Password</label>
        <input
            name="password"
            type="password"
            aria-invalid={errors.password ? "true" : "false"}
            {...register('password', { required: true })}
        />
        {errors.password && (
            <span role="alert">
          This field is required
        </span>
        )}

        <input type="submit"/>
    </form>
}