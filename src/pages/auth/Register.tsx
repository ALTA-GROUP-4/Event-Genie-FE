import { FC, useState, useEffect } from "react";
import loginImage from "../../assets/login.png";
import { Layout } from "../../components/Layout";
import { Input } from "../../components/Input";
import { PrimButton } from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";

interface objRegisType {
  email: string;
  name: string;
  password: string;
}
const Register: FC = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 bg-slate-100  dark:bg-slate-800">
        <div className="flex m-10 lg:m-10 justify-center items-center  dark:bg-slate-800  rounded-2xl">
          <form className="flex flex-col w-full lg:w-7/12 p-5 items-center shadow-md bg-white dark:bg-@264653 gap-3 rounded-md">
            <h1 className="font-semibold text-3xl text-back dark:text-white">
              REGISTER
            </h1>
            <div className="w-full">
              <label className=" dark:text-white">Name</label>
              <Input
                placeholder="Insert your name"
                id="input-name"
                type="name"
              />
            </div>
            <div className="w-full">
              <label className=" dark:text-white">Email</label>
              <Input
                placeholder="Insert your username"
                id="input-email"
                type="email"
              />
            </div>
            <div className="w-full">
              <label className=" dark:text-white">Password</label>
              <Input
                placeholder="Insert your password"
                id="input-password"
                type="password"
              />
            </div>
            <PrimButton label="Register" id=" button-register" type="submit" />
            <p className="text-black dark:text-white">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-bold text-black dark:text-@2A9D8F"
                id="nav-register "
              >
                Login
              </Link>
            </p>
          </form>
        </div>

        <img
          src={loginImage}
          alt="image-login"
          className="w-full h-auto hidden md:block"
        />
      </div>
    </Layout>
  );
};

export default Register;
