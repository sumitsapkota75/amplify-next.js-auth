import { Button, Input, Link } from "@aws-amplify/ui-react";
import { notification } from "antd";
import { Auth } from "aws-amplify";
import { useRouter } from "next/router";
import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: white;
  color: black;
  form {
    width: 50%;
  }
  input {
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setname] = useState("");
  const [phone, setPhone] = useState("");
    const router = useRouter()
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await Auth.signUp({
        username: email,
        password: password,
        attributes: {
          email: email,
          name: name,
          phone_number: phone,
        },
      });
      notification.success({
        message: "User created successfully",
      });
      router.push(`/confirm-email?user=${email}`)
    } catch (error) {
      notification.error({
        message: `Failed to create user ${error}`,
      });
    }
  };
  return (
    <Container>
      <div>AWS custom signup</div>
      <form onSubmit={handleSubmit}>
        <Input
          name="Name"
          placeholder="Enter Name"
          required={true}
          type="text"
          onChange={(e) => setname(e.target.value)}
        />
        <Input
          name="Email"
          placeholder="Enter Email"
          required={true}
          type="email"
          onChange={(e) => setemail(e.target.value)}
        />
        <Input
          name="Password"
          placeholder="Enter Password"
          required={true}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          name="Phone"
          placeholder="Enter Phone number"
          required={true}
          type="text"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit">Create Account</Button>
      </form>
      <Link href={"/custom-login"}>Go to Login page</Link>
    </Container>
  );
};

export default Login;
