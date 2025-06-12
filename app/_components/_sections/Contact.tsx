"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { Github, Linkedin, Mail, Smartphone, MapPin } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";
import { onClickCopy, openNewTab, toastify } from "@/utils/common";
const Contact = () => {
  const onSubmit = () => {
    toastify("메세지가 전송되었습니다.");
  };

  return (
    <section
      id="contact"
      className="py-24 bg-slate-50 dark:bg-slate-900 min-h-screen"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Contact</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-violet-500 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            새로운 프로젝트나 협업 기회에 대해 이야기하고 싶으시다면 언제든
            연락주세요!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">연락처 정보</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-medium">이메일</div>
                    <div
                      onClick={() => onClickCopy("wjbbdq1223@naver.com")}
                      className="text-slate-600 dark:text-slate-300 hover:underline cursor-pointer"
                    >
                      wjbbdq1223@naver.com
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                    <Smartphone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-medium">전화번호</div>
                    <div
                      onClick={() => onClickCopy("+82 10-9533-7164")}
                      className="text-slate-600 dark:text-slate-300 hover:underline cursor-pointer"
                    >
                      +82 10-9533-7164
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-medium">위치</div>
                    <div className="text-slate-600 dark:text-slate-300">
                      서울, 대한민국
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-4">소셜 미디어</h4>
              <div className="flex space-x-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full"
                  onClick={() => openNewTab("https://github.com/jinjuseo")}
                >
                  <Github className="w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full"
                  onClick={() =>
                    openNewTab(
                      "https://www.linkedin.com/in/jinju-seo-0b0bba272/"
                    )
                  }
                >
                  <Linkedin className="w-5 h-5" />
                </Button>
                <Button
                  onClick={() => openNewTab("mailto:wjbbdq1223@naver.com")}
                  variant="outline"
                  size="icon"
                  className="rounded-full"
                >
                  <Mail className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle>연락하기 </CardTitle>
                <CardDescription>
                  궁금하신 점이 있다면 편하게 연락 주세요.
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      이름
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-800"
                      placeholder="홍길동"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      이메일
                    </label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-800"
                      placeholder="hong@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">제목</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-800"
                    placeholder="제목"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    메시지
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-800"
                    placeholder="메세지를 입력해주세요..."
                  />
                </div>
                <Button
                  type="submit"
                  onClick={() => toastify("준비중입니다...")}
                  className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-violet-500 hover:from-pink-600 hover:via-purple-600 hover:to-violet-600"
                >
                  메시지 전송
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
