"use client";
import "@blocknote/core/fonts/inter.css";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useCreateBlockNote } from "@blocknote/react";
import { codeBlock } from "@blocknote/code-block";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useTheme } from "next-themes";
import { BlockNoteSchema, defaultStyleSpecs } from "@blocknote/core";
const page = () => {
  const { theme } = useTheme();
  const [title, setTitle] = useState("");
  const editor = useCreateBlockNote({
    codeBlock,
    // defaultStyles,
  });
  return (
    <section className="min-h-screen bg-white dark:bg-slate-900 pt-24 pb-20">
      <p className="text-3xl text-black dark:text-white flex justify-center items-center">
        개발중...
      </p>
      <Input placeholder="제목" />
      <BlockNoteView
        data-theming-css-demo
        editor={editor}
        theme={theme === "dark" ? "dark" : "light"}
      />
    </section>
  );
};

export default page;
