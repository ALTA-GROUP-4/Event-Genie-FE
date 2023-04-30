import { FC, useEffect, useState, FormEvent } from "react";
import { useCookies } from "react-cookie";
import Swal from "sweetalert2";
import axios from "axios";

import Loading from "../components/Loading";
import { Layout } from "../components/Layout";
import { CardLanding } from "../components/Card";
import { EventType } from "../utils/user";

const Home: FC = () => {
  return (
    <Layout>
      <div>text</div>
    </Layout>
  );
};

export default Home;
