const PrayerTimeCard = ({ name, time, active }) => {
  return (
    <div className="my-3 w-5/6 lg:w-auto xl:w-auto mx-1 p-2 text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300">
      <div className="font-mono leading-none">{name}</div>
      {time}
    </div>
  );
};

export default PrayerTimeCard;
