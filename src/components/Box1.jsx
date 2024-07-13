import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Box1 = () => {

  const [isAnimating, setIsAnimating] = useState(false)

  return (
    <motion.div className='w-64 aspect-square bg-green-300'
    
    animate = {{
      x: isAnimating ? "60rem": 0,
      rotate: isAnimating ? 360 : 0,
      opacity: isAnimating ? 1: 0.5
    }}
    transition={{
      type: "spring",
      stiffness: 50
    }}
    onClick={() => setIsAnimating(!isAnimating)}
    >
    </motion.div>
  )
}

export default Box1
