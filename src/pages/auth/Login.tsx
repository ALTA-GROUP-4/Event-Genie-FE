import { FC, useState, useEffect, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import Swal from "sweetalert2";
import axios from "axios";

import { PrimButton } from "@/components/Button";
import { ObjSubmitType } from "@/utils/user";
import loginImage from "@/assets/login.png";
import { Layout } from "@/components/Layout";
import { Input } from "@/components/Input";

const Login: FC = () => {
  const [objSubmit, setObjSubmit] = useState<ObjSubmitType>({
    email: "",
    password: "",
  });
  const [, setCookie] = useCookies(["token", "email"]);
  const [isDisabled, setIsDisabled] = useState(true);
  document.title = `Login | Event Genie`;
  const navigate = useNavigate();

  useEffect(() => {
    const isEmpty = Object.values(objSubmit).every((val) => {
      return val !== "";
    });
    setIsDisabled(!isEmpty);
  }, [objSubmit]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsDisabled(true);
    axios
      .post("login", objSubmit)
      .then((response) => {
        const { data, message } = response.data;
        Swal.fire({
          icon: "success",
          title: "Success",
          text: message,
          showCancelButton: false,
        }).then((result) => {
          if (result.isConfirmed) {
            setCookie("token", data.token, { path: "/" });
            setCookie("email", data.username, { path: "/" });
            navigate("/");
          }
        });
      })
      .catch((error) => {
        const { data } = error.response;
        Swal.fire({
          title: "Failed",
          text: data.message,
          showCancelButton: false,
        });
      })
      .finally(() => setIsDisabled(false));
  }

  return (
    <Layout>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 bg-slate-100  dark:bg-slate-800">
        <div className="flex justify-center items-center">
          <img src={loginImage} alt="image-login" className="hidden md:block" />
        </div>
        <div className="flex  m-10 lg:m-10 justify-center items-center  dark:bg-slate-800  rounded-2xl">
          <form
            className="flex flex-col w-full lg:w-7/12 p-5 items-center shadow-md bg-white dark:bg-@264653 gap-3 rounded-md"
            onSubmit={(event) => handleSubmit(event)}
          >
            <h1 className="font-semibold text-3xl text-back dark:text-white">
              LOGIN
            </h1>
            <div className="w-full">
              <label className=" dark:text-white">Email</label>
              <Input
                placeholder="Enter Your Email"
                id="Email"
                type="email"
                onChange={(event) =>
                  setObjSubmit({ ...objSubmit, email: event.target.value })
                }
              />
            </div>
            <div className="w-full">
              <label className=" dark:text-white">Password</label>
              <Input
                placeholder="Enter Your Password"
                id="input-password"
                type="password"
                onChange={(event) =>
                  setObjSubmit({ ...objSubmit, password: event.target.value })
                }
              />
            </div>
            <PrimButton
              label="Login"
              id="button-login"
              type="submit"
              disabled={isDisabled}
            />
            <p className="text-black dark:text-white">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="font-bold text-black dark:text-@2A9D8F hover:text-@427AA1"
                id="nav-register "
              >
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </Layout>
  );
};
export default Login;
