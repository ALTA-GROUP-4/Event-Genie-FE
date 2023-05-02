import { FC, useState, useEffect } from "react";
import { Layout } from "@/components/Layout";
import { CardMyEvent } from "@/components/Card";
import { PrimButton } from "@/components/Button";
import { useNavigate } from "react-router-dom";
import { EventDataType } from "@/utils/user";
import Swal from "sweetalert2";
import axios from "axios";

const MyEvent: FC = () => {
  const [datas, setDatas] = useState<EventDataType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const email = "users";
  const navigate = useNavigate();

  document.title = `My Event | Event Genie`;

  useEffect(() => {
    facthDataEvent();
  }, []);

  const facthDataEvent = () => {
    axios
      .get(`events`)
      .then((response) => {
        const { data } = response.data;
        setDatas(data);
      })
      .catch((error) => {
        alert(error.toString());
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
                edit={`/update-event/${e.name}`}
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
