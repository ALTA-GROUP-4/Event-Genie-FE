import { FC, useState, useEffect, FormEvent } from "react";
import { RiDeleteBin2Fill } from "react-icons/ri";
import Swal from "sweetalert2";
import axios from "axios";

import { Input, TextArea } from "@/components/Input";
import { Layout } from "@/components/Layout";
import { PrimButton } from "@/components/Button";
import { AddDataEvent } from "@/utils/user";
import { useNavigate } from "react-router-dom";

const AddEvent: FC = () => {
  const [eventSubmit, setEventSubmit] = useState<AddDataEvent>({
    event_image: "",
    event_name: "",
    hostedby: "",
    event_date: "",
    place: "",
    description: "",
    ticket: "",
    price: 0,
    qouta: 0,
  });
  const [ticket, setTicket] = useState<string[]>([]);
  const [isDisabled, setIsDisabled] = useState(true);
  const navigate = useNavigate();

  document.title = "Add Event | Event Genie";

  function handleSubmitEvent(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsDisabled(true);
    axios
      .post(`events`, eventSubmit)
      .then((response) => {
        const { data, message } = response.data;
        Swal.fire({
          icon: "success",
          title: "Succes",
          text: message,
          showCancelButton: false,
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("/my-event");
          }
        });
      })
      .catch((error) => {
        const { data } = error.response;
        Swal.fire({
          title: "Oppss Failed !!!",
          text: data.message,
          showCancelButton: false,
        });
      });
  }

  const addTicket = () => {
    setTicket([...ticket, ""]);
  };

  const deleteTikcet = (index: number) => {
    const newTikcet = [...ticket];
    newTikcet.splice(index, 1);
    setTicket(newTikcet);
  };

  const handleTicketChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newTikcet = [...ticket];
    newTikcet[index] = event.target.value;
    setTicket(newTikcet);
  };

  return (
    <Layout>
      <div className="my-6 px-6 justify-center items-center">
        <div>
          <h1 className="flex px-6 text-@19345E items-center justify-center font-bold text-2xl  md:texl-3xl lg:text-5xl  capitalize ">
            Create New Event
          </h1>
        </div>
        <form
          className="flex flex-col p-5 items-center"
          onSubmit={(event) => handleSubmitEvent(event)}
        >
          <div className="flex flex-col  md:flex-row my-6 px-6 justify-center items-center gap-4">
            <div className="flex flex-col gap-4 ">
              <div className="p-2">
                {eventSubmit.event_image ? (
                  <img
                    src={URL.createObjectURL(
                      new Blob([eventSubmit.event_image])
                    )}
                    alt=""
                    className="w-auto h-60 md:h-60 lg:h-80 rounded-lg"
                  />
                ) : (
                  <img
                    src="./bg.jpg"
                    alt=""
                    className="w-auto h-60 md:h-60 lg:h-80 rounded-lg"
                  />
                )}
              </div>
              <div className="flex p-2 w-40">
                <label className="block">
                  <span className="sr-only">Change Picture</span>
                  <Input
                    type="file"
                    className="w-fit block text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-@19345E file:text-white hover:scale-105"
                    onChange={(event) =>
                      setEventSubmit({
                        ...eventSubmit,
                        event_image: event.target.files
                          ? event.target.files[0]
                          : "",
                      })
                    }
                  />
                </label>
              </div>
              <div className="flex flex-col lg:flex-row gap-2">
                <div className="w-80 lg:w-40">
                  <label className="font-bold dark:text-white">Ticket</label>
                  <Input
                    placeholder="Insert Ticket Name"
                    id="ticket_name"
                    type="text"
                    onChange={(event) =>
                      setEventSubmit({
                        ...eventSubmit,
                        ticket: event.target.value,
                      })
                    }
                  />
                </div>
                <div className="w-80 lg:w-40">
                  <label className="font-bold dark:text-white">Price</label>
                  <Input
                    placeholder="Insert Ticket Price"
                    id="ticket_price"
                    type="text"
                    onChange={(event) =>
                      setEventSubmit({
                        ...eventSubmit,
                        price: parseInt(event.target.value),
                      })
                    }
                  />
                </div>
                <div className="w-80 lg:w-40">
                  <label className="font-bold dark:text-white">Quota</label>
                  <Input
                    placeholder="Insert Ticket Capacity"
                    id="ticket_quota"
                    type="text"
                    onChange={(event) =>
                      setEventSubmit({
                        ...eventSubmit,
                        qouta: parseInt(event.target.value),
                      })
                    }
                  />
                </div>
              </div>
              {ticket.map((tic, index) => (
                <div className="flex flex-col lg:flex-row gap-2">
                  <div className="w-80 lg:w-40">
                    <label className="font-bold dark:text-white">Ticket</label>
                    <Input
                      placeholder="Insert Ticket Name"
                      id="ticket_name"
                      type="text"
                      onChange={(event) =>
                        setEventSubmit({
                          ...eventSubmit,
                          ticket: event.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="w-80 lg:w-40">
                    <label className="font-bold dark:text-white">Price</label>
                    <Input
                      placeholder="Insert Ticket Price"
                      id="ticket_price"
                      type="text"
                      onChange={(event) =>
                        setEventSubmit({
                          ...eventSubmit,
                          price: parseInt(event.target.value),
                        })
                      }
                    />
                  </div>
                  <div className="w-80 lg:w-40">
                    <label className="font-bold dark:text-white">Quota</label>
                    <Input
                      placeholder="Insert Ticket Capacity"
                      id="ticket_quota"
                      type="text"
                      onChange={(event) =>
                        setEventSubmit({
                          ...eventSubmit,
                          qouta: parseInt(event.target.value),
                        })
                      }
                    />
                  </div>

                  <button
                    id="delete-ticket"
                    className="mt-4 text-@19345E text-2xl hover:scale-110"
                    onClick={() => deleteTikcet(index)}
                  >
                    <RiDeleteBin2Fill />
                  </button>
                </div>
              ))}
              <div className="p-2">
                <PrimButton
                  label="Add Ticket"
                  id=" button-add-ticket"
                  type="button"
                  className="w-40 bg-@19345E text-@EBF2FA font-semibold py-2 px-8 
                rounded-lg border  hover:scale-105 active:bg-gray-200 disabled:bg-gray-400"
                  onClick={() => addTicket()}
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
                  onChange={(event) =>
                    setEventSubmit({
                      ...eventSubmit,
                      event_name: event.target.value,
                    })
                  }
                />
              </div>
              <div className="w-80">
                <label className="font-bold dark:text-white">Hosted by</label>
                <Input
                  placeholder="Insert Hosted by"
                  id="hosted_by"
                  type="text"
                  onChange={(event) =>
                    setEventSubmit({
                      ...eventSubmit,
                      hostedby: event.target.value,
                    })
                  }
                />
              </div>
              <div className="">
                <label className="font-bold dark:text-white">Date</label>
                <Input
                  placeholder="Insert Event Name"
                  id="event_date"
                  type="date"
                  onChange={(event) =>
                    setEventSubmit({
                      ...eventSubmit,
                      event_date: event.target.value,
                    })
                  }
                />
              </div>
              <div className="">
                <label className="font-bold dark:text-white">Place</label>
                <Input
                  placeholder="Insert Event Location"
                  id="event_place"
                  type="text"
                  onChange={(event) =>
                    setEventSubmit({
                      ...eventSubmit,
                      place: event.target.value,
                    })
                  }
                />
              </div>
              <div className="">
                <label className="font-bold dark:text-white">Description</label>
                <TextArea
                  placeholder="Hi! We are Event Genie..."
                  id="event_desc"
                  onChange={(event) =>
                    setEventSubmit({
                      ...eventSubmit,
                      description: event.target.value,
                    })
                  }
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <PrimButton
              label="Submit"
              id=" button-add-ticket"
              type="submit"
              className="w-40 bg-@19345E text-@EBF2FA font-semibold py-2 px-8 
                rounded-lg border  hover:scale-105 active:bg-gray-200 disabled:bg-gray-400"
            />
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default AddEvent;
