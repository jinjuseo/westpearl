"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Calendar, Clock } from "lucide-react"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// 직접 데이터를 정의해서 import 문제를 피합니다
const samplePosts = [
  {
    id: "1",
    title: "Next.js 서버 컴포넌트에서 겪은 트러블슈팅",
    excerpt: "Next.js 13의 서버 컴포넌트를 사용하면서 겪었던 문제와 해결 방법에 대한 기록입니다.",
    coverImage: "/placeholder.svg?height=400&width=600",
    date: "2023-12-15",
    category: "troubleshooting",
    readingTime: "5 min read",
    slug: "nextjs-server-components-troubleshooting",
  },
  {
    id: "2",
    title: "프론트엔드 개발자의 하루",
    excerpt: "프론트엔드 개발자로서의 일상과 업무 루틴을 공유합니다.",
    coverImage: "/placeholder.svg?height=400&width=600",
    date: "2024-01-20",
    category: "daily",
    readingTime: "4 min read",
    slug: "frontend-developer-daily-routine",
  },
  {
    id: "3",
    title: "React Query로 상태 관리 최적화하기",
    excerpt: "React Query를 활용하여 API 통신과 상태 관리를 효율적으로 처리하는 방법을 소개합니다.",
    coverImage: "/placeholder.svg?height=400&width=600",
    date: "2024-02-05",
    category: "development",
    readingTime: "7 min read",
    slug: "react-query-state-management",
  },
]

export function BlogPreview() {
  const recentPosts = samplePosts.slice(0, 3)

  return (
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Blog</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-violet-500 mx-auto mb-8"></div>
        <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          개발 트러블슈팅, 일상 이야기, 그리고 기술 관련 글을 공유합니다.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {recentPosts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Link href={`/blog/${post.slug}`} className="block h-full">
              <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.coverImage || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge
                      className={`
                      ${post.category === "troubleshooting" ? "bg-red-500" : ""}
                      ${post.category === "daily" ? "bg-green-500" : ""}
                      ${post.category === "development" ? "bg-blue-500" : ""}
                      ${post.category === "design" ? "bg-purple-500" : ""}
                    `}
                    >
                      {post.category}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                  <CardDescription className="line-clamp-2">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-sm text-slate-500 space-x-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readingTime}
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="w-full">
                    Read More
                  </Button>
                </CardFooter>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="text-center">
        <Link href="/blog">
          <Button variant="outline" size="lg">
            모든 블로그 포스트 보기
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </Link>
      </div>
    </div>
  )
}
