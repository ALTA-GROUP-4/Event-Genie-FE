import { FC } from "react";
import { Input, TextArea } from "../components/Input";
import { Layout } from "../components/Layout";
import { PrimButton } from "../components/Button";
const UpdateEvent: FC = () => {
  return (
    <Layout>
      <div className="my-6 px-6 justify-center items-center">
        <div>
          <h1 className="flex px-6 text-@19345E items-center justify-center font-bold text-2xl  md:texl-3xl lg:text-5xl  capitalize ">
            Update Event
          </h1>
        </div>
        <div className="flex flex-col  md:flex-row my-6 px-6 justify-center items-center gap-4">
          <div className="flex flex-col gap-4 ">
            <div className="p-2">
              <img
                src="./bg.jpg"
                alt=""
                className="w-auto h-60 md:h-60 lg:h-80 rounded-lg"
              />
            </div>
            <div className="flex p-2 w-40">
              <label className="block">
                <span className="sr-only">Change Picture</span>
                <Input
                  type="file"
                  className="w-fit block text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-@19345E file:text-white hover:file:bg-@427AA1"
                />
              </label>
            </div>
            <div className="flex flex-col lg:flex-row p-2 gap-2">
              <div className="w-80 lg:w-40">
                <label className="font-bold dark:text-white">Ticket</label>
                <Input
                  placeholder="Insert Ticket Name"
                  id="ticket_name"
                  type="text"
                />
              </div>
              <div className="w-80 lg:w-40">
                <label className="font-bold dark:text-white">Price</label>
                <Input
                  placeholder="Insert Ticket Price"
                  id="ticket_price"
                  type="text"
                />
              </div>
              <div className="w-80 lg:w-40">
                <label className="font-bold dark:text-white">Quota</label>
                <Input
                  placeholder="Insert Ticket Capacity"
                  id="ticket_quota"
                  type="text"
                />
              </div>
            </div>
            <div className="p-2">
              <PrimButton
                label="Add Ticket"
                id=" button-add-ticket"
                type="button"
                className="w-40 bg-@19345E text-@EBF2FA font-semibold py-2 px-8 
                rounded-lg border  hover:bg-@427AA1 active:bg-gray-200 disabled:bg-gray-400"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="w-80">
              <label className="font-bold dark:text-white">Event Name</label>
              <Input
                placeholder="Insert Event Name"
                id="event_name"
                type="text"
              />
            </div>
            <div className="w-80">
              <label className="font-bold dark:text-white">Hosted by</label>
              <Input
                placeholder="Insert Hosted by"
                id="hosted_by"
                type="text"
              />
            </div>
            <div className="">
              <label className="font-bold dark:text-white">Date</label>
              <Input
                placeholder="Insert Event Name"
                id="event_date"
                type="date"
              />
            </div>
            <div className="">
              <label className="font-bold dark:text-white">Place</label>
              <Input
                placeholder="Insert Event Location"
                id="event_place"
                type="text"
              />
            </div>
            <div className="">
              <label className="font-bold dark:text-white">Description</label>
              <TextArea
                placeholder="Hi! We are Event Genie..."
                id="event_desc"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <PrimButton
            label="Update"
            id=" button-add-ticket"
            type="submit"
            className="w-40 bg-@19345E text-@EBF2FA font-semibold py-2 px-8 
                rounded-lg border  hover:bg-@427AA1 active:bg-gray-200 disabled:bg-gray-400"
          />
        </div>
      </div>
    </Layout>
  );
};

export default UpdateEvent;
