import { FC } from "react";
import { Layout } from "../components/Layout";
import { CardMyTicket } from "../components/Card";

const MyTicket: FC = () => {
  return (
    <Layout>
      <div className="px-6 py-6 md-to-lg:pb-10 md:pb-16 md:pt-8 md:px-10 lg:pb-20 lg:pt-10 lg:px-20 gap-1 ">
        <div className="flex justify-between">
          <div>
            <h1 className="text-[#19345E] px-6 font-bold text-2xl  md:texl-3xl lg:text-5xl  capitalize ">
              My Tickets
            </h1>
          </div>
        </div>
        <div className="py-6 px-6 grid grid-cols-1  gap-4 ">
          <CardMyTicket
            event_image="./bg.jpg"
            event_name="Webinar: Your Product Manager Career by PlayStation Sr PM"
            event_date="Monday, 22-May-2023"
            host_by="Product School"
            place="Jakarta"
          />
        </div>
        <div className="py-6 px-6 grid grid-cols-1  gap-4 ">
          <CardMyTicket
            event_image="./bg.jpg"
            event_name="Webinar: Your Product Manager Career by PlayStation Sr PM"
            event_date="Monday, 22-May-2023"
            host_by="Product School"
            place="Jakarta"
          />
        </div>
        <div className="py-6 px-6 grid grid-cols-1  gap-4 ">
          <CardMyTicket
            event_image="./bg.jpg"
            event_name="Webinar: Your Product Manager Career by PlayStation Sr PM"
            event_date="Monday, 22-May-2023"
            host_by="Product School"
            place="Jakarta"
          />
        </div>
        <div className="py-6 px-6 grid grid-cols-1  gap-4 ">
          <CardMyTicket
            event_image="./bg.jpg"
            event_name="Webinar: Your Product Manager Career by PlayStation Sr PM"
            event_date="Monday, 22-May-2023"
            host_by="Product School"
            place="Jakarta"
          />
        </div>
      </div>
    </Layout>
  );
};
export default MyTicket;
