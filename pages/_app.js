import FetchedData from "@/contexts/FetchedDataContext";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <FetchedData>
        <Component {...pageProps} />
      </FetchedData>
    </ThemeProvider>
  );
}
