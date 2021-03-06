import { Redirect } from "react-router-dom";

import Header from "../../Components/Header";
import FormLogin from "../../Components/FormLogin";

import LoginImg from "../../Assets/loginImg.svg";
import { useUser } from "../../Providers/User";

import { Content, Image, LoginContainer } from "./styles";

const Login = () => {
  const { auth } = useUser();

  if (auth) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <>
      <Header isLogged />
      <LoginContainer>
        <Content>
          <FormLogin />
        </Content>
        <Image>
          <img src={LoginImg} alt="LoginImage" />
        </Image>
      </LoginContainer>
    </>
  );
};

export default Login;
