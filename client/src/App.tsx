import { RouterProvider } from "react-router-dom";
import { AppRouter } from "./routes/router";
import { ReactLenis } from 'lenis/react'

export default function App() {

  const router = AppRouter  

  return (
    <>
      <ReactLenis root>
        <RouterProvider router={router} />
      </ReactLenis>
    </>
  )
}
