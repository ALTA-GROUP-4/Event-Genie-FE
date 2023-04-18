import { FC } from "react";
import { Layout } from "../../components/Layout";
import { Contain } from "../../components/Container";
import { InputEvent } from "../../components/Input";
import { PrimButton } from "../../components/Button";
import loginImage from "../../assets/login.png";
import { useNavigate, useNavigation } from "react-router-dom";

interface objLoginType {
  email: string;
  password: string;
}
const Login: FC = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <div className="flex w-full h-full p-20 justify-center">
        <div className="w-[55%]">
          <img src={loginImage} alt="image-login" />
        </div>
        <div className="w-[32%]  flex justify-end items-center">
          <Contain>
            <form className="w-full p-8">
              <p className="text-lg tracking-wide mb-5">Welcome !</p>
              <p className="text-2xl tracking-wider font-semibold mb-1">
                Login
              </p>
              <p className="text-xs mb-10">lorem Ipsum is simply</p>
              <InputEvent id="input-email" placeholder="Email" />
              <div className="my-6" />
              <InputEvent
                id="input-password"
                placeholder="Password"
                type="password"
              />
              <div className="my-12" />
              <PrimButton label="Login" id=" button-login" type="submit" />
              <p className="text-slate-900 text-xs mt-8 text-center">
                Don't have an Account ?{" "}
                <a
                  className="font-semibold"
                  id="nav-register"
                  href="#"
                  onClick={() => navigate("/register")}
                >
                  Register
                </a>
              </p>
            </form>
          </Contain>
        </div>
      </div>
    </Layout>
  );
};
export default Login;
