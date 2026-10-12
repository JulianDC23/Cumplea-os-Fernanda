import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import './Splash.css'
import imagentimer from '../../../public/images/timer imagen inicio invt.png'
import imagentimer2 from '../../../public/images/timer-sinfondo.png'


function Splash({ onFinish }) {
    useEffect(() => {
    const timer = setTimeout(() => onFinish(), 5000)
    return () => clearTimeout(timer)
  }, [onFinish])

  return (
    <motion.div
      className="splash"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      <motion.img
        src={imagentimer2}
        alt="Bienvenida"
        className="splash-img"
        initial={{ scale: 1.15, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.8, ease: 'easeOut' }}
      />
    </motion.div>
  )
}


export default Splash