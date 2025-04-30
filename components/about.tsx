"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="about" ref={ref} className="py-20 md:py-32 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video autoPlay loop muted playsInline className="absolute w-full h-full object-cover opacity-20">
          <source src="/about-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square overflow-hidden rounded-2xl border-8 border-background shadow-xl">
              <Image
                src="/Pic.jpg?height=600&width=600"
                alt="Profile"
                width={600}
                height={600}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-transparent opacity-60" />
            </div>
            <div className="absolute -bottom-6 -right-6 h-24 w-24 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 20,
                  ease: "linear",
                }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <svg viewBox="0 0 100 100" className="w-full h-full fill-none">
                  <path d="M 50 0 A 50 50 0 1 1 49.999 0" id="circle" stroke="currentColor" strokeWidth="0.5" />
                  <text className="text-[8px]">
                    <textPath href="#circle" startOffset="0%">
                      CREATIVE DEVELOPER • CREATIVE DEVELOPER •
                    </textPath>
                  </text>
                </svg>
              </motion.div>
              <span className="text-xl">Fresher</span>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-4">
              A passionate <span className="text-primary">Frontend Developer</span> based in Chennai
            </h3>
            <p className="text-muted-foreground mb-6">
              I'm a creative developer with a passion for building beautiful, functional, and user-friendly websites and
              applications. With a strong foundation in design principles and modern development technologies, I strive
              to create engaging digital experiences that leave a lasting impression.
            </p>
            <p className="text-muted-foreground mb-6">
              My journey in web development began during my studies, where I discovered my passion for combining
              creative design with technical problem-solving. Since then, I've been constantly learning and improving my
              skills to stay at the forefront of web development trends and technologies.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <h4 className="font-semibold mb-2">Name:</h4>
                <p className="text-muted-foreground">Karthik M</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Email:</h4>
                <p className="text-muted-foreground">forkarthikm@gmail.com</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Location:</h4>
                <p className="text-muted-foreground">Chennai, India</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Availability:</h4>
                <p className="text-muted-foreground">Immediately</p>
              </div>
            </div>

            <a href="/CV.pdf" download>
            <Button className="rounded-full gap-2 flex items-center">
            <Download className="h-4 w-4" />
            Download CV
            </Button>
            </a>

          </motion.div>
        </div>
      </div>
    </section>
  )
}
