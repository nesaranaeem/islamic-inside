import { useEffect, useState } from "react";

/**
 * Get the Current Date
 *
 * @returns {object} date object
 */

export const useLanguage = () => {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    localStorage.setItem("language", language);
  }, []);

  return [language, setLanguage];
};
