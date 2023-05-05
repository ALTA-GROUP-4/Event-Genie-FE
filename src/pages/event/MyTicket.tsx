import { FC } from "react";
import { Layout } from "@/components/Layout";
import { CardInvoice, CardMyTicket, CardTicketEvent } from "@/components/Card";
import { PrimButton, SecButton } from "@/components/Button";

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
        <div
          id="hs-medium-modal"
          className="hs-overlay hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto"
        >
          <div className="hs-overlay-open:md:mt-24 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all md:max-w-2xl md:w-full m-3 md:mx-auto">
            <form className="flex flex-col p-4 justify-center items-center shadow-lg bg-white dark:bg-@264653 rounded-large">
              <h1 className="uppercase font-bold text-3xl text-@19345E dark:text-white">
                Ticket Event
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 mt-4 mb-4 gap-4 ">
                <CardTicketEvent
                  name="Pameran Budaya"
                  hostedby="Altera Academy"
                  date="20-Juli-2015"
                  place="Bandar Lampung"
                  tot_ticket={5}
                  ticket_type="VIP"
                  ticket_id="001"
                />
                <CardTicketEvent
                  name="Pameran Budaya"
                  hostedby="Altera Academy"
                  date="20-Juli-2015"
                  place="Bandar Lampung"
                  tot_ticket={5}
                  ticket_type="Regular"
                  ticket_id="010"
                />
              </div>
              <div className="flex w-full">
                <SecButton
                  label="Cencel"
                  id=" button-cencel-ticket"
                  type="button"
                  className="hs-dropdown-toggle py-2 px-4 m-2 w-full justify-center items-center gap-2 rounded-md border border-@19345E text-lg bg-@EBF2FA text-@19345E font-bold shadow-sm align-middle hover:scale-105 focus:outline-none   transition-all text-md dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                  data-hs-overlay="#hs-medium-modal"
                  onClick={() => close()}
                />
                <PrimButton
                  label="Print"
                  id="button-ticket"
                  type="button"
                  className="py-2 px-4 m-2 w-full justify-center items-center gap-2 rounded-md border text-lg bg-@19345E text-@EBF2FA font-bold shadow-sm align-middle hover:scale-105 focus:outline-none   transition-all text-md dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                  onClick={() => window.print()}
                />
              </div>
            </form>
          </div>
        </div>
        <div
          id="hs-large-modal"
          className="hs-overlay hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto"
        >
          <div className="hs-overlay-open:md:mt-24 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all md:max-w-2xl md:w-full m-3 md:mx-auto">
            <form className="flex flex-col p-5 w-86 shadow-lg bg-white dark:bg-@264653 gap-3 rounded-lg">
              <CardInvoice
                name="Pameran Budaya"
                hostedby="Altera Academy"
                date="20-Juli-2015"
                place="Bandar Lampung"
                ticket_type="VIP"
                price={500000}
                tot_ticket={5}
                tot_price={2500000}
                total_pay={2500000}
                payment_method="Gopay"
              />
              <div className="flex w-full">
                <SecButton
                  label="Cencel"
                  id=" button-cencel-invoice"
                  type="button"
                  className="hs-dropdown-toggle py-2 px-4 m-2 w-full justify-center items-center gap-2 rounded-md border border-@19345E text-lg bg-@EBF2FA text-@19345E font-bold shadow-sm align-middle hover:scale-105 focus:outline-none   transition-all text-md dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                  data-hs-overlay="#hs-large-modal"
                  onClick={() => close()}
                />
                <PrimButton
                  label="Print"
                  id="button-ticket"
                  type="button"
                  className="py-2 px-4 m-2 w-full justify-center items-center gap-2 rounded-md border text-lg bg-@19345E text-@EBF2FA font-bold shadow-sm align-middle hover:scale-105 focus:outline-none   transition-all text-md dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                  onClick={() => window.print()}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default MyTicket;
