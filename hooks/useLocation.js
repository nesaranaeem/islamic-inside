import { useRouter } from "next/router";
import { useEffect, useState } from "react";

/**
 * Get the Current location of the user
 *
 * @returns {[string, string]}
 */

export const useLocation = () => {
  const [latitude, setLatitude] = useState("23.810331");
  const [longitude, setLongitude] = useState("90.412521");

  const [error, setError] = useState(null);
  const router = useRouter();
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (error) => {
          setError(error.message);
          if (error.code === error.PERMISSION_DENIED) {
            setError(
              "You need to allow location permission to use this feature."
            );
            return router.push("/allow-location");
          }
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
      return router.push("/allow-location");
    }
  }, []);
  return [latitude, longitude];
};
