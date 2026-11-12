import { useEffect, useState } from "react";

// Hook countdown: menghitung sisa waktu menuju tanggal target.

export interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

/**
 * Akhir promo = Minggu terdekat pukul 23:59:59 (waktu lokal pengunjung).
 * Ubah fungsi ini bila ingin tanggal promo tetap, contoh:
 *   return new Date("2026-12-31T23:59:59+07:00");
 */
export function getPromoEndDate(now: Date = new Date()): Date {
  const end = new Date(now);
  const daysUntilSunday = (7 - end.getDay()) % 7;
  end.setDate(end.getDate() + daysUntilSunday);
  end.setHours(23, 59, 59, 999);
  return end;
}

function calculate(target: Date, now: number): TimeLeft {
  const diff = Math.max(0, target.getTime() - now);
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff / 3_600_000) % 24),
    minutes: Math.floor((diff / 60_000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

/** `getTarget` harus berupa fungsi stabil (didefinisikan di luar komponen). */
export function useCountdown(getTarget: () => Date): TimeLeft {
  const [target, setTarget] = useState<Date>(getTarget);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() =>
    calculate(target, Date.now())
  );

  useEffect(() => {
    const tick = () => {
      const now = Date.now();
      // Bila promo berakhir, mulai periode promo berikutnya otomatis
      if (now >= target.getTime()) {
        setTarget(getTarget());
        return;
      }
      setTimeLeft(calculate(target, now));
    };

    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, [target, getTarget]);

  return timeLeft;
}
