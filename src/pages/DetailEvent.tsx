import { FC } from "react";
import { Layout } from "../components/Layout";
import { PrimButton, SecButton } from "../components/Button";
import { Comments } from "../components/Input";
import { CardComment, CardTicket } from "../components/Card";
import { Input } from "../components/Input";

const DetailEvent: FC = () => {
  return (
    <Layout>
      <div className="my-14 px-14 justify-center items-center">
        <div className="text-lg md:texl-3xl lg:text-5xl font-bold">
          <h1 className="flex capitalize px-6 text-@19345E">
            Webinar: Your Product Manager Career by PlayStation Sr PM
          </h1>
          <p className="py-3 px-6 text-slate-400">Hosted by Product School</p>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="px-6 mb-3 md:w-1/2">
            <img src="./bg.jpg" alt="" className="w-full  h-auto rounded-md" />
          </div>
          <div
            className="px-6 text-slate-400 text-lg md:text-3xl
"
          >
            <p>Date : Monday, 22 May 2023</p>
            <p>Location : Jakarta</p>
            <p>Quota : 99</p>
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
            <PrimButton
              label="Join"
              id=" button-join"
              type="button"
              data-hs-overlay="#hs-medium-modal"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row px-6 my-6 ">
          <div className="">
            <img src="./users.png" alt="" className="hidden md:block pr-4" />
          </div>
          <div className="w-full mt-2">
            <Comments placeholder="Add a comment...." id="comments" />
          </div>
        </div>
        <div className="p-3">
          <CardComment
            image="./users.png"
            name="Jack"
            comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
       "
          />
        </div>
        <div className="p-3">
          <CardComment
            image="./users.png"
            name="Jack"
            comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
       "
          />
        </div>
        <div className="p-3">
          <CardComment
            image="./users.png"
            name="Jack"
            comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
       "
          />
        </div>
        <div
          id="hs-medium-modal"
          className="hs-overlay hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto"
        >
          <div className="hs-overlay-open:mt-24 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all w-52 md:w-fit m-3 mx-auto">
            <form className="flex flex-col p-4 justify-center items-center shadow-lg bg-white dark:bg-@264653 rounded-large">
              <h1 className="capitalize font-bold text-3xl text-@19345E dark:text-white">
                Ticket Event
              </h1>
              <div className="flex flex-col md:flex-row mt-4 mb-4 gap-4 ">
                <CardTicket category="VIP" price="Rp.500.000" quota="5" />
                <CardTicket category="VIP" price="Rp.500.000" quota="5" />
                <CardTicket category="VIP" price="Rp.500.000" quota="5" />
              </div>
              <div>
                <PrimButton label="Order" id=" button-order" type="button" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DetailEvent;
