import { FC, ReactNode } from "react";
import { Link } from "react-router-dom";
import {
  ButtonDelete,
  ButtonEdit,
  ButtonOpen,
  PrimButton,
  SecButton,
} from "./Button";

interface PropsHandling {
  event_name: string;
  event_image: string;
  event_date: string;
  MyLink: string;
}

interface PropsMyEvent {
  event_image: string;
  event_name: string;
  event_date: string;
  host_by: string;
  place: string;
  MyLink: string;
}
interface PropsMyTickets {
  event_image: string;
  event_name: string;
  event_date: string;
  host_by: string;
  place: string;
}

export const CardLanding: FC<PropsHandling> = (props) => {
  const { event_name, event_image, MyLink, event_date } = props;
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
          <h3 className="hover:text-@19345E text-md font-bold text-black dark:text-white  ">
            {event_name}
          </h3>
        </Link>

        <h3 className="text-md font-semibold text-slate-400 hover:text-slate-600 pt-2 dark:text-white ">
          {event_date}
        </h3>
      </div>
    </div>
    //   {/* card end*/}
  );
};
export const CardMyEvent: FC<PropsMyEvent> = (props) => {
  const { event_name, event_image, MyLink, event_date, host_by, place } = props;
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
                <tr className="border-b-4">
                  <td className=" text-@19345E text-md md:text-xl  xl:text-3xl dark:text-gray-200">
                    {event_name}
                  </td>
                </tr>{" "}
              </Link>
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
              <ButtonEdit />
              <ButtonDelete />
              <ButtonOpen />
            </div>
          </table>
        </div>
      </div>
    </div>
    //   {/* card end*/}
  );
};

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
              <PrimButton label="Print as PDF" id="print-to-pdf" />
              <SecButton label="Details" id="detail-ticket" />
            </div>
          </table>
        </div>
      </div>
    </div>
    //   {/* card end*/}
  );
};
