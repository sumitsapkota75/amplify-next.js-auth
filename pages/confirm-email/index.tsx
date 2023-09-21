import { Button, Input } from "@aws-amplify/ui-react";
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
  const [code, setCode] = useState("");
  const router = useRouter()
  const {query} = router
  let user: string 
  if (typeof query.user === 'string') {
    // query.user is a string, so it can be assigned directly to the user variable
    user = query.user;
  } else {
    // Handle the case where query.user is undefined or an array
    // For example, you can set a default value or throw an error
    user = 'defaultUser'; // Set a default value
    // Or you can throw an error if you want to handle this case differently
    // throw new Error('User is undefined or not a string');
  }
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await Auth.confirmSignUp(user, code);
      notification.success({
        message: `User verified successfully, now you can login`,
      });
      router.push("/custom-login")
    } catch (error) {
      notification.error({
        message: `Failed to verify user ${error}`,
      });
    }
  };
  return (
    <Container>
      <div>Confirm Email</div>
      <form onSubmit={handleSubmit}>
        <Input
          name="Verification COde"
          placeholder="Enter Verification Cdde"
          required={true}
          type="text"
          onChange={(e) => setCode(e.target.value)}
        />
        <Button type="submit">Verify My Account</Button>
      </form>
    </Container>
  );
};

export default Login;
