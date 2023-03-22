import React from "react";
import Content from "@/pages/Content";
import Header from '@/components/Header';

export default function Home() {
  return (
    <>
      <Header />
      <div className="bg-[#f9fafe]">
        <Content />
      </div>
    </>
  )
}
