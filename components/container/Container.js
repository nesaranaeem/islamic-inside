import Clock from "../clock/Clock";
import HijriDate from "../date/HijriDate";
import ThemeSwitch from "../theme/ThemeSwitch";
import PrayerTimes from "../times/PrayerTimes";

const Container = () => {
  return (
    <div>
      <div className="relative">
        <div
          aria-hidden="true"
          className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
        >
          <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
          <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
          <div className="relative pt-2 ml-auto">
            <div className="lg:w-2/3 text-center mx-auto">
              <div className="flex justify-center">
                <ThemeSwitch />
              </div>
              <Clock />
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <div
          aria-hidden="true"
          className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
        >
          <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
          <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
          <div className="relative pt-2 ml-auto">
            <div className="lg:w-2/3 text-center mx-auto">
              <HijriDate />
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <div
          aria-hidden="true"
          className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
        >
          <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
          <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
          <div className="relative pt-2 ml-auto">
            <div className="lg:w-2/3 text-center mx-auto">
              <PrayerTimes />
            </div>
          </div>
        </div>
      </div>
      <footer>
        <p className=" my-2 text-center dark:text-white">
          Developed By{" "}
          <a
            className="font-bold text-purple-500 underline underline-offset-1"
            href="https://nesaran.com"
            rel="nofollow"
            target="_blank"
          >
            Nesar Ahmed
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Container;
