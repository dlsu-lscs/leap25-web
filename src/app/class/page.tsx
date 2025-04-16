import ClassCard from "@/features/classCard/ClassCard";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Class() {
  return (
    <>
      <div className={`flex mx-32 my-16 ${inter.className}`}>
        <ClassCard></ClassCard>
      </div>
    </>
  );
}
