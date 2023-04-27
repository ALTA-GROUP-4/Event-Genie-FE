import { FC, InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import { IoMdSend } from "react-icons/io";

export const Input: FC<InputHTMLAttributes<HTMLInputElement>> = (props) => {
  return (
    <div className="w-full">
      <input
        className="border rounded-lg bg-slate-100 border-slate-400 text-black p-2 focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900 w-full"
        {...props}
      />
    </div>
  );
};

export const TextArea: FC<TextareaHTMLAttributes<HTMLTextAreaElement>> = (
  props
) => {
  return (
    <div className="w-full">
      <textarea
        className="border rounded-lg  bg-slate-100  border-slate-400 text-black p-2 focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900 w-full h-60"
        {...props}
      />
    </div>
  );
};

export const InputEvent: FC<InputHTMLAttributes<HTMLInputElement>> = (
  props
) => {
  const { placeholder, id } = props;
  return (
    <div className="w-full">
      <label className="text-[#19345E] tracking-wider" htmlFor={id}>
        {placeholder}
      </label>
      <input
        className="mt-1 border rounded-lg bg-slate-100 text-black p-2 focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900 w-full"
        {...props}
      />
    </div>
  );
};

export const Comments: FC<TextareaHTMLAttributes<HTMLTextAreaElement>> = (
  props
) => {
  return (
    <div className="flex flex-col w-full h-24 py-2 justify-center items-center flex-grow md:py-3 md:pl-4 relative border border-black/10 bg-white dark:border-gray-900/50 dark:text-white dark:bg-gray-700 rounded-md shadow-[0_0_10px_rgba(0,0,0,0.10)] dark:shadow-[0_0_15px_rgba(0,0,0,0.10)]">
      <textarea
        className="m-0 w-full resize-none border-0  focus:ring-0 focus-visible:ring-0 bg-transparent p-0 pr-7 dark:bg-transparent pl-2 md:pl-0"
        {...props}
      />

      <button className="absolute p-1.5 text-4xl text-@19345E hover:scale-125  disabled:hover:bg-transparent dark:disabled:hover:bg-transparent right-1 md:right-2 disabled:opacity-40">
        <IoMdSend />
      </button>
    </div>
  );
};
