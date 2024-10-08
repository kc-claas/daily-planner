import ReactDOM from 'react-dom/client';
import  { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './Index.css'

import App from './App.tsx'

import ErrorPage from './pages/ErrorPage.tsx';
import LandingPage from './pages/LandingPage.tsx';
import LoginPage from './pages/LoginPage.tsx';
import SignupPage from './pages/SignupPage.tsx';
import UserPage from './pages/UserPage.tsx';
import EventEditPage from './pages/EventEditPage.tsx';
import EventCreatePage from './pages/EventCreatePage.tsx';
import DeleteConfirmPage from './pages/DeleteConfirmPage.tsx';
import AboutPage from './pages/AboutPage.tsx';
import Calendar from './pages/Calendar.tsx';
import EventDatePage from './pages/EventDatePage.tsx';
import AllEventPage from './pages/AllEventPage.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <LandingPage />
      },
      {
        path: '/calendar',
        element: <Calendar/>
      },
      {
        path: '/login',
        element: <LoginPage/>
      },
      {
        path: '/signup',
        element: <SignupPage/>
      },
      {
        path: '/user',
        element: <UserPage/>
      },
      {
        path: '/events/:id',
        element: <EventDatePage/>
      },
      {
        path: '/all',
        element: <AllEventPage/>
      },
      {
        path: '/event-edit/:id',
        element: <EventEditPage/>
      },
      {
        path: '/event-create',
        element: <EventCreatePage/>
      },
      {
        path: '/confirmdelete',
        element: <DeleteConfirmPage/>
      },
      {
        path: '/about',
        element: <AboutPage />
      }
    ]
  }
])

const rootElement = document.getElementById('root');
if(rootElement) {
  ReactDOM.createRoot(rootElement).render(<RouterProvider router = {router } />)
}
