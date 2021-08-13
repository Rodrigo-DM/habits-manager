import FormLogin from "../../Components/FormLogin";
import { PageLoginContainer } from "./styles";
import LoginImg from "../../Assets/loginImg.svg";
import { Redirect } from "react-router-dom";

const Login = () => {
  const token = JSON.parse(localStorage.getItem("@Habits:userID")) || "";

  if (token !== "") {
    return <Redirect to="/dashboard" />;
  }

  return (
    <PageLoginContainer>
      <FormLogin />
      <img src={LoginImg} alt="LoginImage" />
    </PageLoginContainer>
  );
};

export default Login;
