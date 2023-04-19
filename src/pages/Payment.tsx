import { FC } from "react";
import { Layout } from "../components/Layout";
import { Input } from "../components/Input";
import { PrimButton, SecButton } from "../components/Button";
const Payment: FC = () => {
  return (
    <Layout>
      <div className="my-6 px-6 justify-center items-center">
        <div>
          <h1 className="flex px-6 text-@19345E items-center justify-center font-bold text-2xl  md:texl-3xl lg:text-5xl  capitalize ">
            Payment
          </h1>
        </div>
        <div className="flex flex-col my-6 px-6 justify-center items-center">
          <div className="flex flex-row gap-4 md:w-1/2">
            <div className="w-full">
              <label className="font-bold dark:text-white">Name</label>
              <Input placeholder="Insert Name" id="payment_name" type="text" />
            </div>
            <div className="w-full">
              <label className="font-bold dark:text-white">Email</label>
              <Input
                placeholder="Insert Email"
                id="payment_email"
                type="text"
              />
            </div>
          </div>
          <div className="my-2 gap-4 md:w-1/2 items-center justify-center">
            <div className="w-full">
              <label className="font-bold dark:text-white">
                Payment Method
              </label>
              <select
                id="payment_method"
                className="border bg-slate-100 rounded-lg border-slate-400 text-black p-2 focus:outline-none focus:border-@19345E focus:ring-1 focus:ring-@19345E w-full"
              >
                <option selected disabled>
                  Select Payment
                </option>
                <option>ATM</option>
                <option>Gopay</option>
                <option>Dana</option>
                <option>Ovo</option>
              </select>
            </div>
            <div className="w-full my-2">
              <p className="font-bold text-lg">
                Webinar: Your Product Manager Career by PlayStation Sr PM
              </p>
              <p>Monday, 22-May-2023</p>
              <p>Hosted by Product School, Jakarta</p>
            </div>
            <div className="w-full">
              <p className="font-bold text-lg">Details</p>
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-t-2 border-black capitalize">
                    <td className="px-1 md:px-3 py-1 md:py-2">items</td>{" "}
                    <td className="px-1 md:px-3 py-1 md:py-2">price</td>{" "}
                    <td className="px-1 md:px-3 py-1 md:py-2">quantity</td>
                    <td className="px-1 md:px-3 py-1 md:py-2">total</td>
                  </tr>
                </thead>
                <tbody>
                  <tr className=" border-black capitalize">
                    <td className="px-1 md:px-3 py-1 md:py-2">VIP ticket</td>{" "}
                    <td className="px-1 md:px-3 py-1 md:py-2">Rp.500.000</td>{" "}
                    <td className="px-6 md:px-8 py-1 md:py-2">5</td>{" "}
                    <td className="px-1 md:px-3 py-1 md:py-2">Rp.2.500.000</td>
                  </tr>
                  <tr className=" border-black capitalize w-max-80">
                    <td className="px-1 md:px-3 py-1 md:py-2">
                      regular ticket
                    </td>
                    <td className="px-1 md:px-3 py-1 md:py-2">Rp.300.000</td>{" "}
                    <td className="px-6 md:px-8 py-1 md:py-2">5</td>{" "}
                    <td className="px-1 md:px-3 py-1 md:py-2">Rp.1.500.000</td>
                  </tr>
                  <tr className=" border-black capitalize items-end">
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col p-2 md:flex-row  items-center justify-between md:w-1/2">
            <p className="font-semibold">Total Payment : Rp. 4.000.000</p>
            <div className="flex flex-row">
              <SecButton
                label="Cancel"
                id=" button-cencel-payment"
                type="button"
                className="py-2 px-4 m-2 w-24 justify-center items-center gap-2 rounded-md border border-@19345E text-lg bg-@EBF2FA text-@19345E font-bold shadow-sm align-middle hover:scale-105 focus:outline-none   transition-all text-md dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
              />
              <PrimButton
                label="Pay"
                id=" button-payment"
                type="submit"
                className="py-2 px-4 m-2 w-24 justify-center items-center gap-2 rounded-md border text-lg bg-@19345E text-@EBF2FA font-bold shadow-sm align-middle hover:scale-105 focus:outline-none   transition-all text-md dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Payment;
