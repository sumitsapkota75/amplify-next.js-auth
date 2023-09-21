import type { NextPage } from 'next'
import Link from 'next/link'
import styled from 'styled-components'

const Container = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  height:100vh;
  background-color:#e9ffff;
`

const CustomLink = styled.div`
  height: 40px;
  width: 500px;
  background-color: #0bdbb6;
  display: flex;
  justify-content:center;
  align-items:center;
  margin-top: 20px;
  font-size: 16px;
  font-weight: 600;
  transition: background-color 0.3s ease;

  &:hover{
    background-color: #4dfed1
  }
`
const Header = styled.div`
  font-size:22px;
  font-weight: 900;
`


const Home: NextPage = () => {
  return (
    <Container>
      <Header>Welcome to Amplify Studio</Header>
      <CustomLink><Link href={"/auth"}>Amplify Default Signup/Login</Link></CustomLink>
      <CustomLink><Link href={"/custom-signup"}>Custom Signup using Amplify </Link></CustomLink>
      <CustomLink><Link href={"/custom-login"}>Custom Login using Amplify </Link></CustomLink>

    </Container>
  )
}

export default Home
