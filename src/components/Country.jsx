// ✅ Component to display the currency name + flag
const BoxStyle = (props) => {
  return (
    <div className="col-span-6 p-4 flex items-center justify-center gap-5 text-center sm:text-4xl border border-gray-300">
      <img className="w-1/5" src={props.image} alt={props.name} />
      {props.name}
    </div>
  );
};

// ✅ Main Country row
export const Country = (props) => {
  return (
    <div className="grid grid-cols-12">
      {/* Use uppercase component name */}
      <BoxStyle image={props.image} name={props.name} />
      <div className="col-span-3 p-4 flex items-center justify-center text-center sm:text-4xl border border-gray-300">
        {props.unit}
      </div>
      <div className="col-span-3 p-4 flex items-center justify-center text-center sm:text-4xl border border-gray-300">
        {props.rate}
      </div>
    </div>
  );
};
