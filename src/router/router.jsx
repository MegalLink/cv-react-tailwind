import { createBrowserRouter } from 'react-router-dom'
import { AboutView } from '../components/about/about'
import { HomeView } from '../components/home/home'
import { ResumeView } from '../components/resume/resume'
import { PortfolioView } from '../components/portfolio/portfolio'

export const ROUTER = createBrowserRouter([
  {
    path: '/',
    element: <HomeView />,
  },
  {
    path: '/about',
    element: <AboutView />,
  },
  {
    path: '/resume',
    element: <ResumeView />,
  },
  {
    path: '/portfolio',
    element: <PortfolioView />,
  },
])
