import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Card = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div layout transition={{
            layout: {
                duration: .5
            }
        }}>
            <div className="max-w-md w-fit p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" onClick={() => setIsOpen(!isOpen)}>
                <a href="#">
                    <motion.h5 layout = "position" className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Hello</motion.h5>
                </a>
                {isOpen &&  
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400" layout>
                        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi necessitatibus repellat id provident, atque, ipsam praesentium vero eius distinctio perspiciatis placeat ea vel consequuntur cum neque, harum sed soluta aut.
                    </p>
                }
            </div>
        </motion.div>
    )
}

export default Card
