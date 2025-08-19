// src/hooks/useComingSoon.ts
import { useEffect, useMemo, useState } from "react";

type Countdown = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

type UseComingSoonResult = {
  isComingSoon: boolean;
  countdown: Countdown | null;
};

/**
 * CONFIGURATION:
 * - Set START_ISO to the UTC ISO datetime when the cooldown begins.
 * - DurationDays is the cooldown length (10).
 */
const START_ISO = "2025-08-15T00:00:00Z"; // <-- set the begin date/time (UTC)
const DURATION_DAYS = 16;

async function fetchServerTime(): Promise<number | null> {
  try {
    // Optional: fetch a trusted time (UTC). If you don't want to call external APIs, remove this.
    const res = await fetch("https://worldtimeapi.org/api/timezone/Etc/UTC", {
      cache: "no-store",
    });
    if (!res.ok) return null;
    const data = await res.json();
    // data.datetime example: "2025-08-05T12:34:56.789012+00:00"
    return new Date(data.utc_datetime ?? data.datetime).getTime();
  } catch {
    return null;
  }
}

export default function useComingSoon(): UseComingSoonResult {
  const startTime = useMemo(() => new Date(START_ISO).getTime(), []);
  const endTime = useMemo(
    () => startTime + DURATION_DAYS * 24 * 60 * 60 * 1000,
    [startTime]
  );

  const [nowOffset, setNowOffset] = useState<number | null>(null);
  // If we get server time, store (serverTime - clientTime) offset so we can compute correct now client-side.
  useEffect(() => {
    let mounted = true;
    (async () => {
      const serverTs = await fetchServerTime();
      if (!mounted) return;
      if (serverTs) {
        const clientTs = Date.now();
        setNowOffset(serverTs - clientTs);
      } else {
        setNowOffset(null);
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const id = setInterval(() => {
      const offset = nowOffset ?? 0;
      setNow(Date.now() + offset);
    }, 1000);
    return () => clearInterval(id);
  }, [nowOffset]);

  const remaining = endTime - now;
  const isComingSoon = remaining > 0;

  const countdown: Countdown | null = isComingSoon
    ? {
        days: Math.floor(remaining / (1000 * 60 * 60 * 24)),
        hours: Math.floor((remaining / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((remaining / (1000 * 60)) % 60),
        seconds: Math.floor((remaining / 1000) % 60),
      }
    : null;

  return { isComingSoon, countdown };
}
