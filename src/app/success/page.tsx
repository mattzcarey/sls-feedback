import React from "react";

const SuccessPage = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">
          Form submitted successfully!
        </h1>
        <p className="text-gray-600">Thank you for your submission.</p>
      </div>
    </div>
  );
};

export default SuccessPage;
