"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Code, Figma, Layers, Palette, Smartphone, Sparkles } from "lucide-react"

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  const skills = [
    {
      name: "Frontend Development",
      icon: Code,
      description: "Building responsive and interactive user interfaces using modern frameworks and libraries.",
      technologies: ["HTML", "CSS", "JavaScript", "React", "Next.js","BootStrap"],
    },
    {
      name: "MySQL",
      icon: Figma,
      description: "MySQL is an open-source relational database management system used to store, manage, and query structured data efficiently.",
      technologies: ["SQL", "Java"],
    },
    {
      name: "Unity",
      icon: Sparkles,
      description: "Unity is a powerful cross-platform game engine used to create 2D, 3D, AR, and VR experiences with real-time rendering.",
      technologies: ["Unity Editor", "GameObjects", "Components", "UI Basics", "Animation"],
    },
    
  ]

  return (
    <section id="skills" ref={ref} className="py-20 md:py-32 relative overflow-hidden">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6" />
          <p className="max-w-2xl mx-auto text-muted-foreground">
            I've developed a diverse set of skills to create engaging and functional digital experiences. Here's what I
            bring to the table:
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-card border border-border p-6 rounded-xl hover:border-primary/50 transition-colors group"
            >
              <div className="mb-4 p-3 rounded-lg bg-primary/10 w-fit">
                <skill.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{skill.name}</h3>
              <p className="text-muted-foreground mb-4">{skill.description}</p>
              <div className="flex flex-wrap gap-2">
                {skill.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="px-3 py-1 bg-muted text-xs rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
