"use client";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { Mail, Download } from "lucide-react";

import { Button } from "@/components/ui/button";
import { downloadFile, openNewTab, toastify } from "@/utils/common";
import ContactButtons from "@/components/contact-buttons";
import { profile } from "@/const/profile";

const Home = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-pink-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"></div>
      </motion.div>

      <div className="container mx-auto px-4 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-40 h-40 mx-auto mb-8 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-violet-500 p-1">
            <div className="w-full h-full rounded-full bg-white dark:bg-slate-900 flex items-center justify-center">
              {/* <Code className="w-16 h-16 text-pink-500" /> */}
              <img
                className="size-full rounded-full"
                src={
                  "https://lh3.googleusercontent.com/d/1SoL2XfDaMptG0tQhGbPMewS7px6dN-EP"
                }
                alt={"westpearl"}
              />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-violet-600 bg-clip-text text-transparent">
              Frontend Developer
            </span>
          </h1>
          <div className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 max-w-4xl mx-auto min-h-20 break-words whitespace-pre-wrap">
            {
              "도전 속에서 재미를 찾고, 그 재미를 동력 삼아 몰입하는 프론트엔드 개발자입니다."
            }
            <br />
            {
              "새로운 기술이나 처음 접하는 문제를 마주할 때 가장 열정적으로 일할 수 있다고 믿으며, "
            }
            <strong className="break-words">
              지속적인 학습을 통해 다양한 기술 환경에서 적응하고 성장하고
              있습니다.
            </strong>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              onClick={() => openNewTab(`mailto:${profile.email}`)}
              size="lg"
              className="bg-gradient-to-r from-pink-500 via-purple-500 to-violet-500 hover:from-pink-600 hover:via-purple-600 hover:to-violet-600"
            >
              <Mail className="w-5 h-5 mr-2" />
              연락하기
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() =>
                downloadFile("/이력서_서진주.pdf", "[이력서] 서진주.pdf")
              }
            >
              <Download className="w-5 h-5 mr-2" />
              이력서 다운로드
            </Button>
          </div>
          <div className="flex justify-center space-x-6">
            <ContactButtons variant="ghost" clasesName="rounded-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
