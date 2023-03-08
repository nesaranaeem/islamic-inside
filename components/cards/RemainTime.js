import React from "react";

export default function RemainTime({ text, prayer, time }) {
  return (
    <div className="border-y border-gray-100 dark:border-gray-800">
      <div className="text-center">
        <h2 className="text-black dark:text-white font-bold text-4xl md:text-4xl xl:text-4xl">
          {text}{" "}
          <span className="text-primary text-blue-800 dark:text-white">
            {prayer}
          </span>
        </h2>
      </div>

      <div>
        <div className="text-yellow-100 my-3">
          <div className="text-4xl text-center flex flex-col lg:flex-row xl:flex-row gap-5 w-full items-center justify-center">
            <div className="w-5/6 lg:w-24 xl:w-24 mx-1 p-2 text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300">
              <div className="font-mono leading-none" x-text="hours">
                {time.slice(0, 2)}
              </div>
              <p className="text-base">Hour</p>
            </div>
            <div className="w-5/6 lg:w-24 xl:w-24 mx-1 p-2 text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300">
              <div className="font-mono leading-none" x-text="minutes">
                {time.slice(3, 5)}
              </div>
              <p className="text-base">Minutes</p>
            </div>
            <div className="w-5/6 lg:w-24 xl:w-24 mx-1 p-2 text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300">
              <div className="font-mono leading-none" x-text="minutes">
                {time.slice(6, 8)}
              </div>
              <p className="text-base">Seconds</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
