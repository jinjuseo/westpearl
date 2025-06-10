"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Calendar, Clock, Share2, Bookmark, MessageSquare } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { getBlogPostBySlug, getRecentBlogPosts } from "@/lib/blog-data"
import { parseMarkdown } from "@/lib/markdown-parser"

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const router = useRouter()
  const post = getBlogPostBySlug(params.slug)
  const recentPosts = getRecentBlogPosts(3).filter((p) => p.slug !== params.slug)

  useEffect(() => {
    if (!post) {
      router.push("/blog")
    }
  }, [post, router])

  if (!post) {
    return (
      <div className="min-h-screen bg-white dark:bg-slate-900 pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">포스트를 찾을 수 없습니다</h1>
            <Link href="/blog">
              <Button>블로그로 돌아가기</Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  const parsedContent = parseMarkdown(post.content)

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link href="/blog">
              <Button variant="ghost" className="mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>
            </Link>

            <Badge
              className={`
              mb-4
              ${post.category === "troubleshooting" ? "bg-red-500" : ""}
              ${post.category === "daily" ? "bg-green-500" : ""}
              ${post.category === "development" ? "bg-blue-500" : ""}
              ${post.category === "design" ? "bg-purple-500" : ""}
            `}
            >
              {post.category}
            </Badge>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>

            <div className="flex items-center text-slate-500 mb-8">
              <div className="flex items-center mr-4">
                <Calendar className="w-4 h-4 mr-1" />
                {post.date}
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                {post.readingTime}
              </div>
            </div>

            <div className="relative h-80 md:h-96 rounded-xl overflow-hidden mb-8">
              <img
                src={post.coverImage || "/placeholder.svg"}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
            <div
              className="prose prose-lg dark:prose-invert max-w-none mb-12 text-slate-800 dark:text-slate-200"
              dangerouslySetInnerHTML={{ __html: parsedContent }}
            />

            <div className="flex justify-between items-center mb-12">
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
                <Button variant="outline" size="sm">
                  <Bookmark className="w-4 h-4 mr-2" />
                  Save
                </Button>
              </div>

              <Button>
                <MessageSquare className="w-4 h-4 mr-2" />
                Leave a Comment
              </Button>
            </div>

            <Separator className="mb-12" />

            {recentPosts.length > 0 && (
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Recent Posts</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {recentPosts.map((recentPost) => (
                    <Link href={`/blog/${recentPost.slug}`} key={recentPost.id}>
                      <Card className="h-full hover:shadow-md transition-shadow duration-300">
                        <div className="h-40 overflow-hidden">
                          <img
                            src={recentPost.coverImage || "/placeholder.svg"}
                            alt={recentPost.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <CardContent className="pt-4">
                          <h3 className="font-bold mb-2 line-clamp-2">{recentPost.title}</h3>
                          <p className="text-sm text-slate-500">{recentPost.date}</p>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
