import { RouterProvider } from "react-router-dom";
import { AppRouter } from "./routes/router";
import { ReactLenis } from 'lenis/react'
import { useEffect, useRef } from "react";
import type { LenisRef } from 'lenis/react';

export default function App() {
  const lenisRef = useRef<LenisRef | null>(null);
  
  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time);
    }
  
    const rafId = requestAnimationFrame(update);
  
    return () => cancelAnimationFrame(rafId);
  }, []);
  
  return (
    <ReactLenis root options={{ autoRaf: false }} ref={lenisRef}>
      <RouterProvider router={AppRouter} />
    </ReactLenis>
  );
}
