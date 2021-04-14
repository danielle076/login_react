import React from "react";
import './SignUpForm.css'
import {useForm} from "react-hook-form";
import {Link} from "react-router-dom";

export default function SignUpForm() {
    const {register, handleSubmit, formState: { errors }} = useForm();

    function onSubmit(data) {
        console.log(data);
    }

    console.log("ERROR:", errors)

    return <form onSubmit={handleSubmit(onSubmit)}>

        <label htmlFor="username">Username</label>
        <input
            name="username"
            type="text"
            placeholder="Enter your username"
            aria-invalid={errors.username ? "true" : "false"}
            {...register('username', { required: true })}
        />
        {errors.username && (
            <span role="alert">
          This field is required
        </span>
        )}

        <label htmlFor="emailAdress">Email adress</label>
        <input
            name="emailAdress"
            type="text"
            placeholder="Enter your email"
            aria-invalid={errors.emailAdress ? "true" : "false"}
            {...register('emailAdress', { required: true })}
        />
        {errors.emailAdress && (
            <span role="alert">
          This field is required
        </span>
        )}

        <label htmlFor="password">Password</label>
        <input
            name="password"
            type="password"
            placeholder="Enter your password"
            aria-invalid={errors.password ? "true" : "false"}
            {...register('password', { required: true })}
        />
        {errors.password && (
            <span role="alert">
          This field is required
        </span>
        )}

        <label htmlFor="confirmPassword">Confirm password</label>
        <input
            name="confirmPassword"
            type="password"
            placeholder="Enter password again"
            aria-invalid={errors.confirmPassword ? "true" : "false"}
            {...register('confirmPassword', { required: true })}
        />
        {errors.confirmPassword && (
            <span role="alert">
          This field is required
        </span>
        )}

        <input
            type="submit"
        />
        <span>
            Already have an account? Login <Link to="#">here</Link>.
        </span>

    </form>
}