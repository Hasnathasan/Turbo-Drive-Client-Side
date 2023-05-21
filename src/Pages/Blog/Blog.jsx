import React from "react";
import useTitle from "../../CustomHooks/useTitle";

const Blog = () => {
  useTitle("Turbo-Blog");
  return (
    <div className="bg-slate-50 container mx-auto">
      <div className="py-10">
        <h2 className="text-3xl text-center font-bold">Blog Section</h2>
      </div>
      <div className="my-8 p-4 sm:p-8 rounded">
        <h2 className="text-2xl font-bold mb-2">
          What is an access token and refresh token? How do they work and where
          should we store them on the client-side?
        </h2>
        <p className="text-lg font-medium mb-10">
          Ans: An access token is a short-lived credential that grants a client
          access to specific resources after authentication. A refresh token is
          a long-lived credential used to obtain a new access token when the
          current one expires. To store them on the client-side, options include
          using HTTP-only cookies, local storage, session storage, or secure
          storage mechanisms provided by mobile platforms. Security measures
          should be implemented to protect these tokens, and communication
          between the client and server should be done over HTTPS.
        </p>

        <h2 className="text-2xl font-bold mb-2">
          Compare SQL and NoSQL databases?
        </h2>
        <p className="text-lg font-medium mb-10">
          Ans: SQL databases are structured and use a fixed schema, offering
          strong data consistency but limited scalability. NoSQL databases are
          flexible, schema-less, and can handle large amounts of unstructured
          data with high scalability, but sacrifice some data consistency. SQL
          databases are suitable for complex transactions, while NoSQL databases
          excel in handling big data and real-time applications.
        </p>

        <h2 className="text-2xl font-bold mb-2">What is express js?</h2>
        <p className="text-lg font-medium mb-10">
          Ans: Express.js is a lightweight and flexible web application
          framework for Node.js. It simplifies building web applications and
          APIs by providing essential features and a straightforward interface.
        </p>

        <h2 className="text-2xl font-bold mb-2">What is Nest JS?</h2>
        <p className="text-lg font-medium mb-10">
          Ans: Nest.js is a progressive and extensible framework for building
          efficient, scalable, and maintainable server-side applications using
          TypeScript. It combines elements of Object-Oriented Programming,
          Functional Programming, and Reactive Programming to offer a robust
          development experience.
        </p>
        <h2 className="text-2xl font-bold mb-2">
          What is MongoDB aggregate and how does it work?
        </h2>
        <p className="text-lg font-medium mb-10">
          Ans: In MongoDB, the aggregate function allows for advanced data
          processing on collections. It employs a pipeline framework comprising
          multiple stages for transforming and calculating data. Each stage
          performs a specific operation, such as filtering, grouping, sorting,
          and projecting fields. The pipeline stages are executed sequentially,
          with the output of one stage serving as the input for the next. By
          combining these stages with operators and expressions, you can perform
          complex data transformations. The result is a tailored dataset that
          meets your specific requirements through powerful data manipulation
          capabilities provided by the aggregate function.Nest.js is a
          progressive and extensible framework for building efficient, scalable,
          and maintainable server-side applications using TypeScript. It
          combines elements of Object-Oriented Programming, Functional
          Programming, and Reactive Programming to offer a robust development
          experience.
        </p>
      </div>
    </div>
  );
};

export default Blog;
