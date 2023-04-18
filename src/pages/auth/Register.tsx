import { FC, useState, useEffect } from "react";
import loginImage from "../../assets/login.png";
import { Layout } from "../../components/Layout";
import { Contain } from "../../components/Container";
import { InputEvent } from "../../components/Input";
import { PrimButton } from "../../components/Button";
import { useNavigate } from "react-router-dom";

interface objRegisType {
  email: string;
  name: string;
  password: string;
}
const Register: FC = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <div className="flex w-full h-full p-20 justify-center">
        <div className="w-[32%] h-max flex justify-end items-center">
          <Contain>
            <form className="w-full h-full p-6 ">
              <p className="text-2xl tracking-wider font-semibold mb-5">
                Sign Up Here
              </p>
              <InputEvent id="input-name" placeholder="Name" />
              <div className="my-2" />
              <InputEvent id="input-email" placeholder="Email" type="email" />
              <div className="my-2" />
              <InputEvent
                id="input-password"
                placeholder="Password"
                type="password"
              />
              <div className="my-10" />
              <PrimButton
                label="Register"
                id=" button-register"
                type="submit"
              />
              <p className="text-slate-900 text-xs mt-6 text-center">
                Already have an Account ?{" "}
                <a
                  className="font-semibold"
                  id="nav-register"
                  href="#"
                  onClick={() => navigate("/login")}
                >
                  Login
                </a>
              </p>
            </form>
          </Contain>
        </div>
        <div className="w-[55%]">
          <img src={loginImage} alt="image-login" />
        </div>
      </div>
    </Layout>
  );
};

export default Register;
