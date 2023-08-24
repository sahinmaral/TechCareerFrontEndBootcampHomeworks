import { FC } from "react";
import CustomerSearch from "./CustomerSearch";
import TableLimit from "./TableLimit";

type CustomerFilterSectionProps = {
    filter: CustomerFilterType;
    setFilter: React.Dispatch<React.SetStateAction<CustomerFilterType>>;
  };

const CustomerFilterSection: FC<CustomerFilterSectionProps> = ({filter,setFilter}) => {
  return (
    <div className="flex md:flex-row flex-col md:gap-0 gap-2 justify-between my-5">
      <CustomerSearch filter={filter} setFilter={setFilter} />
      <TableLimit filter={filter} setFilter={setFilter} />
    </div>
  );
};

export default CustomerFilterSection;
