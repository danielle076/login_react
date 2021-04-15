import React from "react";
import './SignInForm.css'
import {useForm} from "react-hook-form";

export default function SignInForm() {
    const {register, handleSubmit, formState: { errors }} = useForm();

    function onSubmit(data) {
        console.log(data)
    }

    return <form onSubmit={handleSubmit(onSubmit)}>

        <label htmlFor="email">E-mail</label>
        <input
            name="email"
            type="text"
            id="email-field"
            aria-invalid={errors.email ? "true" : "false"}
            {...register('email', { required: true })}
        />
        {errors.email && (
            <span role="alert">
          This field is required
        </span>
        )}

        <label htmlFor="password">Password</label>
        <input
            name="password"
            type="password"
            id="password-field"
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