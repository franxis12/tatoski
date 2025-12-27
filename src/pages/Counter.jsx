import { useEffect, useState } from "react";

const TARGET_DATE = new Date("2026-01-01T19:30:00");

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
  const [name, setName] = useState("Fran");

  const handleChangeName = () => {
    if (name === "Jas") {
      setName("Fran");
    } else {
      setName("Jas");
    }
  };

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-red-400 text-white">
      <div className="flex items-center justify-center flex-col border-2 p-2 rounded-xl bg-black/10 shadow-2xl">
        <h1
          className="mb-6 text-2xl font-medium cursor-pointer"
          onClick={handleChangeName}
        >
          Time remaining to see
        </h1>
        <h2
          onClick={handleChangeName}
          className="mb-6 text-4xl font-semibold cursor-pointer animate-bounce"
        >
          ❤️ {name} ❤️
        </h2>
        <div className="grid grid-cols-4 gap-4 text-2xl">
          {Object.entries(timeLeft).map(([label, value]) => (
            <div
              key={label}
              className="rounded-xl bg-white/10 p-4 flex flex-col items-center"
            >
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
