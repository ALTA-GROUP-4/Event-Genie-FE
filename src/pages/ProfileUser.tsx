import { FC } from "react";
import { Layout } from "../components/Layout";
import { PrimButton, SecButton } from "../components/Button";
import { Input } from "../components/Input";

const ProfileUser: FC = () => {
  return (
    <Layout>
      <div className="flex justify-center items-center bg-slate-100 dark:bg-slate-900">
        <div className="grid  md:max-w-60 lg:max-w-[100%] m-5 md:m-10 justify-start items-center  dark:bg-slate-800  rounded-2xl">
          <form className="flex flex-col md:w-96 p-5 justify-center items-center shadow-lg bg-white gap-3 rounded-large dark:bg-@264653">
            <div className="card w-fit h-fit">
              <div className="p-1 bg-slate-300  rounded-full">
                <img
                  src="./users.png"
                  alt=""
                  className="h-36 w-36 border-spacing-1 rounded-full"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div>
                <p className="font-bold text-2xl dark:text-white">Name Users</p>
              </div>
              <div>
                <p className="font-bold text-lg dark:text-white">Email</p>
              </div>
            </div>
            <div className="flex w-full">
              <PrimButton
                label="Edit"
                id=" button-edit-users"
                type="button"
                data-hs-overlay="#hs-medium-modal"
              />
              <SecButton
                label="Delete"
                id=" button-delete-users"
                type="button"
              />

              <div
                id="hs-medium-modal"
                className="hs-overlay hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto"
              >
                <div className="hs-overlay-open:md:mt-24 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all md:max-w-2xl md:w-full m-3 md:mx-auto">
                  <form className="flex flex-col p-5 items-center shadow-lg bg-white dark:bg-@264653 gap-3 rounded-large">
                    <h1 className="uppercase font-bold text-3xl text-@19345E dark:text-white">
                      Update Profile
                    </h1>
                    <div className="flex flex-col md:flex-row">
                      <div className="grid grid-row  justify-center items-center">
                        <div className="card mt-4 w-fit h-fit bg-slate-300 rounded-full">
                          <div className="p-2">
                            <img
                              src="./users.png"
                              alt=""
                              className="h-48 w-48 rounded-full"
                            />
                          </div>
                        </div>
                        <div className="mt-3">
                          <label className="block">
                            <span className="sr-only">
                              Choose profile photo
                            </span>
                            <Input
                              type="file"
                              className="block text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-@19345E file:text-white hover:file:bg-@1F7168"
                            />
                          </label>
                        </div>
                      </div>
                      <div className="p-2">
                        <div className="w-full mb-2">
                          <label className="font-bold dark:text-white">
                            Name
                          </label>
                          <Input
                            placeholder="Insert your full name"
                            id="input-uname"
                            type="name"
                            // defaultValue={data.name}
                            // onChange={(event) =>
                            //   handleChange(event.target.value, "name")
                            // }
                          />
                        </div>
                        <div className="w-full mb-2">
                          <label className="font-bold dark:text-white">
                            Username
                          </label>
                          <Input
                            placeholder="Insert your username"
                            id="input-uname"
                            type="username"
                            className="border rounded-lg bg-slate-200 border-slate-400 text-black p-2 focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900 w-full"
                            disabled
                          />
                        </div>
                        <div className="w-full mb-2">
                          <label className="font-bold dark:text-white">
                            Password
                          </label>
                          <Input
                            placeholder="Insert your password"
                            id="input-password"
                            type="password"
                            // defaultValue={data.password}
                            // onChange={(event) =>
                            //   handleChange(event.target.value, "password")
                            // }
                          />
                        </div>
                        <div className="flex flex-row">
                          <PrimButton
                            label="Save"
                            id=" button-save-edit"
                            type="button"
                            data-hs-overlay="#hs-medium-modal"
                          />
                          <SecButton
                            label="Cencel"
                            id=" button-cencel-edit"
                            type="button"
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default ProfileUser;
