"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const [activeFilter, setActiveFilter] = useState("All")
  const filters = ["All", "Web", "Design", "Mobile"]

  const projects = [
    {
      title: "Skin Lession Recognition",
      description:
        "An intelligent system for skin lesion recognition uses machine learning algorithms to analyze images, detect abnormalities, classify lesions, and assist in early skin cancer diagnosis, improving accuracy and efficiency in healthcare.",
      image: "1.jpeg?height=600&width=600",
      tags: ["Python", "Tensor Flow", "Keras", "CNN"],
      category: "Web",
      github: "https://github.com/k-a-r-t-h-i-k-M",
    },
    {
      title: "Traffic light detection",
      description:
        "Led the development and implementation of traffic light negotiation algorithms and perception-based detection systems, enhancing the efficiency and safety of autonomous vehicle navigation.",
      image: "2.jpeg?height=600&width=600",
      tags: ["HSV", "Kmeans", "OpenCV", "Colab"],
      category: "Design",
      github: "https://github.com/k-a-r-t-h-i-k-M",
    },
    {
      title: "Portfolio Website",
      description: "I’m a dedicated and curious with a strong foundation in modern tools and best practices. I enjoy turning ideas into intuitive, efficient, and impactful digital solutions. Explore my work to see how I blend creativity with technical precision.",
      image: "3.jpeg?height=600&width=800",
      tags: ["Mobile", "React Native", "Firebase"],
      category: "Mobile",
      github: "https://github.com/k-a-r-t-h-i-k-M",
    },
  ]

  const filteredProjects = projects.filter((project) => activeFilter === "All" || project.category === activeFilter)

  return (
    <section id="projects" ref={ref} className="py-20 md:py-32 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video autoPlay loop muted playsInline className="absolute w-full h-full object-cover opacity-15">
          <source src="/projects-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6" />
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Here are some of my projects. Each project reflects my skills and passion for creating engaging
            digital experiences.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="flex flex-wrap gap-2 justify-center">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                onClick={() => setActiveFilter(filter)}
                className="rounded-full"
              >
                {filter}
              </Button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-card border border-border rounded-xl overflow-hidden group"
              >
                <div className="relative overflow-hidden aspect-video">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={800}
                    height={600}
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-background/20 backdrop-blur-sm p-3 rounded-full hover:bg-primary transition-colors"
                    >
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </motion.a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-3 py-1 bg-muted text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <Button asChild variant="outline" className="rounded-full">
            <Link href="https://github.com/k-a-r-t-h-i-k-M" target="_blank">
              View More on GitHub
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
