"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "@/app/hooks/useForm";

const FormComponent = () => {
  const [formData, setFormData] = useState({
    event: "serverless-london-june-2023",
    like: "",
    change: "",
    rating: "",
    email: "",
  });

  const { submitForm } = useForm();
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    await submitForm(formData);
    router.push("/success");
  };

  return (
    <form className="w-full max-w-sm" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="email"
        >
          Email (optional)
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="like"
        >
          What did you like about the event?
        </label>
        <textarea
          className="resize-none shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
          id="like"
          name="like"
          value={formData.like}
          onChange={handleChange}
        />
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="change"
        >
          What would you change for next time?
        </label>
        <textarea
          className="resize-none shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
          id="change"
          name="change"
          value={formData.change}
          onChange={handleChange}
        />
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="rating"
        >
          Please rate your experience of the event between 1 (lowest) and 10
          (highest).
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="rating"
          type="range"
          min="0"
          max="10"
          name="rating"
          value={formData.rating}
          onChange={handleChange}
        />
        <div className="flex justify-between">
          <span>1</span>
          <span>10</span>
        </div>
      </div>

      <div className="flex items-center justify-between mt-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default FormComponent;
