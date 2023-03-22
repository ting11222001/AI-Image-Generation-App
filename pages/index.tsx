import React from "react";
import Content from "@/components/Content";
import Header from '@/components/Header';

export default function Home() {
  return (
    <>
      <Header />
      <div className="sm:p-8 px-4 py-8 w-full h-screen bg-[#f9fafe]">
        <Content />
      </div>
    </>
  )
}
