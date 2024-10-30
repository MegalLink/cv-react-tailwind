import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import {
  FaHome,
  FaUserAlt,
  FaGraduationCap,
  FaBriefcase,
  FaChevronCircleRight,
  FaChevronCircleLeft,
} from 'react-icons/fa'
import { DarkModeController } from '../DarkModeController/DarkModeController'

export const Navbar = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const rutas = [
    { path: '/', name: 'Inicio', icon: <FaHome /> },
    { path: '/about', name: 'Sobre mi', icon: <FaUserAlt /> },
    { path: '/resume', name: 'Resumen', icon: <FaGraduationCap /> },
    { path: '/portfolio', name: 'Certificados', icon: <FaBriefcase /> },
  ]

  const goNext = () => {
    const currentIndex = rutas.findIndex(ruta => ruta.path === location.pathname)
    const nextIndex = (currentIndex + 1) % rutas.length
    navigate(rutas[nextIndex].path)
  }

  const goBack = () => {
    const currentIndex = rutas.findIndex(ruta => ruta.path === location.pathname)
    const previousIndex = (currentIndex - 1 + rutas.length) % rutas.length
    navigate(rutas[previousIndex].path)
  }

  return (
    <div className="text-textLight dark:text-textDark bg-bgLigth dark:bg-bgDark sm:rounded-3xl sm:p-2 sm:h-full shadow-2xl">
      <ul className="list-none p-4 flex flex-row justify-around sm:flex-col sm:items-center sm:h-full ">
        <DarkModeController />
        {rutas.map(ruta => (
          <Link
            key={ruta.path}
            to={ruta.path}
            className={`group hover:text-primary dark:hover:bg-primaryDark ${
              location.pathname === ruta.path ? 'text-primary dark:text-primaryDark' : ''
            }`}
          >
            <span className="absolute text-white bottom-12 bg-primary dark:bg-primaryDark p-2 rounded hidden group-hover:block sm:bottom-auto sm:p-2 sm:right-16">
              {ruta.name}
            </span>
            <div className="text-2xl">{ruta.icon}</div>
          </Link>
        ))}
        <div className="cursor-pointer" onClick={goBack}>
          <FaChevronCircleLeft className="text-2xl" />
        </div>
        <div className="cursor-pointer" onClick={goNext}>
          <FaChevronCircleRight className="text-2xl" />
        </div>
      </ul>
    </div>
  )
}
