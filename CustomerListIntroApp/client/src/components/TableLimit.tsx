import { ChangeEvent, FC } from "react";

type TableLimitProps = {
  filter: CustomerFilterType;
  setFilter: React.Dispatch<React.SetStateAction<CustomerFilterType>>;
};

const TableLimit: FC<TableLimitProps> = ({ filter, setFilter }) => {

  const handleUpdateRowCount = (event: ChangeEvent<HTMLSelectElement>) => {
    setFilter({ ...filter, rowCountLimit: Number(event.target.value) });
  };

  return (
    <select
      onChange={handleUpdateRowCount}
      className="float-right outline-none w-[200px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    >
      <option value={5}>Seçiniz</option>
      <option value={15}>15</option>
      <option value={20}>20</option>
      <option value={50}>50</option>
      <option value={100}>100</option>
      <option value={0}>Hepsi</option>
    </select>
  );
};

export default TableLimit;
