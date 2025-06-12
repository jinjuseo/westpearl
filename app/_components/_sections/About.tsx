"use client";
import { motion, MotionValue } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="py-24 bg-white dark:bg-slate-900 min-h-screen"
    >
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

        <div className="grid md:grid-cols-[2fr_3fr] gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20  */}
            <div className="relative">
              <div className="w-full h-96 bg-transparent rounded-2xl flex items-center justify-center">
                {/* <Palette className="w-32 h-32 text-blue-600/50" /> */}
                <img
                  src={"/images/sjj.jpg"}
                  alt="jinjuseo"
                  className="rounded-md size-full object-cover "
                />
              </div>
              {/* <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                <Code className="w-12 h-12 text-white" />
              </div> */}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 break-words"
          >
            <h3 className="text-2xl font-bold">
              안녕하세요! 👋 프론트엔드 개발자 서진주입니다.
            </h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              6개월간의 프론트엔드 인턴 경험과 여러 개인 프로젝트를 통해,
              React/Next.js 기반의 웹 애플리케이션을 실제로 설계하고 구현해본
              경험이 있습니다. <br />
              사용자 경험을 중요하게 생각하며, UI의 디테일을 구현하는 과정에서
              끊임없이 고민하고 개선하는 것을 즐깁니다.
            </p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              항상 “왜 이렇게 만들었는가”를 스스로 되묻고, 기능성과 재사용성
              있는 코드를 작성하는 데 집중하고 있습니다.
              <br /> 실무에 가까운 개발 환경을 스스로 구성하며, 팀 협업 및 코드
              리뷰 문화에 빠르게 적응할 수 있는 개발자를 지향합니다.
            </p>
            {/* <section className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              <h2 className="text-xl font-semibold">자격증 및 어학</h2> 
              <ul className="list-disc ml-5">
                <li>
                  경북대학교 컴퓨터학부 글로벌sw융합전공 졸업 (2023.08.18)
                </li>
                <li>정보처리기사 (2024.06.18)</li>
                <li>TOEIC Speaking IH (2023.07.08)</li>
              </ul>
            </section> */}
            <div className="grid grid-cols-3 gap-4 pt-2">
              <div className="text-center p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                <div className="text-sm text-slate-600 dark:text-slate-300">
                  전공
                </div>
                <div className="text-lg font-bold text-pink-500">
                  경북대학교 <br />
                  컴퓨터학부 글로벌sw융합
                </div>
                <div className="text-xs text-pink-500">(2023.08.18)</div>
              </div>
              <div className="text-center p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                <div className="text-sm text-slate-600 dark:text-slate-300">
                  자격증
                </div>
                <div className="text-lg font-bold text-fuchsia-500">
                  정보처리기사
                </div>
                <div className="text-xs text-fuchsia-500">(2024.06.18)</div>
              </div>
              <div className="text-center p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                <div className="text-sm text-slate-600 dark:text-slate-300">
                  어학
                </div>
                <div className="text-lg font-bold text-purple-600">
                  TOEIC Speaking IH
                </div>

                <div className="text-xs text-purple-600">(2023.07.08)</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
