import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import MainLayout from './components/MainLayout'

import Home from './pages/home'
import Team from './pages/team'
import Projects from './pages/projects'
import Services from './pages/services'
import Contact from './pages/contact'

import TeamSingle from './pages/teamSingle'
import ServiceSingle from './pages/serviceSingle'
import ProjectSingle from './pages/projectSingle'


const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout/>,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: 'team',
        element: <Team/>,
        children: [
          {
            path: ':memberId',
            element: <TeamSingle/>
          }
        ]
      },
      {
        path: 'services',
        element: <Services/>,
        children: [
          {
            path: ':serviceId',
            element: <ServiceSingle/>
          }
        ]
      },
      {
        path: 'projects',
        element: <Projects/>,
        children: [
          {
            path: ':projectId',
            element: <ProjectSingle/>
          }
        ]
      },
      {
        path: 'contact',
        element: <Contact/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
