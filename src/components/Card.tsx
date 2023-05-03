import { FC, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import { Comments } from "./Input";
import { PrimButton, SecButton } from "./Button";
import { useNavigate } from "react-router-dom";
import { BsFillPlusSquareFill, BsDashSquareFill } from "react-icons/bs";

interface PropsHandling {
  event_name: string;
  event_image: string;
  event_date: string;
  host_by: string;
  MyLink: string;
}

export const CardLanding: FC<PropsHandling> = (props) => {
  const { event_name, event_image, MyLink, host_by, event_date } = props;
  return (
    //   {/* card start*/}
    <div className="drop-shadow hover:drop-shadow-lg hover:scale-105 duration-300 flex flex-col bg-@EBF2FA rounded-md dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
      <Link to={MyLink}>
        <img
          className="w-full h-auto rounded-md hover:scale-105 duration-300"
          src={event_image}
          alt="Image Description"
        />
      </Link>
      <div className="p-4 md:p-5">
        <Link to={MyLink}>
          <h3 className="hover:text-@19345E text-2xl font-bold text-black dark:text-white  ">
            {event_name}
          </h3>
        </Link>
        <h3 className="capitalize text-sm font-semibold text-slate-400 hover:text-slate-600  dark:text-white ">
          host by {host_by}
        </h3>
        <h3 className="text-sm font-semibold text-slate-400 hover:text-slate-600  dark:text-white ">
          {event_date}
        </h3>
      </div>
    </div>
    //   {/* card end*/}
  );
};

interface PropsMyEvent {
  event_image: string;
  event_name: string;
  event_date: string;
  host_by: string;
  place: string;
  MyLink: string;
  edit: string;
  del: string;
}

export const CardMyEvent: FC<PropsMyEvent> = (props) => {
  const {
    event_name,
    edit,
    del,
    event_image,
    MyLink,
    event_date,
    host_by,
    place,
  } = props;
  const navigate = useNavigate();
  const [isDeleted, setIsDeleted] = useState(false);

  function handleDelete() {
    Swal.fire({
      title: "DELETE",
      text: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`events/eventID`, {
            headers: {
              Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
          })
          .then((response) => {
            const { message } = response.data;
            Swal.fire({
              title: "Success",
              text: message,
              showCancelButton: false,
            });
          })
          .catch((error) => {
            const { data } = error.response;
            Swal.fire({
              icon: "error",
              title: "Failed",
              text: data.message,
              showCancelButton: false,
            });
          });
      }
    });
    if (isDeleted) {
      return null;
    }
  }

  return (
    //   {/* card start*/}
    <div className="hover:drop-shadow-lg hover:scale-105 duration-300  bg-@EBF2FA rounded-md dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700">
      <div className="flex flex-col md:flex-row px-2 py-5 md:pt-5 items-center ">
        <Link to={MyLink}>
          <img
            className="w-auto h-40 md:h-44 rounded-lg"
            src={event_image}
            alt="Image Description"
          />
        </Link>
        <div className="h-full ml-2 sm:ml-5 md:ml-7 flex flex-col">
          <table>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              <Link to={MyLink}>
                {" "}
                <tr className="border-0">
                  <td className=" text-@19345E text-md md:text-xl  xl:text-3xl dark:text-gray-200">
                    {event_name}
                  </td>
                </tr>{" "}
              </Link>
              <tr className="border-0">
                <td className="whitespace-nowrap text-md md:text-lg text-slate-400 dark:text-gray-200">
                  {event_date}
                </td>
              </tr>
              <tr className="border-0">
                <td className="flex flex-col gap-2 md:flex-row whitespace-nowrap text-md md:text-lg text-slate-400 dark:text-gray-200">
                  <p className="capitalize ">Hosted by : {host_by}, </p>
                  <p> {place}</p>
                </td>
              </tr>
            </tbody>
            <div className="flex flex-row md:w-96">
              <PrimButton
                label="Edit"
                id=" button-edit-event"
                type="button"
                className="py-2 px-4 m-2 w-full justify-center items-center gap-2 rounded-md border text-lg bg-@19345E text-@EBF2FA font-bold shadow-sm align-middle hover:scale-105 focus:outline-none   transition-all text-md dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                onClick={() => navigate(`${edit}`)}
              />
              <SecButton
                label="Delete"
                id=" button-delete-event"
                type="button"
                className="py-2 px-4 m-2 w-full justify-center items-center gap-2 rounded-md border border-@19345E text-lg bg-@EBF2FA text-@19345E font-bold shadow-sm align-middle hover:scale-105 focus:outline-none   transition-all text-md dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                onClick={handleDelete}
              />
              <PrimButton
                label="Open"
                id=" button-edit-event"
                type="button"
                className="py-2 px-4 m-2 w-full justify-center items-center gap-2 rounded-md border text-lg bg-@19345E text-@EBF2FA font-bold shadow-sm align-middle hover:scale-105 focus:outline-none   transition-all text-md dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
              />
            </div>
          </table>
        </div>
      </div>
    </div>
    //   {/* card end*/}
  );
};

