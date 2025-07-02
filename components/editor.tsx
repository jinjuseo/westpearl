"use client";
import "@blocknote/core/fonts/inter.css";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useCreateBlockNote } from "@blocknote/react";
import { codeBlock } from "@blocknote/code-block";
import { Input } from "@/components/ui/input";
import { useEffect, useMemo, useState } from "react";
import { useTheme } from "next-themes";
import {
  BlockNoteEditor,
  BlockNoteSchema,
  defaultStyleSpecs,
  PartialBlock,
} from "@blocknote/core";
import { Button } from "./ui/button";
import { ArrowLeft } from "lucide-react";
import { loadFromStorage, saveToStorage } from "@/utils/black-note";

const Editor = () => {
  const { theme } = useTheme();
  const [title, setTitle] = useState<string>("");
  const [initialContent, setInitialContent] = useState<PartialBlock[] | null>(
    null
  );

  const editor = useMemo(() => {
    if (!initialContent) {
      return undefined;
    }
    return BlockNoteEditor.create({
      codeBlock,
      initialContent: initialContent,
    });
  }, [initialContent]);
  const onChange = (e) => {
    setTitle(() => e.target.value);
  };
  useEffect(() => {
    loadFromStorage().then((result) => {
      if (result) {
        const [title, content] = result;
        setTitle(title || "");
        setInitialContent(content);
      } else {
        setInitialContent(
          Array.from({ length: 16 }, () => ({
            type: "paragraph",
          }))
        );
      }
    });
  }, []);
  if (editor === undefined) {
    return "Loading content...";
  }

  return (
    <div className="w-full min-h-[90vh] flex flex-col justify-start items-center gap-2">
      <Input
        value={title}
        onChange={onChange}
        placeholder="제목을 입력하세요"
        className=" w-[80%] bg-transparent dark:bg-[#1f1f1f] drop-shadow-sm shadow-sm !text-xl !h-12 focus:!outline-none focus:!ring-0 focus:!ring-offset-0 "
      />
      <div className="w-[80%] min-h-[50vh]  rounded-sm drop-shadow-sm shadow-sm">
        <BlockNoteView
          onChange={() => {
            saveToStorage(title, editor.document);
          }}
          data-theming-css-demo
          editor={editor}
          theme={theme === "dark" ? "dark" : "light"}
        />
      </div>
      <div className="w-[80%] flex flex-row justify-between">
        <Button variant={"outline"}>이전</Button>
        <Button>저장</Button>
      </div>
    </div>
  );
};

export default Editor;
