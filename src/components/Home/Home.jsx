import { motion } from 'framer-motion'
import './Home.css'
import invitation from '../../assets/mis3años.svg'
import invitation1 from '../../assets/imageprueba.png'
import Countdown from '../Countdown/Countdown'
import Legend from '../Legend/Legends'
import LocationButtons from '../Buttons/Buttons'
import BannerFamilia from '../Banner/BannerFamilia'
import Sites from '../Sites/Sites'

function Home() {
  return (
   <>
     <main className="home">
      <section className="hero">
        <motion.img
          src={invitation1}
          alt="Invitación Mis 3 años Fernanda Zoe"
          className="hero-img"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
      </section>
      <Legend />
      <Countdown />
      <BannerFamilia />
      <Sites />
      <LocationButtons />
    </main>
   </>
  )
}

export default Home