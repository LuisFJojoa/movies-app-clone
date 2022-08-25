import React from 'react'
import { AuthProvider } from './auth/context'
import { AppRouter } from './router/AppRouter'

import 'swiper/swiper.min.css'
import './assets/boxicons-2.0.7/css/boxicons.min.css'
import "./MoviesApp.scss"

export const MoviesApp = () => {
  return (
    <>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </>
  )
}
