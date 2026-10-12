import { motion } from 'framer-motion'
import './Legend.css'
import legenda from '../../assets/leyenda1.png'

function Legend() {
  return (
    <section className="legend">
      <motion.img
        src={legenda}
        alt="Falta poco para este gran día"
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

export default Legend