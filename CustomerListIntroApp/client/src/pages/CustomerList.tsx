import { FC, Fragment } from "react";
import Customer from "../types/Customer";
import Loading from "../components/Loading";
import AlertType from "../enums/AlertTypeEnum";
import CustomerTable from "../components/CustomerTable";
import Alert from "../components/Alert";
import CustomerFilterSection from "../components/CustomerFilterSection";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

type CustomerListPageProps = {
  isLoading: boolean;
  errorMessage: string;
  customers: Customer[];
  filter: CustomerFilterType;
  setFilter: React.Dispatch<React.SetStateAction<CustomerFilterType>>;
};

const CustomerList: FC<CustomerListPageProps> = ({
  isLoading,
  errorMessage,
  customers,
  filter,
  setFilter,
}) => {

  return (
    <Fragment>
      <Helmet>
        <title>Customer List Intro App - Customer List</title>
      </Helmet>
      {isLoading && <Loading />}
      {!isLoading && errorMessage && (
        <Alert message={errorMessage} type={AlertType.DANGER} />
      )}
      {!isLoading && errorMessage.length === 0 && (
        <Fragment>
          <div className="relative py-4">
            <CustomerFilterSection filter={filter} setFilter={setFilter} />
            <CustomerTable
              customers={customers}
              filter={filter}
              setFilter={setFilter}
            />
          </div>
          <Link
            to="/add"
            className="w-[200px] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Müşteri Ekle
          </Link>
        </Fragment>
      )}
    </Fragment>
  );
};

export default CustomerList;
