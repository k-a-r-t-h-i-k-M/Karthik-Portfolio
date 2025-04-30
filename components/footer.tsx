"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Github, Linkedin, Mail} from "lucide-react"
export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, href: "https://github.com/k-a-r-t-h-i-k-M", label: "GitHub" },
    { icon: Linkedin, href: "www.linkedin.com/in/forkarthikm", label: "LinkedIn" },
    { icon: Mail, href: "mailto:forkarthikm@gmail.com", label: "Email" },
  ]

  const footerLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <footer className="bg-muted/30 border-t border-border py-12 relative overflow-hidden">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video autoPlay loop muted playsInline className="absolute w-full h-full object-cover opacity-10">
          <source src="/footer-bg.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="container relative z-10">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-bold">
              <span className="text-primary">Portfolio </span>by karthik M
            </Link>
            <p className="text-muted-foreground">
              A creative developer passionate about building beautiful and functional websites. 
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5 }}
                    className="p-2 rounded-full bg-background border border-border hover:border-primary transition-colors"
                  >
                    <Icon className="h-4 w-4" />
                    <span className="sr-only">{social.label}</span>
                  </motion.a>
                )
              })}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <address className="not-italic space-y-2 text-muted-foreground">
              <p>Chennai, India</p>
              <p>
                <a href="mailto:fokarthikm@gmail.com" className="hover:text-primary transition-colors">
                 fokarthikm@gmail.com
                </a>
              </p>
              <p>
                <a href="tel:+91 9710627716" className="hover:text-primary transition-colors">
                  
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-muted-foreground">
          <p>
            © {currentYear} Karthik M. All rights reserved <span className="text-primary">♥</span> 
          </p>
        </div>
      </div>
    </footer>
  )
}
