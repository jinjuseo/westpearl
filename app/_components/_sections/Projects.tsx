"use client";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { ExternalLink, Github, Star } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-violet-500 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "E-Commerce Platform",
              description:
                "React와 Next.js로 구축한 현대적인 전자상거래 플랫폼",
              image: "/placeholder.svg?height=200&width=300",
              tags: ["React", "Next.js", "Stripe", "Tailwind"],
              github: "#",
              demo: "#",
            },
            {
              title: "Task Management App",
              description: "팀 협업을 위한 직관적인 작업 관리 애플리케이션",
              image: "/placeholder.svg?height=200&width=300",
              tags: ["React", "TypeScript", "Firebase", "Material-UI"],
              github: "#",
              demo: "#",
            },
            {
              title: "Weather Dashboard",
              description: "실시간 날씨 정보와 예보를 제공하는 대시보드",
              image: "/placeholder.svg?height=200&width=300",
              tags: ["Vue.js", "Chart.js", "OpenWeather API"],
              github: "#",
              demo: "#",
            },
            {
              title: "Portfolio Website",
              description: "반응형 디자인의 개인 포트폴리오 웹사이트",
              image: "/placeholder.svg?height=200&width=300",
              tags: ["Next.js", "Framer Motion", "Tailwind"],
              github: "#",
              demo: "#",
            },
            {
              title: "Social Media App",
              description: "실시간 채팅과 피드 기능을 가진 소셜 미디어 앱",
              image: "/placeholder.svg?height=200&width=300",
              tags: ["React Native", "Socket.io", "Node.js"],
              github: "#",
              demo: "#",
            },
            {
              title: "Learning Platform",
              description: "온라인 강의와 퀴즈 기능을 제공하는 학습 플랫폼",
              image: "/placeholder.svg?height=200&width=300",
              tags: ["React", "Redux", "Express", "MongoDB"],
              github: "#",
              demo: "#",
            },
          ].map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full group hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <div className="flex space-x-2">
                      <Button size="sm" variant="secondary">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                      <Button size="sm" variant="secondary">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </Button>
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {project.title}
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
