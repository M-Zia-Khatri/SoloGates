import { RouterProvider } from "react-router-dom";
import { AppRouter } from "./routes/router";
import { ReactLenis } from "lenis/react";
import { useEffect, useRef } from "react";
import type { LenisRef } from "lenis/react";
import useComingSoon from "./hooks/useComingSoon";
import ComingSoon from "./components/ComingSoon";

export default function App() {
  const { isComingSoon } = useComingSoon();

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
      {isComingSoon && <RouterProvider router={AppRouter} />}
      {!isComingSoon && <ComingSoon />}
    </ReactLenis>
  );
}
