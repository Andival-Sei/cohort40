import { createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import StudentsPage from './pages/Students'
import StudentDetailPage from './pages/StudentDetail'
import ArtifactsPage from './pages/Artifacts'
import NotFound from './pages/NotFound'

/**
 * Дерево роутов приложения. Используем data routers из react-router.
 */
export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '*', element: <NotFound /> },
      { index: true, element: <Home /> },
      { path: 'students', element: <StudentsPage /> },
      { path: 'students/:slug', element: <StudentDetailPage /> },
      { path: 'artifacts', element: <ArtifactsPage /> },
    ],
  },
])

export default router
