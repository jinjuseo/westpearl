"use client";
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { openNewTab } from "@/utils/common";
const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Jinju Seo | Portfolio
          </div>
          <p className="text-slate-400 mb-6">즐거운 일을 추구합니다.</p>
          <Separator className="my-6" />
          <div className="flex justify-center space-x-6 mb-6">
            <Button
              onClick={() => openNewTab("https://github.com/jinjuseo")}
              variant="ghost"
              size="icon"
              className="text-slate-400 hover:text-white"
            >
              <Github className="w-5 h-5" />
            </Button>
            <Button
              onClick={() =>
                openNewTab("https://www.linkedin.com/in/jinju-seo-0b0bba272/")
              }
              variant="ghost"
              size="icon"
              className="text-slate-400 hover:text-white"
            >
              <Linkedin className="w-5 h-5" />
            </Button>
            <Button
              onClick={() => openNewTab("mailto:wjbbdq1223@naver.com")}
              variant="ghost"
              size="icon"
              className="text-slate-400 hover:text-white"
            >
              <Mail className="w-5 h-5" />
            </Button>
          </div>
          <p className="text-slate-500 text-sm\">
            © 2025 Jinju Seo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
