import { useFetch } from "@/hooks/useFetch";
import { useLocation } from "@/hooks/useLocation";
import { createContext, useContext } from "react";
// Creating the user context
const FetchedDataContext = createContext();

// Making the function which will wrap the whole app using Context Provider
export default function FetchedData({ children }) {
  // Get Local location
  const [latitude, longitude] = useLocation();
  // Get time
  const date = Math.floor(Date.now() / 1000);
  // Get Data
  const [loaded, data] = useFetch(
    `https://api.aladhan.com/v1/timings/${date}?latitude=${latitude}&longitude=${longitude}&method=1`
  );
  const fetchedData = {
    data,
    loaded,
  };

  return (
    <FetchedDataContext.Provider value={{ fetchedData }}>
      {children}
    </FetchedDataContext.Provider>
  );
}

// Make useUserContext Hook to easily use our context throughout the application
export function useFetchedData() {
  return useContext(FetchedDataContext);
}
