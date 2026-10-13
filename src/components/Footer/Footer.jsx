import { motion } from 'framer-motion'
import './Footer.css'
import Footersalmo from '../../assets/footer.png'

function Footer() {
  return (
    <section className="banner-footer">
      <motion.img
        src={Footersalmo}
        alt="Salmo"
        className="banner-footer__img"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        draggable="false"
      />
    </section>
  )
}

export default Footer