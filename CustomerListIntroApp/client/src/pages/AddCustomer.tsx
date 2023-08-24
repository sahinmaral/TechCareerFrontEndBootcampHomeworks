import { ChangeEvent, FC, useState } from "react";
import Customer from "../types/Customer";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { useToaster } from "../context/ToasterProvider";
import { Helmet } from "react-helmet-async";
import {
  ErrorMessage,
  Field,
  Form,
  Formik,
  useFormik,
  useFormikContext,
} from "formik";
import CustomerSchema from "../schema/CustomerSchema";
import AddCustomerFormFields from "../components/AddCustomerFormFields";

type AddCustomerProps = {
  customers: Customer[];
  setCustomers: React.Dispatch<React.SetStateAction<Customer[]>>;
};

const AddCustomer: FC<AddCustomerProps> = ({ customers, setCustomers }) => {
  const initialData: Customer = {
    id: uuidv4(),
    companyName: "",
    contactName: "",
    contactTitle: "",
    address: {
      street: "",
      country: "",
      city: "",
      region: "NULL",
      postalCode: "",
      phone: "",
    },
  };

  const navigate = useNavigate();

  const { setInfoWithMessage } = useToaster();

  const onSubmit = (values: Customer) => {
    axios
      .post(
        "https://customerlistroapp-jsonserver.onrender.com/customers",
        values
      )
      .then(() => {
        setCustomers([...customers, values]);
        setInfoWithMessage("Müşteri başarıyla kaydedildi");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useFormik({
    initialValues: initialData,
    validationSchema: CustomerSchema,
    onSubmit,
  });

  return (
    <div className="mt-5">
      <Helmet>
        <title>Customer List Intro App - Müşteri Ekle</title>
      </Helmet>
      <h1 className="mb-10 font-medium text-2xl">Müşteri Ekle</h1>

      <Formik
        initialValues={initialData}
        onSubmit={onSubmit}
        validationSchema={CustomerSchema}
      >
        <AddCustomerFormFields />
      </Formik>
    </div>
  );
};

export default AddCustomer;
