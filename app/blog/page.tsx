"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Calendar, Clock, Search } from "lucide-react"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getBlogPosts, getBlogPostsByCategory } from "@/lib/blog-data"
import type { BlogCategory } from "@/types/blog"

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState<BlogCategory>("all")

  const allPosts = getBlogPosts()
  const filteredPosts = getBlogPostsByCategory(activeCategory).filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const categoryCount = {
    all: allPosts.length,
    troubleshooting: allPosts.filter((post) => post.category === "troubleshooting").length,
    daily: allPosts.filter((post) => post.category === "daily").length,
    development: allPosts.filter((post) => post.category === "development").length,
    design: allPosts.filter((post) => post.category === "design").length,
  }

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 pt-24 pb-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            개발 트러블슈팅, 일상 이야기, 그리고 기술 관련 글을 공유합니다.
          </p>
        </motion.div>

        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
            <Input
              placeholder="블로그 포스트 검색..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <Tabs defaultValue="all" className="mb-12" onValueChange={(value) => setActiveCategory(value as BlogCategory)}>
          <TabsList className="grid grid-cols-5 mb-8">
            <TabsTrigger value="all">
              전체{" "}
              <Badge variant="outline" className="ml-2">
                {categoryCount.all}
              </Badge>
            </TabsTrigger>
            <TabsTrigger value="troubleshooting">
              트러블슈팅{" "}
              <Badge variant="outline" className="ml-2">
                {categoryCount.troubleshooting}
              </Badge>
            </TabsTrigger>
            <TabsTrigger value="daily">
              일상{" "}
              <Badge variant="outline" className="ml-2">
                {categoryCount.daily}
              </Badge>
            </TabsTrigger>
            <TabsTrigger value="development">
              개발{" "}
              <Badge variant="outline" className="ml-2">
                {categoryCount.development}
              </Badge>
            </TabsTrigger>
            <TabsTrigger value="design">
              디자인{" "}
              <Badge variant="outline" className="ml-2">
                {categoryCount.design}
              </Badge>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-0">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <BlogPostCard key={post.id} post={post} index={index} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="troubleshooting" className="mt-0">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <BlogPostCard key={post.id} post={post} index={index} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="daily" className="mt-0">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <BlogPostCard key={post.id} post={post} index={index} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="development" className="mt-0">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <BlogPostCard key={post.id} post={post} index={index} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="design" className="mt-0">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <BlogPostCard key={post.id} post={post} index={index} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

interface BlogPostCardProps {
  post: ReturnType<typeof getBlogPosts>[0]
  index: number
}

function BlogPostCard({ post, index }: BlogPostCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/blog/${post.slug}`} className="block h-full">
        <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <div className="relative h-48 overflow-hidden">
            <img
              src={post.coverImage || "/placeholder.svg"}
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
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
  )
}
