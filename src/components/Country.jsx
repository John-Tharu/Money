export const Country = (props) => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-6 p-4 flex items-center justify-center gap-5 text-center text-2xl border border-gray-300">
        <img className="w-1/5" src={props.image} alt="" />
        {props.name}
      </div>
      <div className=" col-span-3 p-4 flex items-center justify-center text-center text-2xl border border-gray-300">
        {props.unit}
      </div>
      <div className=" col-span-3 p-4 flex items-center justify-center text-center text-2xl border border-gray-300">
        {props.rate}
      </div>
    </div>
  );
};
