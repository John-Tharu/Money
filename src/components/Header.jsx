export const Header = () => {
  const today = new Date("2025-11-27"); // Example date
  const formattedDate = today.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return (
    <div className="flex justify-between items-center bg-red-700 py-6">
      <h1 className="text-4xl text-center text-white w-screen font-bold">
        Money Exchange Rate {formattedDate}
      </h1>
    </div>
  );
};
