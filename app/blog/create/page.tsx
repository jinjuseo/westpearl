"use client";
import "@blocknote/core/fonts/inter.css";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useCreateBlockNote } from "@blocknote/react";
import { codeBlock } from "@blocknote/code-block";
const page = () => {
  const editor = useCreateBlockNote({
    codeBlock,
  });
  return (
    <section className="min-h-screen bg-white dark:bg-slate-900 pt-24 pb-20">
      <p className="text-3xl text-black dark:text-white flex justify-center items-center">
        개발중...
      </p>
      <BlockNoteView editor={editor} />
    </section>
  );
};

export default page;
