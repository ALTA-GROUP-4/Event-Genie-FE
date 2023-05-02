import { FC, useEffect, useState, FormEvent } from "react";
import { useCookies } from "react-cookie";
import Swal from "sweetalert2";
import axios from "axios";

import Loading from "@/components/Loading";
import { Layout } from "@/components/Layout";
import { CardLanding } from "@/components/Card";
import { EventType } from "@/utils/user";

interface DataType {
  id: number;
  name: string;
  date: string;
}

const Home: FC = () => {
  const [datas, setDatas] = useState<EventType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [username, setUsername] = useState<string>("");
  const [status, setStatus] = useState<boolean>();
  const [cookie] = useCookies(["token"]);
  const checkToken = cookie.token;

  document.title = `Home Page | User Management`;

  useEffect(() => {
    fetchAllEvent();
  }, []);

  const fetchAllEvent = () => {
    axios
      .get("/events")
      .then((response) => {
        const { data } = response.data;
        setDatas(data);
      })
      .catch((error) => {
        const { message } = error.message;
        alert(message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Layout>
      <div className="px-6 py-6 md-to-lg:pb-10 md:pb-16 md:pt-8 md:px-10 lg:pb-20 lg:pt-10 lg:px-20 gap-1 ">
        <h1 className="items-center text-@19345E font-bold text-2xl  md:texl-3xl lg:text-5xl  capitalize flex flex-col ">
          Event Comingsoon
        </h1>
        <div className="py-10 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8 xl:gap-10 p-4 sm:p-6 md:-8 xl:p-10">
          {loading ? (
            <Loading />
          ) : (
            datas.map((event) => {
              return (
                <CardLanding
                  event_image="./bg.jpg"
                  MyLink={`/detail-event/${event.name}`}
                  event_name={event.name}
                  event_date={event.date}
                />
              );
            })
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
