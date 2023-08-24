import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";

const Loading: FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <FontAwesomeIcon icon={faSpinner} spin className="text-[4em] text-blue-400"/>
    </div>
  );
};

export default Loading;
