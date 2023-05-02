import { FC, useEffect, useState, FormEvent } from "react";
import { useCookies } from "react-cookie";
import Swal from "sweetalert2";
import axios from "axios";

import Loading from "@/components/Loading";
import { Layout } from "@/components/Layout";
import { Input } from "@/components/Input";
import { PrimButton } from "@/components/Button";
import { CardLanding } from "@/components/Card";
import { EventType } from "@/utils/user";

const Home: FC = () => {
  const [menuList, setMenuList] = useState<string[]>([]);

  const addMenu = () => {
    setMenuList([...menuList, ""]);
  };

  const deleteMenu = (index: number) => {
    const newList = [...menuList];
    newList.splice(index, 1);
    setMenuList(newList);
  };

  const handleMenuChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newList = [...menuList];
    newList[index] = event.target.value;
    setMenuList(newList);
  };

  return (
    <Layout>
      <form className="grid lg:grid-cols-2 p-2 gap-2">
        {menuList.map((menu, index) => (
          <div>
            <div className="w-80 lg:w-full">
              <label className="font-bold dark:text-white">Ticket</label>
              <Input
                placeholder="Insert Ticket Name"
                id="ticket_name"
                type="text"
                onChange={(event) => handleMenuChange(event, index)}
              />
            </div>
            <div className="w-80 lg:w-full">
              <label className="font-bold dark:text-white">Price</label>
              <Input
                placeholder="Insert Ticket Price"
                id="ticket_price"
                type="text"
              />
            </div>
            <div className="w-80 lg:w-full">
              <label className="font-bold dark:text-white">Quota</label>
              <Input
                placeholder="Insert Ticket Capacity"
                id="ticket_quota"
                type="text"
              />
            </div>
            <PrimButton
              label="deleteTicket"
              id="button-delete-ticket"
              type="button"
              className="w-40 bg-@19345E text-@EBF2FA font-semibold py-2 px-8 
             rounded-lg border  hover:scale-105 active:bg-gray-200 disabled:bg-gray-400"
              onClick={() => deleteMenu(index)}
            />
          </div>
        ))}
      </form>
    </Layout>
  );
};

export default Home;
