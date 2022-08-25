import { Navigate, Route, Routes } from "react-router-dom"
import { NotFoundPage, HomePage, ContentDetailePage, ContentCategoryPage } from "../pages"
import {  } from "../pages/contentDetail"

export const MoviesRoutes = () => {
  return (
    <>
      <div>
        <Routes>
           <Route
            path="/:category/search/:keyword"
            element={<ContentCategoryPage />}
          />
          <Route
            path="/:category/type/:type"
            element={<ContentCategoryPage />}
          />
          <Route
            path="/:category/:id"
            element={<ContentDetailePage />}
          />
          <Route
            path="/:category"
            element={<ContentCategoryPage />}
          />
          <Route
            path=""
            element={<HomePage />}
          />
          <Route
            path="/"
            exact
            element={<Navigate to="/" />} 
          />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </>
  )
}