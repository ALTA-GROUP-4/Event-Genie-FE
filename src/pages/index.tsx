import { FC } from "react";
import { Layout } from "../components/Layout";
const Home: FC = () => {
  return (
    <Layout>
      <div className="py-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 sm:gap-6 md:gap-8 xl:gap-10 p-4 sm:p-6 md:-8 xl:p-10">
        <p className="font-bold text-7xl">HOMEPAGE</p>
      </div>
    </Layout>
  );
};

export default Home;
