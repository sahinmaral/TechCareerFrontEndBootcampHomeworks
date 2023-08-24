import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChangeEvent, FC } from "react";

type CustomerSearchProps = {
  filter: CustomerFilterType;
  setFilter: React.Dispatch<React.SetStateAction<CustomerFilterType>>;
};

const CustomerSearch: FC<CustomerSearchProps> = ({ filter, setFilter }) => {
  const handleUpdateCompanyNameSearch = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setFilter({
      ...filter,
      companyName: { ...filter.companyName, search: event.target.value },
    });
  };

  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="dark:text-gray-200" />
      </div>
      <input
        type="text"
        onChange={handleUpdateCompanyNameSearch}
        className="outline-none block md:w-[300px] w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-200 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Şirket ismine göre arayınız"
        required
      />
    </div>
  );
};

export default CustomerSearch;
