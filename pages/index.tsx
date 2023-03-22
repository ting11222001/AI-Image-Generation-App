import React from "react";
import logo from "../public/logo.svg";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
        <Link href="/">
          <Image
            className="w-28 object-contain"
            src={logo}
            alt="logo"
            width={50}
            height={50}
            placeholder="blur"
            blurDataURL="../public/vercel.svg"
          />
        </Link>
      </div>
    </>
  )
}
