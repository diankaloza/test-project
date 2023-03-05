import { Route, Routes } from 'react-router'

import { ProtectedRoute } from './ProtectedRoute'

import { Home } from 'pages/Home'
import { News } from 'pages/News'
import { Profile } from 'pages/Profile'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/news' element={<News />} />
      <Route element={<ProtectedRoute />}>
        <Route path='/profile' element={<Profile />} />
      </Route>
    </Routes>
  )
}
