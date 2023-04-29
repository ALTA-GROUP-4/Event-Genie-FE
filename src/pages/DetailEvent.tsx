import { FC, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import Swal from "sweetalert2";
import axios from "axios";

import Loading from "../components/Loading";
import { useParams } from "react-router-dom";
import { EventDataType, UserComment } from "../utils/user";
import { Layout } from "../components/Layout";
import { PrimButton } from "../components/Button";
import { Comments } from "../components/Input";
import { CardComment, CardTicket } from "../components/Card";

const DetailEvent: FC = () => {
  const [userId, setUserId] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<Partial<EventDataType>>({});
  const [ticket, setTicket] = useState<EventDataType[]>([]);
  const [comment, setComment] = useState<UserComment[]>([]);
  const [cookie] = useCookies(["token", "email"]);
  const checkToken = cookie.token;
  const navigate = useNavigate();
  const params = useParams();

  document.title = `Detail Events | Event Genie`;

  const checkEmail = "ucup@gmail.com";

  const { user_id } = params;

  useEffect(() => {
    setUserId(true);
  }, []);

  useEffect(() => {
    fetchDetailEvent();
  }, []);

  function fetchDetailEvent() {
    axios
      .get(`events/eventsID`)
      .then((response) => {
        const { data } = response.data;
        document.title = `${data.name}`;
        setData(data);
      })
      .catch((error) => {
        alert(error.toString());
      });
  }

  useEffect(() => {
    fetchTikcet();
  }, []);

  const fetchTikcet = () => {
    axios
      .get("/events")
      .then((response) => {
        const { data } = response.data;
        setTicket(data);
      })
      .catch((error) => {
        const { message } = error.message;
        alert(message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchComment();
  }, []);

  const fetchComment = () => {
    axios
      .get("/events")
      .then((response) => {
        const { comment } = response.data;
        setComment(comment);
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
      <div className="my-14 px-14 justify-center items-center">
        <div className="text-lg md:texl-3xl lg:text-5xl font-bold">
          <h1 className="flex capitalize px-6 text-@19345E">{data.name}</h1>
          <p className="py-3 px-6 text-slate-400 capitalize">
            Hosted by {data.hostedby}
          </p>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="px-6 mb-3 md:w-1/2">
            <img src="/bg.jpg" alt="" className="w-full  h-auto rounded-md" />
          </div>
          <div
            className="px-6 text-slate-400 text-lg md:text-3xl
"
          >
            <p>{data.date}</p>
            <p>Location: {data.place}</p>
            <p>Quota : {data.goalquota}</p>
          </div>
        </div>
        <div className="px-6 my-6">
          <h1 className="text-@19345E font-bold text-2xl  md:texl-3xl lg:text-5xl  capitalize ">
            Details
          </h1>
          <p className="mt-3 text-black text-lg  md:texl-3xl text-justify">
            {data.description}
          </p>
        </div>
        <div className="flex justify-between">
          <div>
            <h1 className="px-6 font-bold text-@19345E text-2xl  md:texl-3xl lg:text-5xl  capitalize ">
              Coments
            </h1>
          </div>
          <div>
            {checkEmail !== user_id && checkToken ? (
              <PrimButton
                label="Join"
                id=" button-join"
                type="button"
                data-hs-overlay="#hs-medium-modal"
              />
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="flex flex-col md:flex-row px-6 my-6 ">
          <div className="">
            <img src="/users.png" alt="" className="hidden md:block pr-4" />
          </div>
          <div className="w-full mt-2">
            <Comments placeholder="Add a comment...." id="comments" />
          </div>
        </div>
        <div className="p-3">
          {loading ? (
            <Loading />
          ) : comment && comment.length > 0 ? (
            comment.map((com) => {
              return (
                <CardComment
                  image="/users.png"
                  name="Jack"
                  comment={com.content}
                />
              );
            })
          ) : (
            <p>No comments yet.</p>
          )}
          {/* <CardComment
            image="/users.png"
            name="Jack"
            comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
       "
          /> */}
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
                {loading ? (
                  <Loading />
                ) : (
                  ticket.map((ticket) => {
                    return (
                      <CardTicket
                        category="VIP"
                        price={ticket.price}
                        quota={ticket.currentqouta}
                      />
                    );
                  })
                )}
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
