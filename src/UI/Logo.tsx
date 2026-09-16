import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <>
      <Link to={"/"} className="flex items-center gap-2">
        <div className="bg-brand-accent w-10 h-10 rounded-md text-white font-bold text-xl flex items-center justify-center">
          VV
        </div>
        <div className="flex flex-col h-10">
          <h1 className="font-bold text-xl text-brand-primary ">Work</h1>
          <p className="text-[10px] font-medium text-brand-accent">
            Employment
          </p>
        </div>
      </Link>
    </>
  );
}
