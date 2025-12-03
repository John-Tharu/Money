import { useState, useEffect } from "react";

export const Header = () => {
  const getOrdinal = (day) => {
    if (day > 3 && day < 21) return "th";
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  //Date format function
  const formatDate = (date) => {
    const day = date.getDate();
    const month = date.toLocaleString("en-GB", { month: "long" });
    const year = date.getFullYear();
    return `${day}${getOrdinal(day)} ${month} ${year}`;
  };

  const [formattedDate, setFormattedDate] = useState(formatDate(new Date()));

  useEffect(() => {
    const interval = setInterval(() => {
      setFormattedDate(formatDate(new Date()));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-between items-center bg-red-700 py-6">
      <h1 className="text-4xl text-center text-white w-screen font-bold">
        Money Exchange Rate {formattedDate}
      </h1>
    </div>
  );
};
