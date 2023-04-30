import { FC, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import Swal from "sweetalert2";
import axios from "axios";

import { Input, TextArea } from "../components/Input";
import { PrimButton } from "../components/Button";
import { Layout } from "../components/Layout";
import { AddDataEvent, UpdateDataEvent, EventDataType } from "../utils/user";

const UpdateEvent: FC = () => {
  const [eventSubmit, setEventSubmit] = useState<Partial<UpdateDataEvent>>({});
  const navigate = useNavigate();

  document.title = "Update Event | Event Genie";

  function handleChange(value: any, key: keyof typeof eventSubmit) {
    let temp = { ...eventSubmit };
    temp[key] = value;
    setEventSubmit(temp);
  }
  function handleSubmitEvent(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();

    const formData = new FormData();
    let key: keyof typeof eventSubmit;
    for (key in eventSubmit) {
      formData.append(key, eventSubmit[key] as string);
    }
    axios
      .put(`events/eventsID`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${eventSubmit}`,
        },
      })
      .then((response) => {
        const { message } = response.data;
        Swal.fire({
          icon: "success",
          title: "Success",
          text: message,
          showCancelButton: false,
          showConfirmButton: true,
        }).then((result) => {
          if (result.isConfirmed) {
            setEventSubmit({});
            navigate("/my-event");
          }
        });
      })
      .catch((error) => {
        const { data } = error;
        if (data === undefined) {
          Swal.fire({
            icon: "error",
            title: "data is empty, Please fill etlist one",
            showCancelButton: false,
          });
        }
        Swal.fire({
          icon: "error",
          title: "Failed",
          text: data.message,
          showCancelButton: false,
        });
      });
  }

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
                src={
                  eventSubmit.event_image
                    ? URL.createObjectURL(eventSubmit.event_image)
                    : "/bg.jpg"
                }
                alt=""
                className="w-auto h-60 md:h-60 lg:h-80 rounded-lg"
              />
            </div>
            <div className="flex p-2 w-40">
              <label className="block">
                <span className="sr-only">Change Picture</span>
                <Input
                  type="file"
                  className="w-fit block text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-@19345E file:text-white hover:scale-105"
                  onChange={(event) => {
                    if (!event.currentTarget.files) {
                      return;
                    }
                    setEventSubmit({
                      ...event,
                      event_image: URL.createObjectURL(
                        event.currentTarget.files[0]
                      ),
                    });
                    handleChange(event.currentTarget.files[0], "event_image");
                  }}
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
                rounded-lg border  hover:scale-105 active:bg-gray-200 disabled:bg-gray-400"
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
                defaultValue={eventSubmit.event_name}
                onChange={(event) =>
                  handleChange(event.target.value, "event_name")
                }
              />
            </div>
            <div className="w-80">
              <label className="font-bold dark:text-white">Hosted by</label>
              <Input
                placeholder="Insert Hosted by"
                id="hosted_by"
                type="text"
                defaultValue={eventSubmit.hostedby}
                onChange={(event) =>
                  handleChange(event.target.value, "hostedby")
                }
              />
            </div>
            <div className="">
              <label className="font-bold dark:text-white">Date</label>
              <Input
                placeholder="Insert Event Name"
                id="event_date"
                type="date"
                defaultValue={eventSubmit.event_date}
                onChange={(event) =>
                  handleChange(event.target.value, "event_date")
                }
              />
            </div>
            <div className="">
              <label className="font-bold dark:text-white">Place</label>
              <Input
                placeholder="Insert Event Location"
                id="event_place"
                type="text"
                defaultValue={eventSubmit.place}
                onChange={(event) => handleChange(event.target.value, "place")}
              />
            </div>
            <div className="">
              <label className="font-bold dark:text-white">Description</label>
              <TextArea
                placeholder="Hi! We are Event Genie..."
                id="event_desc"
                defaultValue={eventSubmit.description}
                onChange={(event) =>
                  handleChange(event.target.value, "description")
                }
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
                rounded-lg border  hover:scale-105 active:bg-gray-200 disabled:bg-gray-400"
            onClick={(event) => {
              handleSubmitEvent(event);
            }}
          />
        </div>
      </div>
    </Layout>
  );
};

export default UpdateEvent;
