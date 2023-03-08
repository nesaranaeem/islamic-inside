import { useCurrentDate } from "@/hooks/useCurrentDate";
import { useLanguage } from "@/hooks/useLanguage";
import { to12Format, addLeadingZero } from "@/utils/formatTime";

const Clock = () => {
  const date = useCurrentDate();
  const [language] = useLanguage();
  const currentTime = `${date.getHours()}:${date.getMinutes()}`;
  return (
    <>
      <div className="text-center mb-3">
        <h2 className="text-black dark:text-white font-bold text-4xl md:text-4xl xl:text-4xl">
          Current{" "}
          <span className="text-primary text-blue-800 dark:text-white">
            Time
          </span>
        </h2>
      </div>

      <div>
        <div className="text-yellow-100">
          <div className="text-6xl text-center flex flex-col lg:flex-row xl:flex-row gap-5 w-full items-center justify-center">
            <div className="w-5/6 lg:w-24 xl:w-24 mx-1 p-2 text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300">
              <div className="font-mono leading-none" x-text="hours">
                {to12Format(currentTime).slice(0, 2)}
              </div>
            </div>
            <div className="w-5/6 lg:w-24 xl:w-24 mx-1 p-2 text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300">
              <div className="font-mono leading-none" x-text="minutes">
                {to12Format(currentTime).slice(3, 5)}
              </div>
            </div>
            <div className="w-5/6 lg:w-24 xl:w-24 mx-1 p-2 text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300">
              <div className="font-mono leading-none" x-text="minutes">
                {addLeadingZero(date.getSeconds())}
              </div>
            </div>
            <div className="w-5/6 lg:w-24 xl:w-24 mx-1 p-2 text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400">
              <div className="font-mono leading-none" x-text="minutes">
                {date.getHours() < 12 ? "AM" : "PM"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Clock;
