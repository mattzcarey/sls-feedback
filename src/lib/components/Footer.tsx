import Image from "next/image";
import Link from "next/link";

const Footer = (): JSX.Element => {
  return (
    <footer className="bg-white border-t dark:border-white/10 mt-auto py-10">
      <div className="max-w-screen-xl mx-auto flex justify-center items-center gap-4">
        <Link href="http://github.com/mattzcarey/sls-feedback">
          <Image src="/github.svg" alt="Meetup Logo" width={50} height={50} />
        </Link>

        <Link href="http://aleios.com">
          <Image
            src="/aleios-dark.svg"
            alt="Aleios Logo"
            width={200}
            height={50}
          />
        </Link>
      </div>

      <div className="text-center py-4">
        <p className="text-gray-500">Built with ❤️ and Serverless</p>
      </div>
    </footer>
  );
};

export default Footer;
