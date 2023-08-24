import { FC, Fragment } from "react";
import OrderType from "../enums/OrderTypeEnum";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDownAZ, faArrowUpAZ } from "@fortawesome/free-solid-svg-icons";

type CustomerOrderSectionProps = {
  filter: CustomerFilterType;
  setFilter: React.Dispatch<React.SetStateAction<CustomerFilterType>>;
};

const CustomerOrderSection: FC<CustomerOrderSectionProps> = ({
  filter,
  setFilter,
}) => {

  const toggleOrderByName = () => {
    if (filter.companyName.order === OrderType.ASCENDING) {
      setFilter({
        ...filter,
        companyName: { ...filter.companyName, order: OrderType.DESCENDING },
      });
    } else
      setFilter({
        ...filter,
        companyName: { ...filter.companyName, order: OrderType.ASCENDING },
      });
  };

  return (
    <Fragment>
      {filter.companyName.order === OrderType.ASCENDING && (
        <FontAwesomeIcon
          className="hover:cursor-pointer"
          icon={faArrowDownAZ}
          onClick={() => toggleOrderByName()}
        />
      )}
      {filter.companyName.order === OrderType.DESCENDING && (
        <FontAwesomeIcon
          className="hover:cursor-pointer"
          icon={faArrowUpAZ}
          onClick={() => toggleOrderByName()}
        />
      )}
    </Fragment>
  );
};

export default CustomerOrderSection;
