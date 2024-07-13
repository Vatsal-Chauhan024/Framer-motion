import React from 'react'
import { motion, useAnimation } from 'framer-motion'

const ButtonArray = [
    {
        item: "Right",
        animationItem: {
            x: "20rem",
            transition: { duration: 2 }
        }
    },
    {
        item: "Left",
        animationItem: {
            x: 0,
            transition: { duration: 2 }
        }
    },
    {
        item: "Round",
        animationItem: {
            borderRadius: "50%",
            transition: { duration: 2 }
        }
    },
    {
        item: "Square",
        animationItem: {
            borderRadius: "20%",
            transition: { duration: 2 }
        }
    },
    {
        item: "Square",
    }
]

const Box5 = () => {

    const control = useAnimation()

    const startAnimation = (animationProps) => {
        if(animationProps){
            control.start(animationProps)
        }
        else{
            control.stop()
        }
    }

    return (
        <>
            <div className='flex items-center gap-4 mt-20'>
                {
                    ButtonArray.map((element, key) => (
                        <button
                            key={key}
                            className='bg-indigo-500 text-white w-20 py-2 hover:bg-indigo-700 rounded-md text-base'
                            onClick={() => startAnimation(element?.animationItem)}
                        >
                            {element.item}
                        </button>
                    ))
                }
            </div>
            <motion.div
                className='w-64 aspect-square bg-green-300'
                animate={control}
            >
            </motion.div>
        </>
    )
}

export default Box5
