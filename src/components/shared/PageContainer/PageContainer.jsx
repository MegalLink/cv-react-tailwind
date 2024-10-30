import { Navbar } from '../Navbar/Navbar'
import { Profile } from '../Profile/Profile'

const PageContainer = ({ children }) => {
  return (
    <div className="w-full h-screen flex items-center bg-mainBgLigth dark:bg-mainBgDark">
      <div className="w-full sm:mx-4 h-full sm:h-4/5 flex justify-center">
        <Profile />
        <div className="flex-1 max-w-2xl sm:mx-4 sm:rounded-2xl text-textLight dark:text-textDark bg-bgLigth dark:bg-bgDark h-full p-6 shadow-2xl">
          {children}
        </div>
        <div className="self-center fixed bottom-0 w-full sm:static sm:w-auto sm:h-[50vh] sm:mr-4 sm:mx-2">
          <Navbar />
        </div>
      </div>
    </div>
  )
}

export default PageContainer
