"use client";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface prop {
  setActiveSection: Dispatch<SetStateAction<string>>;
  scrollToSection: (sectionId: string) => void;
  isLastSection: boolean;
  sections: string[];
}
const MoveButton = ({
  setActiveSection,
  scrollToSection,
  isLastSection,
  sections,
}: prop) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // 브라우저 환경일 때만 true
  }, []);

  if (!isClient) return null;

  return createPortal(
    <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      className="fixed bottom-6 inset-x-0 mx-auto w-fit z-10"
    >
      <button
        className={`bg-transparent p-3 duration-300 `}
        onClick={() =>
          setActiveSection((prev) => {
            {
              const currIndex = sections.indexOf(prev);
              const nextIndex = (currIndex + 1) % sections.length;
              scrollToSection(sections[nextIndex]);
              return sections[nextIndex];
            }
          })
        }
      >
        <AnimatePresence mode="wait">
          {isLastSection ? (
            <motion.div
              key="up"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronUp className="w-8 h-8 text-slate-400" />
            </motion.div>
          ) : (
            <motion.div
              key="down"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="w-8 h-8 text-slate-400" />
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </motion.div>,
    document.body
  );
};

export default MoveButton;
