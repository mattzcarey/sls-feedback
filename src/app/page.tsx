import FormComponent from "@/app/components/FormComponent";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-5">Serverless London Feedback</h1>
      <FormComponent />
    </div>
  );
}
