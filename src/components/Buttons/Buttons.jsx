import { motion } from 'framer-motion'
import './Buttons.css'

function LocationButtons() {
  return (
    <section className="location">
      <div className="location__grid">

        {/* Botón de la ceremonia */}
        <motion.a
          href="https://www.google.com/maps/@19.2303101,-98.8103623,2304a,90y,152.55h,98.48t/data=!3m7!1e1!3m5!1skmdgDyXPF8gVqS-HQ1S2hA!2e0!6shttps:%2F%2Fstreetviewpixels-pa.clients6.google.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-8.481557970795649%26panoid%3DkmdgDyXPF8gVqS-HQ1S2hA%26yaw%3D152.55447002312832!7i16384!8i8192?entry=ttu&g_ep=EgoyMDI2MTAwNy4wIKXMDSoASAFQAw%3D%3D"
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
          href="https://www.google.com/maps/place/Cocina+%22Las+delicias%22+de+Miraflores/@19.226973,-98.81129,2330a,75y,81.94h,78.27t/data=!3m7!1e1!3m5!1shv_rCPZqullj0-LTRm7wjA!2e0!6shttps:%2F%2Fstreetviewpixels-pa.clients6.google.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D11.730000000000004%26panoid%3Dhv_rCPZqullj0-LTRm7wjA%26yaw%3D81.94!7i16384!8i8192!4m7!3m6!1s0x85ce23006b186c87:0x6e0beca008006a2a!8m2!3d19.2269835!4d-98.8112084!10e5!16s%2Fg%2F11mslzbk54?entry=ttu&g_ep=EgoyMDI2MTAwNy4wIKXMDSoASAFQAw%3D%3D"
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