"use client";

import dynamic from "next/dynamic";

const BlockNoteEditor = dynamic(() => import("@/components/editor"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-64 bg-gray-100 dark:bg-gray-800 rounded animate-pulse" />
  ),
});

const page = () => {
  return (
    <section className="min-h-screen bg-white dark:bg-slate-900 pt-24 pb-20 ">
      {/* <p className="text-3xl text-black dark:text-white flex justify-center items-center">
        개발중...
      </p> */}
      <BlockNoteEditor />
    </section>
  );
};

export default page;
