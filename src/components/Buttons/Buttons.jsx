import { motion } from 'framer-motion'
import './Buttons.css'

function LocationButtons() {
  return (
    <section className="location">
      <div className="location__grid">

        {/* Botón de la ceremonia */}
        <motion.a
          href="https://www.google.com/maps/place/Cda.+Emiliano+Zapata+7,+Pueblo+Nuevo,+56723+San+Rafael,+M%C3%A9x./@19.2059134,-98.7701474,2477a,87.4y,14.37h,70.65t/data=!3m7!1e1!3m5!1su2Kh3u72WLGNKJmQu05KPw!2e0!6shttps:%2F%2Fstreetviewpixels-pa.clients6.google.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D19.34754001860287%26panoid%3Du2Kh3u72WLGNKJmQu05KPw%26yaw%3D14.369811097277875!7i16384!8i8192!4m15!1m8!3m7!1s0x85ce230d2d096183:0x322596359abd72b6!2sCda.+Emiliano+Zapata+7,+Pueblo+Nuevo,+56723+San+Rafael,+M%C3%A9x.!3b1!8m2!3d19.2060519!4d-98.7703049!16s%2Fg%2F11wb1s57r4!3m5!1s0x85ce230d2d096183:0x322596359abd72b6!8m2!3d19.2060519!4d-98.7703049!16s%2Fg%2F11wb1s57r4?entry=ttu&g_ep=EgoyMDI2MTAwNy4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="location__btn"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
        >
          <svg
            className="location__icon"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              fill="currentColor"
              d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"
            />
          </svg>
          <span className="location__text">Ceremonia</span>
        </motion.a>

        {/* Botón de la recepción */}
        <motion.a
          href="https://www.google.com/maps/place/Campo+deportivo+San+Rafael/@19.2079896,-98.761475,17z/data=!3m1!4b1!4m6!3m5!1s0x85ce233544266309:0x9b6002586c064f49!8m2!3d19.2079896!4d-98.7589001!16s%2Fg%2F11l20qg92j?entry=ttu&g_ep=EgoyMDI2MTAwNy4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="location__btn"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
        >
          <svg
            className="location__icon"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              fill="currentColor"
              d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"
            />
          </svg>
          <span className="location__text">Recepción</span>
        </motion.a>

      </div>
    </section>
  )
}

export default LocationButtons