"use client"

import React, { use, useEffect, useRef, useState } from 'react'
import { data } from "./Data"
import { motion } from "motion/react"

interface Dataprops {
    title: string
    description: string
    image: string
    color: string
}

const useOutsideClick = (callback: () => void) => {

    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const HandleClick = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                callback();
            }
        }

        document.addEventListener("click", HandleClick)

        return () => {
            document.removeEventListener("click", HandleClick)
        }

    }, [callback])

    return ref
}

const Card = () => {

    const [current, setcurrent] = useState<Dataprops | null>(null)
    const ref = useOutsideClick(() => setcurrent(null))

    return (

        <div className='min-h-screen relative'>
            {current && <div className='fixed z-10 h-full inset-0 w-full bg-black/50 backdrop-blur-xs'></div>}
            {current && (
                <motion.div className="fixed z-20 inset-0 flex mt-10 justify-center ">
                    <motion.div ref={ref} layoutId={`item-${current.title}`}
                        style={{
                            backgroundColor: current.color
                        }}
                        className="w-80 h-80 bg-white rounded-lg shadow-lg p-10 flex flex-col items-center justify-center">
                        <motion.img layoutId={`image-${current.title}`} src={current.image} alt={current.title} className="w-40 h-40 object-contain p-2 rounded-2xl bg-amber-200" />
                        <motion.h2 layoutId={`title-${current.title}`} className="text-xl font-bold mt-4 text-white">{current.title}</motion.h2>
                        <motion.p layoutId={`description-${current.title}`} className="text-sm text-white text-center mt-2">{current.description}</motion.p>
                    </motion.div>
                </motion.div>
            )}

            <div className={`w-[40rem] flex flex-col mt-20 gap-5 ${current ? 'blur-xs' : ''}`}>
                {data.map((item: Dataprops, index: number) => (
                    <motion.button
                        layoutId={`item-${item.title}`}
                        onClick={() => setcurrent(item)}
                        key={index}
                        className='p-4 flex justify-between text-center w-full text-black bg-white rounded-2xl cursor-pointer shadow-md hover:shadow-lg transition-shadow duration-200'>
                        <div className='flex flex-col items-start justify-evenly'>
                            <motion.h2 layoutId={`title-${item.title}`} className='text-lg font-bold'>{item.title}</motion.h2>
                            <motion.p layoutId={`description-${item.title}`} className='text-md text-neutral-600 font-light'>{item.description}</motion.p>
                        </div>
                        <motion.img
                            layoutId={`image-${item.title}`}
                            src={item.image}
                            alt={item.title}
                            className='size-16 mt-2'
                        />
                    </motion.button>
                ))}
            </div>
        </div>
    )
}

export default Card