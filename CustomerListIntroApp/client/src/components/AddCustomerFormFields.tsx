import { FC } from "react";
import Customer from "../types/Customer";
import { useFormikContext } from "formik";

const AddCustomerForminputs: FC = () => {
  const { values, handleChange, handleBlur, errors, touched, handleSubmit } =
    useFormikContext<Customer>();

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSubmit();
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="relative z-0 w-full mb-6 group">
        <input
          type="text"
          name="companyName"
          id="companyName"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.companyName}
          className={`autofill:shadow-input dark:autofill:shadow-input-dark block py-2.5 px-0 w-full text-sm dark:text-white text-gray-900 bg-transparent border-0 border-b-2 ${
            touched.companyName && errors.companyName
              ? "border-red-500"
              : "border-gray-300"
          } appearance-none dark:text-white dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
          placeholder=" "
        />
        <label
          htmlFor="contactTitle"
          className={`peer-focus:font-medium absolute text-sm ${
            touched.companyName && errors.companyName
              ? "text-red-500"
              : "text-gray-500 dark:text-gray-200"
          } duration-300 -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
        >
          Şirket Adi
        </label>
        {touched.companyName && errors.companyName && (
          <div className="mt-2 text-sm text-red-600 dark:text-red-400">
            {errors.companyName}
          </div>
        )}
      </div>
      <div className="relative z-0 w-full mb-6 group">
        <input
          type="text"
          name="contactName"
          id="contactName"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.contactName}
          className={`autofill:shadow-input dark:autofill:shadow-input-dark block py-2.5 px-0 w-full text-sm dark:text-white text-gray-900 bg-transparent border-0 border-b-2 ${
            touched.contactName && errors.contactName
              ? "border-red-500"
              : "border-gray-300"
          } appearance-none dark:text-white dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
          placeholder=" "
        />
        <label
          htmlFor="contactName"
          className={`peer-focus:font-medium absolute text-sm ${
            touched.contactName && errors.contactName
              ? "text-red-500"
              : "text-gray-500 dark:text-gray-200"
          } duration-300 -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
        >
          İletişim adı
        </label>

        {touched.contactName && errors.contactName && (
          <div className="mt-2 text-sm text-red-600 dark:text-red-400">
            {errors.contactName}
          </div>
        )}
      </div>
      <div className="relative z-0 w-full mb-6 group">
        <input
          type="text"
          name="contactTitle"
          id="contactTitle"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.contactTitle}
          className={`autofill:shadow-input dark:autofill:shadow-input-dark block py-2.5 px-0 w-full text-sm dark:text-white text-gray-900 bg-transparent border-0 border-b-2 ${
            touched.contactTitle && errors.contactTitle
              ? "border-red-500"
              : "border-gray-300"
          } appearance-none dark:text-white dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
          placeholder=" "
        />
        <label
          htmlFor="contactTitle"
          className={`peer-focus:font-medium absolute text-sm ${
            touched.contactTitle && errors.contactTitle
              ? "text-red-500"
              : "text-gray-500 dark:text-gray-200"
          } duration-300 -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
        >
          İletişim başlığı
        </label>
        {touched.contactTitle && errors.contactTitle && (
          <div className="mt-2 text-sm text-red-600 dark:text-red-400">
            {errors.contactTitle}
          </div>
        )}
      </div>

      <h3 className="mb-5 text-lg font-medium">Adres</h3>

      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="address.street"
            id="street"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.address.street}
            className={`autofill:shadow-input dark:autofill:shadow-input-dark block py-2.5 px-0 w-full text-sm dark:text-white text-gray-900 bg-transparent border-0 border-b-2 ${
              touched.address?.street && errors.address?.street
                ? "border-red-500"
                : "border-gray-300"
            } appearance-none dark:text-white dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
            placeholder=" "
          />
          <label
            htmlFor="street"
            className={`peer-focus:font-medium absolute text-sm ${
              touched.address?.street && errors.address?.street
                ? "text-red-500"
                : "text-gray-500 dark:text-gray-200"
            } duration-300 -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
          >
            Sokak
          </label>
          {touched.address?.street && errors.address?.street && (
            <div className="mt-2 text-sm text-red-600 dark:text-red-400">
              {errors.address?.street}
            </div>
          )}
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="address.city"
            id="city"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.address.city}
            className={`autofill:shadow-input dark:autofill:shadow-input-dark block py-2.5 px-0 w-full text-sm dark:text-white text-gray-900 bg-transparent border-0 border-b-2 ${
              touched.address?.city && errors.address?.city
                ? "border-red-500"
                : "border-gray-300"
            } appearance-none dark:text-white dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
            placeholder=" "
          />
          <label
            htmlFor="city"
            className={`peer-focus:font-medium absolute text-sm ${
              touched.address?.city && errors.address?.city
                ? "text-red-500"
                : "text-gray-500 dark:text-gray-200"
            } duration-300 -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
          >
            Şehir
          </label>
          {touched.address?.city && errors.address?.city && (
            <div className="mt-2 text-sm text-red-600 dark:text-red-400">
              {errors.address?.city}
            </div>
          )}
        </div>
      </div>
      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="address.postalCode"
            id="postalCode"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.address.postalCode}
            className={`autofill:shadow-input dark:autofill:shadow-input-dark block py-2.5 px-0 w-full text-sm dark:text-white text-gray-900 bg-transparent border-0 border-b-2 ${
              touched.address?.postalCode && errors.address?.postalCode
                ? "border-red-500"
                : "border-gray-300"
            } appearance-none dark:text-white dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
            placeholder=" "
          />
          <label
            htmlFor="postalCode"
            className={`peer-focus:font-medium absolute text-sm ${
              touched.address?.postalCode && errors.address?.postalCode
                ? "text-red-500"
                : "text-gray-500 dark:text-gray-200"
            } duration-300 -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
          >
            Posta Kodu
          </label>
          {touched.address?.postalCode && errors.address?.postalCode && (
            <div className="mt-2 text-sm text-red-600 dark:text-red-400">
              {errors.address?.postalCode}
            </div>
          )}
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="address.country"
            id="country"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.address.country}
            className={`autofill:shadow-input dark:autofill:shadow-input-dark block py-2.5 px-0 w-full text-sm dark:text-white text-gray-900 bg-transparent border-0 border-b-2 ${
              touched.address?.country && errors.address?.country
                ? "border-red-500"
                : "border-gray-300"
            } appearance-none dark:text-white dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
            placeholder=" "
          />
          <label
            htmlFor="country"
            className={`peer-focus:font-medium absolute text-sm ${
              touched.address?.country && errors.address?.country
                ? "text-red-500"
                : "text-gray-500 dark:text-gray-200"
            } duration-300 -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
          >
            Ülke
          </label>
          {touched.address?.country && errors.address?.country && (
            <div className="mt-2 text-sm text-red-600 dark:text-red-400">
              {errors.address?.country}
            </div>
          )}
        </div>
      </div>
      <div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="tel"
            name="address.phone"
            id="phone"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.address.phone}
            className={`autofill:shadow-input dark:autofill:shadow-input-dark block py-2.5 px-0 w-full text-sm dark:text-white text-gray-900 bg-transparent border-0 border-b-2 ${
              touched.address?.phone && errors.address?.phone
                ? "border-red-500"
                : "border-gray-300"
            } appearance-none dark:text-white dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
            placeholder=" "
          />
          <label
            htmlFor="phone"
            className={`peer-focus:font-medium absolute text-sm ${
              touched.address?.phone && errors.address?.phone
                ? "text-red-500"
                : "text-gray-500 dark:text-gray-200"
            } duration-300 -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
          >
            Telefon Numarası (1234567890)
          </label>
          {touched.address?.phone && errors.address?.phone && (
            <div className="mt-2 text-sm text-red-600 dark:text-red-400">
              {errors.address?.phone}
            </div>
          )}
        </div>
      </div>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Gönder
      </button>
    </form>
  );
};

export default AddCustomerForminputs;
