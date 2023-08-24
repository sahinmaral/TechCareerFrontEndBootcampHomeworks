import { FC, useMemo } from "react";
import Customer from "../types/Customer";
import OrderType from "../enums/OrderTypeEnum";
import CustomerOrderSection from "./CustomerOrderSection";

type CustomerTableProps = {
  customers: Customer[];
  filter: CustomerFilterType;
  setFilter: React.Dispatch<React.SetStateAction<CustomerFilterType>>;
};

const CustomerTable: FC<CustomerTableProps> = ({
  customers,
  filter,
  setFilter,
}) => {
  const sortCustomers = (customers: Customer[]) => {
    if (filter.companyName.order === OrderType.ASCENDING) {
      return customers.sort((a, b) =>
        a.companyName.localeCompare(b.companyName)
      );
    } else if (filter.companyName.order === OrderType.DESCENDING) {
      return customers.sort((a, b) =>
        b.companyName.localeCompare(a.companyName)
      );
    } else {
      return customers;
    }
  };

  const limitCustomers = (customers: Customer[]) => {
    if (customers.length < filter.rowCountLimit || filter.rowCountLimit === 0) {
      return customers;
    } else {
      const splittedCustomers = [...customers].splice(0, filter.rowCountLimit);
      return splittedCustomers;
    }
  };

  const sortAndLimitCustomers = () => {
    const sortedCustomers = sortCustomers(customers);
    const limitedCustomers = limitCustomers(sortedCustomers);

    return limitedCustomers;
  };

  const filteredCustomers = useMemo(() => {
    const sortedAndLimitedCustomers = sortAndLimitCustomers();

    return sortedAndLimitedCustomers.filter((customer) =>
      customer.companyName
        .toLowerCase()
        .includes(filter.companyName.search.toLowerCase())
    );
  }, [filter]);

  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th className="px-6 py-4">ID</th>
            <th className="px-6 py-4 flex gap-5">
              <span>Şirket ismi</span>
              <CustomerOrderSection filter={filter} setFilter={setFilter} />
            </th>
            <th className="px-6 py-4">Sokak</th>
            <th className="px-6 py-4">Şehir</th>
          </tr>
        </thead>
        <tbody>
          {filteredCustomers.map((customer) => {
            return (
              <tr
                key={customer.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {customer.id}
                </th>
                <td className="px-6 py-4">{customer.companyName}</td>
                <td>{customer.address.street}</td>
                <td>{customer.address.city}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerTable;
