export type BlogCategory = "troubleshooting" | "daily" | "development" | "design" | "all"

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  coverImage: string
  date: string
  category: BlogCategory
  readingTime: string
  slug: string
}
