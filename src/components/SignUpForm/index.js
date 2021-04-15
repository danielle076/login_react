import React from "react";
import './SignUpForm.css'
import {useForm} from "react-hook-form";
import {Link} from "react-router-dom";

export default function SignUpForm() {
    const {register, handleSubmit, formState: { errors }} = useForm();

    function onSubmit(data) {
        console.log(data);
    }

    return <form onSubmit={handleSubmit(onSubmit)}>

        <label htmlFor="username">Username</label>
        <input
            name="username"
            type="text"
            id="username-field"
            placeholder="Enter your username"
            aria-invalid={errors.username ? "true" : "false"}
            {...register('username', { required: true })}
        />
        {errors.username && (
            <span role="alert">
          This field is required
        </span>
        )}

        <label htmlFor="email">Email adress</label>
        <input
            name="email"
            type="text"
            id="email-field"
            placeholder="Enter your email"
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
            placeholder="Enter your password"
            aria-invalid={errors.password ? "true" : "false"}
            {...register('password', { required: true })}
        />
        {errors.password && (
            <span role="alert">
          This field is required
        </span>
        )}

        <input
            type="submit"
        />
        <span>
            Already have an account? Login <Link to="/Signin">here</Link>.
        </span>

    </form>
}