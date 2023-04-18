import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const Contain: FC<Props> = (props) => {
  return (
    <div className="w-[90%] h-[90%] flex flex-col justify-center items-center bg-white border border-slate-300 rounded-2xl">
      {props.children}
    </div>
  );
};