interface PropsMyTickets {
  event_image: string;
  event_name: string;
  event_date: string;
  host_by: string;
  place: string;
}

export const CardMyTicket: FC<PropsMyTickets> = (props) => {
  const { event_name, event_image, event_date, host_by, place } = props;
  return (
    //   {/* card start*/}
    <div className="hover:drop-shadow-lg hover:scale-105 duration-300  bg-@EBF2FA rounded-md dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700">
      <div className="flex flex-col md:flex-row px-2 py-5 md:pt-5 items-center ">
        <img
          className="w-auto h-40 md:h-44 rounded-lg"
          src={event_image}
          alt="Image Description"
        />
        <div className="h-full ml-2 sm:ml-5 md:ml-7 flex flex-col">
          <table>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {" "}
              <tr className="border-b-4">
                <td className=" text-@19345E text-md md:text-xl  xl:text-3xl dark:text-gray-200">
                  {event_name}
                </td>
              </tr>{" "}
              <tr className="border-b-4">
                <td className="whitespace-nowrap text-md md:text-lg text-slate-400 dark:text-gray-200">
                  {event_date}
                </td>
              </tr>
              <tr className="border-b-4">
                <td className="whitespace-nowrap text-md md:text-lg text-slate-400 dark:text-gray-200">
                  Hosted by : {host_by}, {place}
                </td>
              </tr>
            </tbody>
            <div className="flex flex-row md:w-96">
              <PrimButton
                label="Ticket"
                id="button-ticket"
                type="button"
                className="py-2 px-4 m-2 w-full justify-center items-center gap-2 rounded-md border text-lg bg-@19345E text-@EBF2FA font-bold shadow-sm align-middle hover:scale-105 focus:outline-none   transition-all text-md dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                data-hs-overlay="#hs-medium-modal"
              />
              <SecButton
                label="Invoice"
                id="detail-ticket"
                type="button"
                className="py-2 px-4 m-2 w-full justify-center items-center gap-2 rounded-md border border-@19345E text-lg bg-@EBF2FA text-@19345E font-bold shadow-sm align-middle hover:scale-105 focus:outline-none   transition-all text-md dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                data-hs-overlay="#hs-large-modal"
              />
            </div>
          </table>
        </div>
      </div>
    </div>
    //   {/* card end*/}
  );
};

interface PropsTickets {
  name: string;
  hostedby: string;
  date: string;
  place: string;
  tot_ticket: number;
  ticket_type: string;
  ticket_id: string;
}

export const CardTicketEvent: FC<PropsTickets> = (props) => {
  const { name, hostedby, date, place, tot_ticket, ticket_type, ticket_id } =
    props;
  return (
    //   {/* card start*/}
    <div className="flex flex-col w-60 bg-white shadow-xl border rounded-lg border-@19345E justify-center items-center">
      <div className="m-4">
        <img src="/Logo2.png" alt="" className="w-28" />
      </div>
      <div className="flex flex-col justify-center items-center dark:bg-@264653 m-2 ">
        <h1 className="font-semibold text-lg mb-2">{name}</h1>
        <div>
          <h1>Hosted by {hostedby}</h1>
          <h1>Date : {date}</h1>
          <h1>Place: {place}</h1>
          <h1>Valid for : {tot_ticket} People</h1>
        </div>
      </div>
      <div>
        <h1 className="uppercase">
          {ticket_type} TICKET NO : {ticket_id}
        </h1>
      </div>
    </div>
    //   {/* card end*/}
  );
};

