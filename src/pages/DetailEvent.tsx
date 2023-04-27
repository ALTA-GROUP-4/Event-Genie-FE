import { FC } from "react";
import { Layout } from "../components/Layout";
import { PrimButton } from "../components/Button";
import { Comments } from "../components/Input";

const DetailEvent: FC = () => {
  return (
    <Layout>
      <div className="my-14 px-14 justify-center items-center">
        <div>
          <h1 className="flex px-6 text-@19345E font-bold text-2xl  md:texl-3xl lg:text-5xl  capitalize ">
            Webinar: Your Product Manager Career by PlayStation Sr PM
          </h1>
          <p className="py-3 px-6 text-slate-400 font-bold text-2xl  md:texl-3xl ">
            Hosted by Product School
          </p>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="px-6 mb-3 md:w-1/2">
            <img src="./bg.jpg" alt="" className="w-full  h-auto rounded-md" />
          </div>
          <div className="gap-4 px-6">
            <p className="text-slate-400 font-bold text-2xl  md:texl-3xl ">
              Date : Monday, 22 May 2023
            </p>
            <p className="py-5 text-slate-400 font-bold text-2xl  md:texl-3xl ">
              Location : Jakarta
            </p>
            <p className="text-slate-400 font-bold text-2xl  md:texl-3xl ">
              Quota : 99
            </p>
          </div>
        </div>
        <div className="px-6 my-6">
          <h1 className="text-@19345E font-bold text-2xl  md:texl-3xl lg:text-5xl  capitalize ">
            Details
          </h1>
          <p className="mt-3 text-black text-lg  md:texl-3xl text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="flex justify-between">
          <div>
            <h1 className="px-6 font-bold text-@19345E text-2xl  md:texl-3xl lg:text-5xl  capitalize ">
              Coments
            </h1>
          </div>
          <div>
            <PrimButton label="Join" id=" button-add-event" type="button" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row px-6 my-6 ">
          <div className="">
            <img src="./users.png" alt="" className="hidden md:block pr-4" />
          </div>
          <div className="w-full mt-2">
            <Comments placeholder="Hi! We are Event Genie..." id="comments" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DetailEvent;
