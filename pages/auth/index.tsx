import React from "react";
import styled from "styled-components";
import { Authenticator } from "@aws-amplify/ui-react";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Authentication = () => {
  return (
    <Container>
      <Authenticator>
        {({ signOut, user }) => (
          <main>
            <h1>Hello, {user?.username}!</h1>
            <button onClick={signOut}>Sign out</button>
          </main>
        )}
      </Authenticator>
    </Container>
  );
};

export default Authentication;
