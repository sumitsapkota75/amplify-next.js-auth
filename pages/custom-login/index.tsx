import { Button, Input } from "@aws-amplify/ui-react";
import { notification } from "antd";
import { Auth } from "aws-amplify";
import Link from "next/link";
import React, { useEffect, useState } from "react";
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
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [user, setUser] = useState<{name:string} | null>(null)
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await Auth.signIn(email, password);
      notification.success({
        message: "Logged in successfully",
      });
      setisLoggedIn(true);
    } catch (error) {
      notification.error({
        message: `Failed to login ${error}`,
      });
    }
  };
  useEffect(() => {
    const fetchUsers = async () => {
      const {attributes} = await Auth.currentUserInfo();
      setUser(attributes)
    };
    fetchUsers();
  }, [isLoggedIn]);

  if (isLoggedIn) {
    return <Container>Hello, {user?.name}!!!!</Container>;
  }

  return (
    <Container>
      <div>AWS custom Login</div>
      <form onSubmit={handleSubmit}>
        <Input
          name="Email"
          placeholder="Enter Email"
          type="email"
          onChange={(e) => setemail(e.target.value)}
        />
        <Input
          name="Password"
          placeholder="Enter Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit">Login</Button>
      </form>
      <Link href={"/custom-signup"}>Go to Signup page</Link>
    </Container>
  );
};

export default Login;
