import { motion } from 'framer-motion'
import './CaballitosBanner.css'
import caballitos from '../../assets/BannerCaballito.png'

function BannerCaballitos() {
  return (
    <section className="legend">
      <motion.img
        src={caballitos}
        alt="No Faltes"
        className="legend__img"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        draggable="false"
      />
    </section>
  )
}

export default BannerCaballitos