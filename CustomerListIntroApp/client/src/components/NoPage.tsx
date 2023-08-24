import { FC } from "react";
import ErrorPageDescription from "../types/ErrorPageDescription";
import { Link } from "react-router-dom";

type NoPageProps = {
  errorDetail: ErrorPageDescription;
};

const NoPage: FC<NoPageProps> = ({ errorDetail }) => {
  return (
    <div className="flex flex-col h-screen justify-center items-center text-center">
      <p className="text-2xl font-semibold text-indigo-600">
        {errorDetail.statusCode}
      </p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
        {errorDetail.errorMessage}
      </h1>
      <p className="mt-6 text-base leading-7 text-gray-600">
        {errorDetail.description}
      </p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <Link
          to={errorDetail.returnUrl}
          className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Geri dön
        </Link>
      </div>
    </div>
  );
};

export default NoPage;
