import { to12Format } from "@/utils/formatTime";
import useNextPrayer from "@/hooks/useNextPray";
import PrayerTimeCard from "../cards/PrayerTimeCard";
import { useFetchedData } from "@/contexts/FetchedDataContext";
import RemainTime from "../cards/RemainTime";

function PrayerTimes() {
  // Contexts

  const { fetchedData } = useFetchedData();
  // Get Prayer Time
  const timings = fetchedData.loaded && fetchedData.data.timings;
  console.log(fetchedData.data);
  // Remove additional data
  const additional = [
    "Sunrise",
    "Imsak",
    "Midnight",
    "Sunset",
    "Firstthird",
    "Lastthird",
  ];
  additional.forEach((i) => delete timings[i]);

  // Get Prayer Names
  const prayerNames = Object.keys(timings);

  // Get Prayer Times
  const prayTimes = Object.values(timings);
  const [remainTime, nextPray] = useNextPrayer(prayTimes);
  // Prayer Card

  const prayerTimeList = prayerNames.map((p, i) => (
    <PrayerTimeCard
      key={p}
      active={i === nextPray ? "active" : ""}
      name={p}
      time={to12Format(prayTimes[i])}
    />
  ));
  // Remain Time message
  const text = "Next Salah";
  let prayer = prayerNames[nextPray];

  return (
    <>
      <div>
        {fetchedData.loaded ? (
          <div>
            <div className="my-3 text-center">
              <h2 className="text-black dark:text-white font-bold text-4xl md:text-4xl xl:text-4xl">
                Prayer Time List for{" "}
                <span className="text-primary text-blue-800 dark:text-white">
                  {fetchedData.data.meta.timezone}
                </span>
              </h2>
              <p className="font-light italic my-2">
                *Calculation Method: {fetchedData.data.meta.method.name}
              </p>
            </div>
            <div className="text-3xl text-center flex flex-col lg:flex-row xl:flex-row gap-5 w-full items-center justify-center">
              {prayerTimeList}
            </div>
          </div>
        ) : (
          <div>
            <div role="status">
              <svg
                aria-hidden="true"
                className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        )}
      </div>
      {fetchedData.loaded ? (
        <RemainTime
          text={text}
          prayer={prayer}
          time={fetchedData.loaded && remainTime}
        />
      ) : (
        <div className="flex justify-center">
          <div role="status">
            <svg
              aria-hidden="true"
              className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}
    </>
  );
}
export default PrayerTimes;
