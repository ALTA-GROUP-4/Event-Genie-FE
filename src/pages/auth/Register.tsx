import { FC, useState, useEffect, FormEvent } from "react";
import { ObjSubmitTypeRegister } from "../../utils/user";
import { Link, useNavigate } from "react-router-dom";
import { PrimButton } from "../../components/Button";
import { Layout } from "../../components/Layout";
import { Input } from "../../components/Input";

import loginImage from "../../assets/login.png";
import Swal from "sweetalert2";
import axios from "axios";

const Register: FC = () => {
  const [objSubmit, setObjSumit] = useState<ObjSubmitTypeRegister>({
    name: "",
    email: "",
    password: "",
  });
  const [isDisabled, setIsDisabled] = useState(true);
  document.title = `Register | Event Genie`;
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
      .post(`users`, objSubmit)
      .then((response) => {
        const { data, message } = response.data;
        Swal.fire({
          icon: "success",
          title: "Success",
          text: message,
          showCancelButton: false,
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("/login");
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
        <div className="flex m-10 lg:m-10 justify-center items-center  dark:bg-slate-800  rounded-2xl">
          <form
            className="flex flex-col w-full lg:w-7/12 p-5 items-center shadow-md bg-white dark:bg-@264653 gap-3 rounded-md"
            onSubmit={(event) => handleSubmit(event)}
          >
            <h1 className="font-semibold text-3xl text-back dark:text-white">
              REGISTER
            </h1>
            <div className="w-full">
              <label className=" dark:text-white">Name</label>
              <Input
                placeholder="Insert your name"
                id="input-name"
                type="name"
                onChange={(event) =>
                  setObjSumit({ ...objSubmit, name: event.target.value })
                }
              />
            </div>
            <div className="w-full">
              <label className=" dark:text-white">Email</label>
              <Input
                placeholder="Insert your username"
                id="input-email"
                type="email"
                onChange={(event) =>
                  setObjSumit({ ...objSubmit, email: event.target.value })
                }
              />
            </div>
            <div className="w-full">
              <label className=" dark:text-white">Password</label>
              <Input
                placeholder="Insert your password"
                id="input-password"
                type="password"
                onChange={(event) =>
                  setObjSumit({ ...objSubmit, password: event.target.value })
                }
              />
            </div>
            <PrimButton
              label="Register"
              id=" button-register"
              type="submit"
              disabled={isDisabled}
            />
            <p className="text-black dark:text-white">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-bold text-black dark:text-@2A9D8F hover:text-@427AA1"
                id="nav-register "
              >
                Login
              </Link>
            </p>
          </form>
        </div>

        <div className="flex justify-center items-center">
          <img
            src={loginImage}
            alt="image-register"
            className="hidden md:block"
          />
        </div>
      </div>
    </Layout>
  );
};

export default Register;
