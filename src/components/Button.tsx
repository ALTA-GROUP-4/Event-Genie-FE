import { FC, ButtonHTMLAttributes } from "react";

interface PrimButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

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
