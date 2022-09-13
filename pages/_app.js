import Navbar from "../components/Navbar";
import "../styles/globals.css";
import { ContextAuthProvider } from "../context/AuthContext";

function MyApp({ Component, pageProps }) {
  return (
    < >
      <ContextAuthProvider>
        <Navbar />
        <Component {...pageProps} />
      </ContextAuthProvider>
    </>
  );
}

export default MyApp;