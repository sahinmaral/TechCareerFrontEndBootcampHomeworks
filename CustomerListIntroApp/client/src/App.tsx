import { FC, useEffect, useState } from "react";
import Customer from "./types/Customer";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomerList from "./pages/CustomerList";
import NoPage from "./components/NoPage";
import AddCustomer from "./pages/AddCustomer";
import OrderType from "./enums/OrderTypeEnum";
import ThemeToggler from "./components/ThemeToggler";

const App: FC = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const customerFilterTypeInitialData = {
    companyName: {
      search: "",
      order: OrderType.ASCENDING,
    },
    rowCountLimit: 5,
  };

  const [filter, setFilter] = useState<CustomerFilterType>(
    customerFilterTypeInitialData
  );

  useEffect(() => {
    axios
      .get<Customer[]>(`${import.meta.env.VITE_MOCKUP_API_URL}/customers`)
      .then((response) => {
        setCustomers(response.data);
      })
      .catch((error) => {
        setErrorMessage(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="relative">
      <div className="container mx-auto flex flex-col h-screen">
        <ThemeToggler />
        <BrowserRouter>
          <Routes>
            <Route
              index
              element={
                <CustomerList
                  filter={filter}
                  isLoading={isLoading}
                  setFilter={setFilter}
                  errorMessage={errorMessage}
                  customers={customers}
                />
              }
            />
            <Route
              path="add"
              element={
                <AddCustomer
                  customers={customers}
                  setCustomers={setCustomers}
                />
              }
            />
            <Route
              path="*"
              element={
                <NoPage
                  errorDetail={{
                    statusCode: 404,
                    errorMessage: "Sayfa bulunamadı",
                    description: "Üzgünüz, aradığınız sayfa bulunamadı.",
                    returnUrl: "",
                  }}
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
