import { BsChevronLeft } from "react-icons/bs";

const BackButton = ({ title }) => {
  return (
    <div className="flex items-center gap-2">
      <div className=" pr-2 hover:border-primarylight cursor-pointer">
        <BsChevronLeft size={20} />
      </div>
      <span className="text-lg">{title}</span>
    </div>
  );
};

export default BackButton;
