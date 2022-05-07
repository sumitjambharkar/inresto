import React, { useState } from 'react';
import styled from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    
  return (
    <>
    <LoginPage>
        <Logincard>
          <h1>Dinning Restaurant</h1>
          <form >
              <LableDiv>
               <lable>Username</lable>
              </LableDiv>
              <InputDiv>
              <input name='email' type="text"  />
              </InputDiv>
              <LableDiv>
               <lable>Password</lable>
              </LableDiv>
              <InputDiv>
              <input name='password' type="password"  />
              </InputDiv>
              <ButtonDiv>
                  <button type='submit'>Login</button>
              </ButtonDiv>
          </form>
        </Logincard>
        <ToastContainer/>
    </LoginPage>
    </>
  )
}

export default Login;
const LoginPage = styled.div`
    background-image:url('');
    display:flex;
    justify-items:center;
    justify-content:center;`
const Logincard = styled.div`
    margin-top:10rem;
    background-color: #ffd580;
    padding:3rem;
    border-radius:8px;
    > h1 {
        text-align:center;
        font-size:28px;
    }`
const LableDiv = styled.div`
    margin: 0.8rem;`
const InputDiv = styled.div`
    > input {
        height:2rem;
        width:16rem;
    }`
const ButtonDiv = styled.div`
    display:flex;
    justify-content:center;
    margin-top:2rem;
    > button {
        width:8rem;
        height:2rem;
        cursor: pointer;
    }`