import FormComponent from "@/app/components/FormComponent";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-16">
      <h1 className="text-5xl font-bold mb-8 text-gray-800">
        Serverless London Feedback
      </h1>
      <FormComponent />
    </div>
  );
}
