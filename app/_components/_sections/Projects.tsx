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
import { PROJECTS_DATA } from "@/const/projects";
import { openNewTab } from "@/utils/common";
import AutoCarousel from "@/components/ui/auto-carousel";

const Projects = () => {
  return (
    <section
      id="projects"
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-violet-500 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS_DATA.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full group hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  {/* <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  /> */}
                  <AutoCarousel images={project.images} title={project.title} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <div className="flex space-x-2">
                      <Button
                        size="sm"
                        variant="secondary"
                        disabled={
                          project.github === "private" || project.github === "#"
                        }
                        onClick={() => openNewTab(project.github)}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        {project.github === "private" ? "Private" : "Code"}
                      </Button>
                      {/* <Button size="sm" variant="secondary">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </Button> */}
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {project.title}
                    <div className="flex space-x-1">
                      {[...Array(project.star_rate)].map((_, i) => (
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
