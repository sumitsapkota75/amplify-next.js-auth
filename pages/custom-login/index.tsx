import { Button, Input } from '@aws-amplify/ui-react'
import React, { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    height: 100vh;
    background-color:white;
    color: black;
    form{
        width: 50%
    }
    input{
        margin-top:20px;
        margin-bottom:20px;
    }
`

const Login = () => {
    const [email, setemail] = useState("")
    const [Password, setPassword] = useState("")
    const [name, setname] = useState("")

    const handleSubmit = (e:any) => { 
        e.preventDefault()
     }
  return (
    <Container>
    <div>AWS custom signup</div>
    <form onSubmit={handleSubmit}>
    <Input name="Name" placeholder='Enter Name' type="text" onChange={(e)=>setname(e.target.value)}/>
    <Input name="Email" placeholder='Enter Email' type="email" onChange={(e)=>setemail(e.target.value)}/>
    <Input name="Password" placeholder='Enter Password' type="password" onChange={(e)=>setPassword(e.target.value)}/>
    <Button type="submit">Create Account</Button>
    </form>
    </Container>
    
  )
}

export default Login