interface DataTicket {
  category: string;
  price: string;
  quota: string;
}

export const CardTicket: FC<Partial<DataTicket>> = (props) => {
  const { category, price, quota } = props;
  const [num, setNum] = useState(0);
  return (
    <div className="flex flex-col w-40 bg-white shadow-xl border rounded-lg border-@19345E justify-center items-center">
      <h1 className="font-bold text-2xl ">{category}</h1>
      <h1 className="text-2xl">{price}</h1>
      <div className="flex flex-row mb-3 text-2xl gap-4 justify-center items-center">
        <BsDashSquareFill
          className="text-@19345E hover:scale-125 cursor-pointer"
          onClick={() => {
            if (num > 0) {
              setNum(num - 1);
            }
          }}
        />
        <h1>{num}</h1>
        <BsFillPlusSquareFill
          className="text-@19345E hover:scale-125 cursor-pointer"
          onClick={() => {
            if (num < 5) {
              setNum(num + 1);
            }
          }}
        />
      </div>
    </div>
  );
};

interface DataComment {
  image: string;
  name: string;
  comment: string;
}

export const CardComment: FC<Partial<DataComment>> = (props) => {
  const { image, name, comment } = props;
  return (
    <div className="flex">
      <div className="bg-white rounded-2xl py-2 md:w-24 px-3">
        <div className=" flex justify-center items-center pt-2">
          <img
            src={image}
            alt="image-card"
            className="rounded-full hidden md:block border-2 drop-shadow-lg border-black "
          />
        </div>
      </div>
      <div className="p-5 bg-slate-200 rounded-large">
        <h1 className="text-black font-semibold text:xl md:text-2xl ">
          {name}
        </h1>
        <h1>{comment} </h1>
      </div>
    </div>
  );
};
interface DataUSerComment {
  image: string;
  name: string;
}

export const CardUSerComment: FC<Partial<DataUSerComment>> = (props) => {
  const { image, name } = props;
  return (
    <div className="flex flex-row px-6 my-6 ">
      <div className="flex flex-col pr-4 justify-center items-center">
        <img src={image} alt="" className="hidden md:block " />
        <p className="font-semibold">{name}</p>
      </div>
      <div className="w-full mt-2">
        <Comments placeholder="Add a comment...." id="comments" />
      </div>
    </div>
  );
};

interface PropsInvoice {
  name: string;
  hostedby: string;
  date: string;
  place: string;
  tot_ticket: number;
  ticket_type: string;
  price: number;
  tot_price: number;
  total_pay: number;
  payment_method: string;
}
export const CardInvoice: FC<PropsInvoice> = (props) => {
  const {
    name,
    hostedby,
    date,
    place,
    ticket_type,
    price,
    tot_price,
    tot_ticket,
    total_pay,
    payment_method,
  } = props;
  return (
    <div className="flex flex-col p-5 w-86 ">
      <div className="flex justify-center items-center">
        <img src="./Logo2.png" alt="" className="w-56 items-center" />
      </div>
      <p className="font-semibold text-@19345E text-2xl items-start">Invoice</p>
      <p className="event-name font-semibold text-lg capitalize">{name} </p>
      <p className="event-date font-semibold text-md text-slate-600 capitalize">
        {date}
      </p>
      <p className="hosted-by font-semibold text-md text-slate-600 capitalize">
        Hosted by {hostedby}, {place}
      </p>
      <p className="event-name font-semibold text-lg capitalize">Details</p>
      <table>
        <tbody className="w-full">
          <tr className="border-b-2 border-t-2 border-black capitalize">
            <td>items</td> <td>price</td> <td>quantity</td> <td>total</td>
          </tr>
          <tr className=" border-black capitalize">
            <td>{ticket_type} ticket</td> <td>Rp. {price}</td>
            <td>{tot_ticket}</td> <td>{tot_price}</td>
          </tr>
          <tr className=" border-black capitalize items-end">
            <td></td>
            <td></td>
            <td>Total Payment</td> <td>Rp.{total_pay}</td>
          </tr>
        </tbody>
      </table>
      <p> Payment Using {payment_method}</p>
      <div className="flex items-center justify-center">
        <p>Thank you for the join, </p>
        <p className="p-2 font-bold">{name}</p>
      </div>
    </div>
  );
};
