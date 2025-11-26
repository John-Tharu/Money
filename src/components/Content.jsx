import { useEffect, useState } from "react";
import { Country } from "./Country";

export const Content = () => {
  const [rates, setRates] = useState([]);
  const [loading, setLoading] = useState(true);

  const flagMap = {
    USD: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg",
    GBP: "https://upload.wikimedia.org/wikipedia/commons/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg",
    EUR: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg",
    INR: "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg",
    CNY: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Flag_of_China.png",
    JPY: "https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg",
  };

  useEffect(() => {
    const wantedCurrencies = ["USD", "GBP", "EUR", "INR", "CNY", "JPY"];

    const getRates = async () => {
      try {
        const today = new Date();
        const yyyy = today.getFullYear();
        const mm = String(today.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
        const dd = String(today.getDate()).padStart(2, "0");

        const formattedDate = `${yyyy}-${mm}-${dd}`;

        console.log(formattedDate); // "2025-11-27" in Nepal local time

        const response = await fetch(
          `https://www.nrb.org.np/api/forex/v1/rates?from=${formattedDate}&to=${formattedDate}&page=1&per_page=50`
        );
        const data = await response.json();

        const filteredRates = (data.data.payload[0].rates || []).filter(
          (item) => wantedCurrencies.includes(item.currency.iso3)
        );

        setRates(filteredRates);
      } catch (error) {
        console.error("Error fetching forex data:", error);
      } finally {
        setLoading(false);
      }
      // console.log("Fetching rates...");
    };

    // ✅ Call immediately on mount
    getRates();

    // ✅ Set interval to call every 1 second (1000 ms)
    const intervalId = setInterval(getRates, 1000);

    // ✅ Clear interval on unmount
    return () => clearInterval(intervalId);
  }, []);

  if (loading) return <p className="p-4 text-xl font-bold">Loading...</p>;

  return (
    <div className="grid sm:grid-cols-12">
      <div className="grid sm:col-span-9">
        <div className="grid bg-amber-400 items-center grid-cols-12">
          <div className="col-span-6 p-4 text-center text-2xl font-bold">
            CURRENCY
          </div>
          <div className="col-span-3 p-4 text-center text-2xl font-bold">
            UNIT
          </div>
          <div className="col-span-3 p-4 text-center text-2xl font-bold">
            RATE
          </div>
        </div>

        {rates.map((item) => {
          const iso = item.currency.iso3;
          const name = item.currency.name;
          const unit = item.currency.unit;
          const rate = item.sell;

          return (
            <Country
              key={iso}
              image={flagMap[iso]}
              name={iso}
              unit={unit}
              rate={rate}
            />
          );
        })}
      </div>

      <div className="bg-orange-800 sm:col-span-3 hidden sm:block">
        <div className="flex items-center h-full justify-center flex-col">
          <img
            className="sm:w-1/2"
            src="https://soaltee.com/images/67d91c8701915_1742281863.png"
            alt="logo"
          />
          <p className="sm:text-4xl uppercase font-bold px-2 py-4 text-center text-white">
            Tiger Palace by Soaltee
          </p>
          <p className="sm:text-2xl uppercase font-bold text-white">
            Bhairahawa
          </p>
          <p className="sm:text-2xl font-bold text-white">
            Tilottama-13, Kotihawa
          </p>
        </div>
      </div>
    </div>
  );
};
