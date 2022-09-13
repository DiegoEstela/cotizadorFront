import "../styles/globals.css";
import { ContextAuthProvider } from "../context/AuthContext";

function MyApp({ Component, pageProps }) {
  return (
    < >
      <ContextAuthProvider>
        <Component {...pageProps} />
      </ContextAuthProvider>
    </>
  );
}

export default MyApp;