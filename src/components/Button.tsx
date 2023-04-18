import { FC, ButtonHTMLAttributes } from "react";

interface Props {
  navigator: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}
interface PrimButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export const ButtonSubmit: FC<Partial<Props>> = (props) => {
  const { onClick } = props;
  return (
    <button
      className="py-2 px-4 m-2 w-full justify-center items-center gap-2 rounded-md border text-lg bg-@19345E text-@EBF2FA font-bold shadow-sm align-middle hover:scale-105 focus:outline-none   transition-all text-md dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
      onClick={onClick}
    >
      Submit
    </button>
  );
};
export const ButtonAdd: FC<Partial<Props>> = (props) => {
  const { onClick } = props;
  return (
    <button
      className="py-1 px-1 m-1 md:py-2 md:px-4 md:m-2  w-full justify-center items-center gap-2 rounded-md border text-md md:text-lg bg-@19345E text-@EBF2FA font-bold shadow-sm align-middle hover:scale-105 focus:outline-none   transition-all text-md dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
      onClick={onClick}
    >
      Add Event
    </button>
  );
};

export const ButtonEdit: FC<Partial<Props>> = (props) => {
  const { onClick } = props;
  return (
    <button
      className="py-2 px-4 m-2 w-full justify-center items-center gap-2 rounded-md border text-lg bg-@19345E text-@EBF2FA font-bold shadow-sm align-middle hover:scale-105 focus:outline-none   transition-all text-md dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
      onClick={onClick}
    >
      Edit
    </button>
  );
};

export const ButtonUpdate: FC<Partial<Props>> = (props) => {
  const { onClick } = props;
  return (
    <button
      className="py-2 px-4 m-2 w-full justify-center items-center gap-2 rounded-md border text-lg bg-@19345E text-@EBF2FA font-bold shadow-sm align-middle hover:scale-105 focus:outline-none   transition-all text-md dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
      onClick={onClick}
    >
      Update
    </button>
  );
};

export const ButtonDelete: FC<Partial<Props>> = (props) => {
  const { onClick } = props;
  return (
    <button
      className="py-2 px-4 m-2 w-full justify-center items-center gap-2 rounded-md border border-@19345E text-lg bg-@EBF2FA text-@19345E font-bold shadow-sm align-middle hover:scale-105 focus:outline-none   transition-all text-md dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
      onClick={onClick}
    >
      Delete
    </button>
  );
};
export const ButtonOpen: FC<Partial<Props>> = (props) => {
  const { onClick } = props;
  return (
    <button
      className="py-2 px-4 m-2 w-full justify-center items-center gap-2 rounded-md border text-lg bg-@19345E text-@EBF2FA font-bold shadow-sm align-middle hover:scale-105 focus:outline-none   transition-all text-md dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
      onClick={onClick}
    >
      Open
    </button>
  );
};
export const ButtonClose: FC<Partial<Props>> = (props) => {
  const { onClick } = props;
  return (
    <button
      className="py-2 px-4 m-2 w-full justify-center items-center gap-2 rounded-md border border-@19345E text-lg bg-@EBF2FA text-@19345E font-bold shadow-sm align-middle hover:scale-105 focus:outline-none   transition-all text-md dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
      onClick={onClick}
    >
      Close
    </button>
  );
};

export const PrimButton: FC<PrimButton> = (props) => {
  const { label } = props;

  return (
    <button
      className="bg-[#19345E] text-slate-200 font-semibold py-2 px-8 w-full
    rounded-lg border border-white hover:bg-[#1A3BC3] active:bg-[#2c4fdd] disabled:bg-[#3f4958]"
      {...props}
    >
      {label}
    </button>
  );
};
export const SecButton: FC<PrimButton> = (props) => {
  const { label } = props;

  return (
    <button
      className="bg-white text-[#19345E] font-semibold py-2 px-8 w-full
    rounded-lg border border-[#19345E] hover:bg-gray-300 active:bg-gray-200 disabled:bg-gray-400"
      {...props}
    >
      {label}
    </button>
  );
};
