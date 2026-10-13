import { motion } from 'framer-motion'
import './Sites.css'
import bannerSites from '../../assets/Sites.png'

function Sites() {
  return (
    <section className="banner-sites">
      <motion.img
        src={bannerSites}
        alt="Pápas y Padrinos de Fernanda Zoe"
        className="banner-sites__img"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        draggable="false"
      />
    </section>
  )
}

export default Sites