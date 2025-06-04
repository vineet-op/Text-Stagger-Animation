"use client"

import { motion } from "motion/react"


function Home() {

  return (
    <section className='bg-lime-300 grid gap-5 h-screen w-screen place-content-center'>
      <Links href="#">Twitter</Links>
      <Links href="#">Instagram</Links>
      <Links href="#">WhatsApp</Links>
      <Links href="#">Facebook</Links>
    </section>
  )
}

const DURATION = 0.25
const STAGGER = 0.025

export const Links = ({ children, href }: {
  children: string,
  href: string
}) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      className="relative block overflow-hidden whitespace-nowrap text-4xl font-black uppercase sm:text-7xl
      md:text-8xl lg:text-8xl font-sans text-black"
      href={href}>

      <div>
        {children.split("").map((l, i) => (
          <motion.span
            className="inline-block"
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%"
              }
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i
            }}
            key={i}>{l}</motion.span>
        ))}
      </div>


      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            className="inline-block"
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: "0"
              },


            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i
            }} key={i}>{l}</motion.span>
        ))}
      </div>

    </motion.a>
  )
}


export default Home
