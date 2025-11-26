import { Country } from "./Country";

export const Content = () => {
  return (
    <>
      <div className="grid sm:grid-cols-12">
        <div className=" grid sm:col-span-9">
          <div className="grid bg-amber-400 items-center grid-cols-12">
            <div className=" col-span-6 p-4 text-center text-2xl font-bold ">
              CURRENCY
            </div>
            <div className=" col-span-3 p-4 text-center text-2xl font-bold">
              UNIT
            </div>
            <div className=" col-span-3 p-4 text-center text-2xl font-bold">
              RATE
            </div>
          </div>
          <Country
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/2560px-Flag_of_the_United_States.svg.png"
            name="USA"
            unit="1"
            rate="140"
          />

          <Country
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/1280px-Flag_of_the_United_Kingdom_%283-5%29.svg.png"
            name="GBP"
            unit="1"
            rate="181"
          />
          <Country
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/2560px-Flag_of_Europe.svg.png"
            name="EUR"
            unit="1"
            rate="155.42"
          />
          <Country
            image="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png"
            name="INR"
            unit="100"
            rate="160"
          />
          <Country
            image="https://upload.wikimedia.org/wikipedia/commons/2/2e/Flag_of_China.png"
            name="CNY"
            unit="1"
            rate="18.71"
          />
          <Country
            image="https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/1200px-Flag_of_Japan.svg.png"
            name="JPY"
            unit="10"
            rate="9.80"
          />
        </div>
        <div className="bg-blue-500 sm:col-span-3">
          <div className="flex items-center h-full justify-center flex-col">
            <img
              className="w-1/2"
              src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
              alt="logo"
            />
            <p>Tiger Palace by Soaltee</p>

            <p>Go wind and dare wild</p>
          </div>
        </div>
      </div>
    </>
  );
};
