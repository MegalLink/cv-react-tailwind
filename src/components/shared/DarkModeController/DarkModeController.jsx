import { FaSun, FaMoon } from 'react-icons/fa'
import { useThemeStore } from '../../../store/store'

export const DarkModeController = () => {
  const { darkMode, changeMode } = useThemeStore(state => state)
  return (
    <button
      onClick={changeMode}
      className="p-2 absolute bottom-20 right-10 dark:bg-primaryDark bg-bgDark rounded-full sm:static"
    >
      {darkMode ? <FaSun className="text-white  w-6 h-6" /> : <FaMoon className="text-white w-6 h-6" />}
    </button>
  )
}
