import { FC } from "react";

interface Props {
  navigator: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
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
