import { motion } from 'framer-motion'
import './BannerFamilia.css'
import bannerFamilia2 from '../../assets/BannerFam.png'
import bannerFamilia from '../../assets/BannerFam2.png'

function BannerFamilia() {
  return (
    <section className="banner-familia">
      <motion.img
        src={bannerFamilia}
        alt="Pápas y Padrinos de Fernanda Zoe"
        className="banner-familia__img"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        draggable="false"
      />
    </section>
  )
}

export default BannerFamilia