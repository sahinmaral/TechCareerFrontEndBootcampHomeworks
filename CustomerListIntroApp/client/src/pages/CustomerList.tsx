import { FC, Fragment } from "react";
import Customer from "../types/Customer";
import Loading from "../components/Loading";
import AlertType from "../enums/AlertTypeEnum";
import CustomerTable from "../components/CustomerTable";
import Alert from "../components/Alert";
import CustomerFilterSection from "../components/CustomerFilterSection";
import { Helmet } from "react-helmet";

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
        <div className="relative py-4">
          <CustomerFilterSection filter={filter} setFilter={setFilter} />
          <CustomerTable
            customers={customers}
            filter={filter}
            setFilter={setFilter}
          />
        </div>
      )}
    </Fragment>
  );
};

export default CustomerList;
