import Page from "@/components/pages/home/home";
import ProductsPage from "@/components/pages/produtos/produtos";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Page />
      <ProductsPage />
      <div className="h-screen bg-black"></div>
    </div>

  );
}
