export const useForm = () => {
  const submitForm = (data: any) => {
    return fetch("/api/feedback", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return { submitForm };
};
