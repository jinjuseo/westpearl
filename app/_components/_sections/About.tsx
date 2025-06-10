"use client";
import { motion, MotionValue } from "framer-motion";
import { Code, Palette } from "lucide-react";

interface Props {
  y: MotionValue<string>;
}
const About = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-900 h-screen">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-violet-500 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl flex items-center justify-center">
                <Palette className="w-32 h-32 text-blue-600/50" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                <Code className="w-12 h-12 text-white" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold">안녕하세요! 👋</h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              5년 경력의 프론트엔드 개발자로, 사용자 경험을 최우선으로 생각하며
              아름답고 기능적인 웹 애플리케이션을 만들어왔습니다.
            </p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              React, Next.js, TypeScript를 주력으로 하며, 최신 웹 기술과 디자인
              트렌드를 적극적으로 학습하고 적용합니다.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="text-center p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                <div className="text-2xl font-bold text-pink-500">50+</div>
                <div className="text-sm text-slate-600 dark:text-slate-300">
                  완료 프로젝트
                </div>
              </div>
              <div className="text-center p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">5년</div>
                <div className="text-sm text-slate-600 dark:text-slate-300">
                  개발 경력
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
