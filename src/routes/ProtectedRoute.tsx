import { Outlet, Navigate } from 'react-router-dom'

import { useAppSelector } from 'hooks/useAppSelector'

export const ProtectedRoute = () => {
  const { isAuth } = useAppSelector((state) => state.profile)

  if (isAuth) {
    return <Outlet />
  }

  return <Navigate to='/' />
}
