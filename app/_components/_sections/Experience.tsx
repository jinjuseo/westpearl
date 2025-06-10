"use client";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-violet-500 mx-auto mb-8"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pink-500 via-purple-500 to-violet-500"></div>

            {[
              {
                title: "Senior Frontend Developer",
                company: "Tech Company A",
                period: "2022 - Present",
                location: "서울, 대한민국",
                description:
                  "React와 Next.js를 활용한 대규모 웹 애플리케이션 개발 및 팀 리딩",
                achievements: [
                  "사용자 경험 개선으로 전환율 25% 향상",
                  "코드 리뷰 프로세스 도입으로 버그 40% 감소",
                  "신입 개발자 3명 멘토링",
                ],
              },
              {
                title: "Frontend Developer",
                company: "Startup B",
                period: "2020 - 2022",
                location: "서울, 대한민국",
                description: "스타트업 환경에서 빠른 프로토타이핑과 MVP 개발",
                achievements: [
                  "0에서 시작하여 월 10만 사용자 달성",
                  "모바일 퍼스트 반응형 웹 구현",
                  "A/B 테스트를 통한 UI/UX 최적화",
                ],
              },
              {
                title: "Junior Frontend Developer",
                company: "Agency C",
                period: "2019 - 2020",
                location: "서울, 대한민국",
                description: "다양한 클라이언트 프로젝트 참여 및 웹사이트 구축",
                achievements: [
                  "20+ 클라이언트 웹사이트 개발",
                  "크로스 브라우저 호환성 확보",
                  "성능 최적화로 로딩 속도 50% 개선",
                ],
              },
            ].map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative pl-20 pb-12"
              >
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-pink-500 via-purple-500 to-violet-500 rounded-full border-4 border-white dark:border-slate-800"></div>
                <Card>
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <CardTitle className="text-xl">{exp.title}</CardTitle>
                        <CardDescription className="text-lg font-medium text-pink-500 dark:text-pink-400">
                          {exp.company}
                        </CardDescription>
                      </div>
                      <div className="flex flex-col md:items-end mt-2 md:mt-0">
                        <div className="flex items-center text-sm text-slate-500 mb-1">
                          <Calendar className="w-4 h-4 mr-1" />
                          {exp.period}
                        </div>
                        <div className="flex items-center text-sm text-slate-500">
                          <MapPin className="w-4 h-4 mr-1" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 dark:text-slate-300 mb-4">
                      {exp.description}
                    </p>
                    <div className="space-y-2">
                      <h4 className="font-medium text-sm">주요 성과:</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="text-sm text-slate-600 dark:text-slate-300 flex items-start"
                          >
                            <span className="w-1.5 h-1.5 bg-pink-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
