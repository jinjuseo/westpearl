"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Palette,
  Smartphone,
  Globe,
  Download,
  ChevronDown,
  Star,
  Calendar,
  MapPin,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Progress } from "@/components/ui/progress"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "experience", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-200 dark:border-slate-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-violet-500 bg-clip-text text-transparent"
            >
              Portfolio
            </motion.div>
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex space-x-8">
                {["home", "about", "skills", "projects", "experience", "contact"].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`capitalize transition-colors ${
                      activeSection === section
                        ? "text-pink-500 dark:text-pink-400"
                        : "text-slate-600 dark:text-slate-300 hover:text-pink-500 dark:hover:text-pink-400"
                    }`}
                  >
                    {section}
                  </button>
                ))}
              </div>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-pink-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"></div>
        </motion.div>

        <div className="container mx-auto px-4 text-center z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-violet-500 p-1">
              <div className="w-full h-full rounded-full bg-white dark:bg-slate-900 flex items-center justify-center">
                <Code className="w-16 h-16 text-pink-500" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-violet-600 bg-clip-text text-transparent">
                Frontend Developer
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
              창의적이고 사용자 중심의 웹 경험을 만드는 프론트엔드 개발자입니다.
              <br />
              React, Next.js, TypeScript로 혁신적인 솔루션을 구현합니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-pink-500 via-purple-500 to-violet-500 hover:from-pink-600 hover:via-purple-600 hover:to-violet-600"
              >
                <Mail className="w-5 h-5 mr-2" />
                연락하기
              </Button>
              <Button size="lg" variant="outline">
                <Download className="w-5 h-5 mr-2" />
                이력서 다운로드
              </Button>
            </div>
            <div className="flex justify-center space-x-6">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Github className="w-6 h-6" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Linkedin className="w-6 h-6" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Mail className="w-6 h-6" />
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-8 h-8 text-slate-400" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-slate-900">
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
                5년 경력의 프론트엔드 개발자로, 사용자 경험을 최우선으로 생각하며 아름답고 기능적인 웹 애플리케이션을
                만들어왔습니다.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                React, Next.js, TypeScript를 주력으로 하며, 최신 웹 기술과 디자인 트렌드를 적극적으로 학습하고
                적용합니다.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="text-center p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                  <div className="text-2xl font-bold text-pink-500">50+</div>
                  <div className="text-sm text-slate-600 dark:text-slate-300">완료 프로젝트</div>
                </div>
                <div className="text-center p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">5년</div>
                  <div className="text-sm text-slate-600 dark:text-slate-300">개발 경력</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Skills</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-violet-500 mx-auto mb-8"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center">
                    <Code className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle>Frontend</CardTitle>
                  <CardDescription>사용자 인터페이스 개발</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { name: "React", level: 95 },
                    { name: "Next.js", level: 90 },
                    { name: "TypeScript", level: 88 },
                    { name: "Tailwind CSS", level: 92 },
                  ].map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-slate-500">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-violet-600 rounded-full flex items-center justify-center">
                    <Palette className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle>Design</CardTitle>
                  <CardDescription>UI/UX 디자인 및 도구</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { name: "Figma", level: 85 },
                    { name: "Adobe XD", level: 80 },
                    { name: "Photoshop", level: 75 },
                    { name: "Illustrator", level: 70 },
                  ].map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-slate-500">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle>Tools</CardTitle>
                  <CardDescription>개발 도구 및 플랫폼</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { name: "Git", level: 90 },
                    { name: "Webpack", level: 82 },
                    { name: "Docker", level: 75 },
                    { name: "AWS", level: 70 },
                  ].map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-slate-500">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white dark:bg-slate-900">
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
                description: "React와 Next.js로 구축한 현대적인 전자상거래 플랫폼",
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
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
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

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-800">
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
                  description: "React와 Next.js를 활용한 대규모 웹 애플리케이션 개발 및 팀 리딩",
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
                      <p className="text-slate-600 dark:text-slate-300 mb-4">{exp.description}</p>
                      <div className="space-y-2">
                        <h4 className="font-medium text-sm">주요 성과:</h4>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="text-sm text-slate-600 dark:text-slate-300 flex items-start">
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

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white dark:bg-slate-900">
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
              새로운 프로젝트나 협업 기회에 대해 이야기하고 싶으시다면 언제든 연락주세요!
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
                      <div className="text-slate-600 dark:text-slate-300">contact@example.com</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                      <Smartphone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-medium">전화번호</div>
                      <div className="text-slate-600 dark:text-slate-300">+82 10-1234-5678</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-medium">위치</div>
                      <div className="text-slate-600 dark:text-slate-300">서울, 대한민국</div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-4">소셜 미디어</h4>
                <div className="flex space-x-4">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Github className="w-5 h-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Linkedin className="w-5 h-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
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
                  <CardTitle>메시지 보내기</CardTitle>
                  <CardDescription>프로젝트에 대해 자세히 알려주세요</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">이름</label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-800"
                        placeholder="홍길동"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">이메일</label>
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
                      placeholder="프로젝트 협업 제안"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">메시지</label>
                    <textarea
                      rows={4}
                      className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-800"
                      placeholder="프로젝트에 대해 자세히 설명해주세요..."
                    />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-violet-500 hover:from-pink-600 hover:via-purple-600 hover:to-violet-600">
                    메시지 전송
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Portfolio
            </div>
            <p className="text-slate-400 mb-6">창의적이고 혁신적인 웹 솔루션을 만들어갑니다.</p>
            <Separator className="my-6" />
            <div className="flex justify-center space-x-6 mb-6">
              <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white">
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white">
                <Mail className="w-5 h-5" />
              </Button>
            </div>
            <p className="text-slate-500 text-sm">© 2024 Portfolio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
