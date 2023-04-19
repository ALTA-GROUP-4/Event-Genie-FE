import { FC } from "react";
import { Layout } from "../components/Layout";
import { CardLanding } from "../components/Card";
const Home: FC = () => {
  return (
    <Layout>
      <div className="px-6 py-6 md-to-lg:pb-10 md:pb-16 md:pt-8 md:px-10 lg:pb-20 lg:pt-10 lg:px-20 gap-1 ">
        <h1 className="items-center text-@19345E font-bold text-2xl  md:texl-3xl lg:text-5xl  capitalize flex flex-col ">
          Event Comingsoon
        </h1>
        <div className="py-10 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8 xl:gap-10 p-4 sm:p-6 md:-8 xl:p-10">
          <CardLanding
            event_image="./bg.jpg"
            MyLink={`/detail-event`}
            event_name="Webinar: Your Product Manager Career by PlayStation Sr PM"
            event_date="Monday, 22 May 2023"
          />
          <CardLanding
            event_image="./bg.jpg"
            MyLink={`/detail-event`}
            event_name="Webinar: Your Product Manager Career by PlayStation Sr PM"
            event_date="Monday, 22 May 2023"
          />
          <CardLanding
            event_image="./bg.jpg"
            MyLink={`/detail-event`}
            event_name="Webinar: Your Product Manager Career by PlayStation Sr PM"
            event_date="Monday, 22 May 2023"
          />
          <CardLanding
            event_image="./bg.jpg"
            MyLink={`/detail-event`}
            event_name="Webinar: Your Product Manager Career by PlayStation Sr PM"
            event_date="Monday, 22 May 2023"
          />
          <CardLanding
            event_image="./bg.jpg"
            MyLink={`/detail-event`}
            event_name="Webinar: Your Product Manager Career by PlayStation Sr PM"
            event_date="Monday, 22 May 2023"
          />
          <CardLanding
            event_image="./bg.jpg"
            MyLink={`/detail-event`}
            event_name="Webinar: Your Product Manager Career by PlayStation Sr PM"
            event_date="Monday, 22 May 2023"
          />
          <CardLanding
            event_image="./bg.jpg"
            MyLink={`/detail-event`}
            event_name="Webinar: Your Product Manager Career by PlayStation Sr PM"
            event_date="Monday, 22 May 2023"
          />
          <CardLanding
            event_image="./bg.jpg"
            MyLink={`/detail-event`}
            event_name="Webinar: Your Product Manager Career by PlayStation Sr PM"
            event_date="Monday, 22 May 2023"
          />
          <CardLanding
            event_image="./bg.jpg"
            MyLink={`/detail-event`}
            event_name="Webinar: Your Product Manager Career by PlayStation Sr PM"
            event_date="Monday, 22 May 2023"
          />
          <CardLanding
            event_image="./bg.jpg"
            MyLink={`/detail-event`}
            event_name="Webinar: Your Product Manager Career by PlayStation Sr PM"
            event_date="Monday, 22 May 2023"
          />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
