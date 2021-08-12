import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppLayout from "components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  );
}

export default MyApp;
