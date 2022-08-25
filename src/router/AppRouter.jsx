import { Route, Routes } from "react-router-dom"
import { LoginPage } from "../auth/pages/"
import { MovieProvider } from "../movies/context"
import { MoviesRoutes } from "../movies/routes/MoviesRoutes"
import { Header, Footer } from "../ui/components/"
import { PrivateRoute, PublicRoute } from "./"

export const AppRouter = () => {

  return (
    <>
      <Routes>
        <Route path="login" element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        } />

        <Route path="/*" element={
          <PrivateRoute>
            <MovieProvider>
              <Header />
              <MoviesRoutes />
              <Footer />
            </MovieProvider>
          </PrivateRoute>
        } />

      </Routes>
    </>
  )
}
