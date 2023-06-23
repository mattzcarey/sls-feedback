import "@/styles/globals.css";
import Footer from "@/lib/components/Footer";

export const metadata = {
  title: "Serverless London Feedback",
  description: "Serverless London Feedback",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
