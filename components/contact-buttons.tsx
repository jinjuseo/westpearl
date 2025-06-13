"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { openNewTab } from "@/utils/common";
import { profile } from "@/const/profile";

interface ContactButtonsProps {
  variant?:
    | "link"
    | "outline"
    | "default"
    | "secondary"
    | "destructive"
    | "ghost";
  clasesName?: string;
}

const ContactButtons = ({
  variant = "default",
  clasesName,
}: ContactButtonsProps) => {
  return (
    <>
      <Button
        variant={variant}
        size="icon"
        className={clasesName}
        onClick={() => openNewTab(profile.github)}
      >
        <Github className="w-5 h-5" />
      </Button>
      <Button
        variant={variant}
        size="icon"
        className={clasesName}
        onClick={() => openNewTab(profile.linkedin)}
      >
        <Linkedin className="w-5 h-5" />
      </Button>
      <Button
        onClick={() => openNewTab(`mailto:${profile.email}`)}
        variant={variant}
        size="icon"
        className={clasesName}
      >
        <Mail className="w-5 h-5" />
      </Button>
    </>
  );
};

export default ContactButtons;
