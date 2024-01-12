import React, { useContext, useState } from "react"

import "./Auth.css"
import Card from "../../shared/components/UIElements/Card"
import Input from "../../shared/components/FormElements/Input"
import Button from "../../shared/components/FormElements/Button"
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "../../shared/util/validators"
import { useForm } from "../../hooks/form-hook"
import { AuthContext } from "../../shared/context/auth-context"

const Auth = () =>{
    const [isLoginMode, setIsLognMode] = useState(true)
    const [formState, inputHandler, setFormData] = useForm({
        email:{
            value:"",
            isValid: false
        },
        password:{
            value:"",
            isValid: false
        },
        
    }, false)
    const auth = useContext(AuthContext)
    const authSubmitHandler = (e)=>{
        e.preventDefault();
        auth.login()
        console.log(formState.inputs)
    }
    const switchModeHandler = ()=>{
        if(!isLoginMode){
            setFormData({
                ...formState.inputs,
                name: undefined
            },formState.inputs.email.isValid && formState.inputs.password.isValid)
        }else{
            setFormData({
                ...formState.inputs,
                name:{
                    value:"",
                    isValid: false
                }
            },false)
        }
        setIsLognMode(!isLoginMode)
    }
return <Card className="authentication">
    <h2>Login Required</h2>
    <hr/>
    <form onSubmit={authSubmitHandler}>
        {!isLoginMode && <Input id="name" element="input" type="text" label="Name" validators={[VALIDATOR_REQUIRE()]} errorText="Plese write your name" onInput={inputHandler}/>}
        <Input id="email" element="input" type="email" label="Email" validators={[VALIDATOR_EMAIL()]} errorText="Plese write your email" onInput={inputHandler}/>
        <Input id="password" element="password" type="password" label="Password" validators={[VALIDATOR_MINLENGTH(5)]} errorText="Plese enter at least 5 characters" onInput={inputHandler}/>
        <Button type="submit" disabled={!formState.isValid}>{isLoginMode?"LOGIN": "SINUP"}</Button>
    </form>
    <Button inverse onClick={switchModeHandler}>SWITCH TO {isLoginMode?"SIGN UP":"LOGIN"}</Button>
</Card>
}

export default Auth