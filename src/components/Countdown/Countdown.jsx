import { useEffect, useState } from 'react'
import './Countdown.css'
import timeFondos from '../../assets/timerevento.png'
import timeFondo from '../../assets/Component1.png'


// 🎂 Fecha objetivo: 14 Nov 2026 a medianoche (hora local)
const FECHA_EVENTO = new Date('2026-11-14T00:00:00')

function calcularTiempo(fechaObjetivo) {
  const ahora = new Date().getTime()
  const diferencia = fechaObjetivo.getTime() - ahora

  if (diferencia <= 0) {
    return { dias: 0, horas: 0, minutos: 0, segundos: 0, terminado: true }
  }

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24))
  const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24)
  const minutos = Math.floor((diferencia / (1000 * 60)) % 60)
  const segundos = Math.floor((diferencia / 1000) % 60)

  return { dias, horas, minutos, segundos, terminado: false }
}

function Countdown() {
  const [tiempo, setTiempo] = useState(() => calcularTiempo(FECHA_EVENTO))

  useEffect(() => {
    const intervalo = setInterval(() => {
      setTiempo(calcularTiempo(FECHA_EVENTO))
    }, 1000)

    return () => clearInterval(intervalo)
  }, [])

  const pad = (n) => String(n).padStart(2, '0')

  return (
    <section className="countdown">
      <div className="countdown__wrapper">
        <img
          src={timeFondo}
          alt="Cuenta regresiva"
          className="countdown__bg"
          draggable="false"
        />

        <div className="countdown__overlay">
          <div className="countdown__slot">
            <span className="countdown__num">{pad(tiempo.dias)}</span>
          </div>
          <div className="countdown__slot">
            <span className="countdown__num">{pad(tiempo.horas)}</span>
          </div>
          <div className="countdown__slot">
            <span className="countdown__num">{pad(tiempo.minutos)}</span>
          </div>
          <div className="countdown__slot">
            <span className="countdown__num">{pad(tiempo.segundos)}</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Countdown