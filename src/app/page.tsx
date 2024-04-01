import Image from "next/image";
import '@/app/globals.css'
import Navbar from "@/components/navbar";
import Categories from "@/components/categories";
import Products from "./products";


export default function Home() {
  return (
    <>
      <Categories/>
      <Products/>
    </>
  );
}
