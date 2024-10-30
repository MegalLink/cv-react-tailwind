import React from 'react'
import { FaGithub, FaCodepen, FaWhatsapp, FaBolt } from 'react-icons/fa'
import perfilImage from '../../../assets/images/perfil.png'

export const Profile = () => {
  const socialLinks = [
    { href: '#', icon: <FaGithub className="text-2xl" /> },
    { href: '#', icon: <FaCodepen className="text-2xl" /> },
    { href: '#', icon: <FaWhatsapp className="text-2xl" /> },
    { href: '#', icon: <FaBolt className="text-2xl" /> },
  ]

  return (
    <div className="bg-primary hidden lg:flex flex text-black rounded-2xl p-2 flex flex-col justify-center items-center">
      <img className="rounded-full w-48 bg-white" src={perfilImage} alt="Perfil" />
      <h2 className="mt-4 text-2xl font-bold text-white">Jeferson Narváez</h2>
      <p className="text-lg text-gray-200">Desarrollador Web</p>
      <ul className="flex justify-around h-10 w-full mt-4">
        {socialLinks.map((link, index) => (
          <li key={index} className="flex-1 flex justify-evenly items-center ">
            <a
              href={link.href}
              className="cursor-pointer text-center rounded-full transition duration-500 ease-in hover:bg-bgDark p-2 text-white"
            >
              {link.icon}
            </a>
          </li>
        ))}
      </ul>
      <button className="mt-4 p-2 bg-secondary text-white rounded-lg transition duration-500 ease-in hover:bg-secondary-dark">
        Descargar CV
      </button>
    </div>
  )
}
