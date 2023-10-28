import React, { useState } from 'react';
import styled from 'styled-components';
import loginimg from '../image/loginimage.png'
import LoginContainer from '../style/logincontainer.styled';
import Button from '../style/button';




const LoginImage = styled.div`
position:relative;
     display:flex;
     flex:row;
     width:90%;
     margin-top:37px;
     @media (max-width: 768px) {
        max-width: 100%; 
      }
    

`
 const Img = styled.img`
 margin-left: 208px;
 width: 34%;
 margin-top:28px;
 border-radius:30px;
 
 `
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Span=styled.span`
margin-left:-406px;
@media (max-width: 1484px) {
    display:block;
    margin:auto;
  }


`


const Label = styled.label`
  margin-top: 10px;
`;

const Input = styled.input`
  padding: 10px;
  margin: 5px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const ChangePassword=styled.p`
height: 0px;
margin-right: -342px;
cursor:pointer;
color: #FF7900;
@media (max-width: 1516px) {
    margin-right: -95px;
  }
`


const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
`;

const Checkbox = styled.input`
  margin-right: 10px;
`;



const LoginPage = () => {
  const [loginId, setLoginId] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleLoginIdChange = (e) => {
    setLoginId(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
  };

  const handleAgreeTermsChange = (e) => {
    setAgreeTerms(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add login logic here
  };

  return (
    <>
      <LoginImage>
            <Img src={loginimg} alt="" />
       
  <LoginContainer>
      
      <h2>Login</h2>
      <Form onSubmit={handleSubmit}>
        <Span htmlFor="login-id" >Login ID</Span>
        <Input
          type="text"
          id="login-id"
          name="loginId"
          value={loginId}
          onChange={handleLoginIdChange}
          placeholder="Enter your login ID"
          required
        />

        <Span htmlFor="password">Password</Span>
       
        <Input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Enter your password"
          required
          
        />
         
         <ChangePassword>Change Password</ChangePassword>

        <CheckboxContainer>
          <Checkbox
            type="checkbox"
            id="remember-me"
            name="rememberMe"
            checked={rememberMe}
            onChange={handleRememberMeChange}
          />
          <Label htmlFor="remember-me">Remember Me</Label>
        </CheckboxContainer>

        <CheckboxContainer>
          <Checkbox
            type="checkbox"
            id="agree-terms"
            name="agreeTerms"
            checked={agreeTerms}
            onChange={handleAgreeTermsChange}
          />
          <Label htmlFor="agree-terms">Agree to <span style={{color:"#FF7900",textDecoration:"underline"}}>Term & Conditions</span></Label>
        </CheckboxContainer>

        <Button type="submit">Login</Button>
        <Label className="register-link">Don't have an account? <a href="register.html" style={{color:"#FF7900",fontWeight:"bold"}}>Register here</a></Label>
      </Form>
    </LoginContainer>
    </LoginImage>

    
    </>
    
    );
};

export default LoginPage;
