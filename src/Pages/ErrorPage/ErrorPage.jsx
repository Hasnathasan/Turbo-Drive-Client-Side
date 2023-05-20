import React from "react";
import error from "../../assets/error.jpg";
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";
import useTitle from "../../CustomHooks/useTitle";

const ErrorPage = () => {
    useTitle("Turbo-Error")
  return (
    <div className="flex w-screen h-screen justify-center items-center">
      <div className="w-3/4 md:w-2/5">
        <img className="w-full" src={error} alt="" />
        <Link to="/">
          <Button
            className="mt-auto mx-auto"
            outline={true}
            gradientDuoTone="cyanToBlue"
          >
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
