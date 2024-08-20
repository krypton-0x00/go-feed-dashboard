import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" mt-24 border-t flex w-full items-center justify-center p-4">
      <p className="text-gray-800">
        Made with ❤️ by <Link href={"https://x.com/shakir_dev"}>shakir</Link>
      </p>
    </footer>
  );
};

export default Footer;
