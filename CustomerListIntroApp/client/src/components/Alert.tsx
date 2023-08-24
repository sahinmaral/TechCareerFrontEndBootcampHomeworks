import { FC, useEffect, useState } from "react";
import AlertType from "../enums/AlertTypeEnum";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type AlertProps = {
  message: string;
  type: AlertType;
};

const Alert: FC<AlertProps> = ({ message, type }) => {
  const [mainClassNames, setMainClassNames] = useState<string>(
    "w-full flex items-center p-8 mb-4 text-md rounded-lg"
  );
  const [textClassNames, setTextClassNames] = useState<string>("mr-5");

  const setColorByAlertType = () => {
    switch (type) {
      case AlertType.SUCCESS:
        setMainClassNames(`${mainClassNames} bg-green-50 dark:bg-gray-800`);
        setTextClassNames(
          `${textClassNames} text-green-800 dark:text-green-400`
        );
        break;
      case AlertType.DANGER:
        setMainClassNames(`${mainClassNames} bg-red-50 dark:bg-gray-800`);
        setTextClassNames(`${textClassNames} text-red-800 dark:text-red-400`);
        break;
      case AlertType.WARNING:
        setMainClassNames(`${mainClassNames} bg-yellow-50 dark:bg-gray-800`);
        setTextClassNames(
          `${textClassNames} text-yellow-800 dark:text-yellow-400`
        );
        break;
      case AlertType.INFO:
        setMainClassNames(`${mainClassNames} bg-blue-50 dark:bg-gray-800`);
        setTextClassNames(`${textClassNames} text-blue-800 dark:text-blue-400`);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    setColorByAlertType();
  }, []);

  return (
    <div className="flex h-screen items-center justify-center">
      <div className={mainClassNames}>
        <FontAwesomeIcon
          icon={faCircleExclamation}
          size="xl"
          className={textClassNames}
        />
        <div className="dark:text-white">
          <span className="font-medium dark:text-white">Alert! </span> {message}
        </div>
      </div>
    </div>
  );
};

export default Alert;
