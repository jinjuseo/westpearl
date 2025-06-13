"use client";
import { motion } from "framer-motion";
import { Mail, Smartphone, MapPin } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { onClickCopy, openNewTab, toastify } from "@/utils/common";
import { useForm, ValidationError } from "@formspree/react";
import { useEffect, useState } from "react";
import { profile } from "@/const/profile";
import ContactButtons from "@/components/contact-buttons";

const Contact = () => {
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
                      {profile.email}
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
                      {profile.phone}
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
                      {profile.location}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-4">소셜 미디어</h4>
              <div className="flex space-x-4">
                <ContactButtons variant="outline" clasesName="rounded-full" />
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

              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mpwrdkjb");
  const [form, setForm] = useState({
    name: "",
    email: "",
    title: "",
    message: "",
  });
  useEffect(() => {
    onSubmit();
  }, [state.succeeded, state.errors]);
  const onSubmit = () => {
    if (state.succeeded) {
      toastify("메세지가 전송되었습니다.");
      setForm({
        name: "",
        email: "",
        title: "",
        message: "",
      });
    } else if (state.errors) {
      toastify("메세지 전송에 실패했습니다. 다시 시도해주세요.");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium mb-2 block">이름</label>
          <input
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            value={form.name}
            required
            type="text"
            id="name"
            name="name"
            className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-800"
            placeholder="홍길동"
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>
        <div>
          <label className="text-sm font-medium mb-2 block">이메일</label>
          <input
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            value={form.email}
            required
            id="email"
            name="email"
            type="email"
            className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-800"
            placeholder="hong@example.com"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
      </div>
      <div>
        <label className="text-sm font-medium mb-2 block">제목</label>
        <input
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          value={form.title}
          required
          id="title"
          name="title"
          type="text"
          className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-800"
          placeholder="제목"
        />
        <ValidationError prefix="Title" field="title" errors={state.errors} />
      </div>
      <div>
        <label className="text-sm font-medium mb-2 block">메시지</label>
        <textarea
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          required
          id="message"
          name="message"
          rows={4}
          className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-800"
          placeholder="메세지를 입력해주세요..."
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>
      <Button
        type="submit"
        disabled={state.submitting}
        onClick={onSubmit}
        className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-violet-500 hover:from-pink-600 hover:via-purple-600 hover:to-violet-600"
      >
        메시지 전송
      </Button>
    </form>
  );
};
