import React from "react";
import {
    Switch,
    Route,
    NavLink
} from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Profile from "./pages/Profile";
import Contact from "./pages/Contact";

export default function App() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Signup">Sign up</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Signin">Sign in</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Profile">Profile</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Contact">Contact</NavLink>
                    </li>
                </ul>
            </nav>

            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/Signup">
                    <SignUp/>
                </Route>
                <Route path="/Signin">
                    <SignIn/>
                </Route>
                <Route path="/Profile">
                    <Profile/>
                </Route>
                <Route path="/Contact">
                    <Contact/>
                </Route>
                <Route path="/">
                    <h1> 404 not found </h1>
                </Route>
            </Switch>
        </div>
    );
}