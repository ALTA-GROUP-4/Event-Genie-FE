import { FC, useState, useEffect } from "react";
import { Layout } from "../components/Layout";
import { CardMyEvent } from "../components/Card";
import { PrimButton } from "../components/Button";
import { useNavigate } from "react-router-dom";
import { EventDataType } from "../utils/user";
import { Link } from "react-router-dom";
import axios from "axios";

const MyEvent: FC = () => {
  const [datas, setDatas] = useState<EventDataType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const email = "users";
  const navigate = useNavigate();

  const [visibleItems, setVisibleItems] = useState<EventDataType[]>([]);
  const [itemsPerPage, setItemsPerPage] = useState<number>(5);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  document.title = `My Event | Event Genie`;

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      let newItemsPerPage = 8;

      switch (true) {
        case screenWidth <= 480:
          newItemsPerPage = 4;
          break;
        case screenWidth <= 768:
          newItemsPerPage = 6;
          break;
        case screenWidth <= 1024:
          newItemsPerPage = 8;
          break;
        default:
          newItemsPerPage = 12;
          break;
      }

      setItemsPerPage(newItemsPerPage);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Calculate the total number of pages based on the number of items and items per page
    setTotalPages(Math.ceil(datas.length / itemsPerPage));
  }, [datas, itemsPerPage]);

  useEffect(() => {
    // Calculate the start and end indices of the items to be displayed on the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setVisibleItems(datas.slice(startIndex, endIndex));
  }, [datas, itemsPerPage, currentPage]);

  useEffect(() => {
    fetchDataListMyBook();
  }, []);

  const fetchDataListMyBook = () => {
    axios
      .get(`events`)
      .then((response) => {
        const { data } = response.data;
        setDatas(data);
      })
      .catch((error) => {
        const { message } = error.message;
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Layout>
      <div className="px-6 py-6 md-to-lg:pb-10 md:pb-16 md:pt-8 md:px-10 lg:pb-20 lg:pt-10 lg:px-20 gap-1 ">
        <div className="flex justify-between">
          <div>
            <h1 className="px-6 font-bold text-@19345E text-2xl  md:texl-3xl lg:text-5xl  capitalize ">
              My Event
            </h1>
          </div>
          <div>
            <PrimButton
              label="Add Event"
              id=" button-add-event"
              type="button"
              className="py-2 px-4 m-2 w-full justify-center items-center gap-2 rounded-md border text-lg bg-@19345E text-@EBF2FA font-bold shadow-sm align-middle hover:scale-105 focus:outline-none   transition-all text-md dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
              onClick={() => navigate("/add-event")}
            />
          </div>
        </div>
        <div className="py-6 px-6 grid grid-cols-1  gap-4 ">
          {datas.map((e) => {
            return (
              <CardMyEvent
                event_image="./bg.jpg"
                MyLink={`/detail-event/${e.name}`}
                event_name={e.name}
                event_date={e.date}
                host_by={e.hostedby}
                place={e.place}
                edit="/update-event"
                del={`onClick={() => handleDeleteAccount()}`}
              />
            );
          })}

          {/* <CardMyEvent
            event_image="./bg.jpg"
            MyLink={`/detail-event`}
            event_name="Webinar: Your Product Manager Career by PlayStation Sr PM"
            event_date="Monday, 22-May-2023"
            host_by="Produtc School"
            place="Jakarta"
          />
          <CardMyEvent
            event_image="./bg.jpg"
            MyLink={`/detail-event`}
            event_name="Webinar: Your Product Manager Career by PlayStation Sr PM"
            event_date="Monday, 22-May-2023"
            host_by="Produtc School"
            place="Jakarta"
          />
          <CardMyEvent
            event_image="./bg.jpg"
            MyLink={`/detail-event`}
            event_name="Webinar: Your Product Manager Career by PlayStation Sr PM"
            event_date="Monday, 22-May-2023"
            host_by="Produtc School"
            place="Jakarta"
          /> */}
        </div>
      </div>
    </Layout>
  );
};

export default MyEvent;
