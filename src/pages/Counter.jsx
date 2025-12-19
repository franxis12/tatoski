import { useEffect, useState } from "react";

const TARGET_DATE = new Date("2026-01-01T18:00:00");

const getTimeLeft = () => {
  const diff = TARGET_DATE.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds };
};

function Counter() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-(--PrimaryColor) text-white">
      <div className="rounded-2xl border border-white/30 bg-black/40 p-10 text-center">
        <h1 className="mb-6 text-3xl font-semibold">
          Time remaining to see Jas ❤️
        </h1>
        <div className="grid grid-cols-4 gap-4 text-2xl">
          {Object.entries(timeLeft).map(([label, value]) => (
            <div key={label} className="rounded-xl bg-white/10 p-4">
              <div className="text-4xl font-bold">
                {value.toString().padStart(2, "0")}
              </div>
              <div className="text-sm uppercase tracking-wide">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Counter;
