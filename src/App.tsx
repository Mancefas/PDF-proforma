import "./App.css";
import ProformaInvoice from "./Components/ProformaInvoice";
import CookieConsent from "react-cookie-consent";
import HowToUseIt from "./Components/HowToUseIt";

function App() {
  return (
    <>
      <ProformaInvoice />
      <CookieConsent
        location="bottom"
        buttonText="Supratau"
        cookieName="myAwesomeCookieName2"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
      >
        Svetainė naudoja slapukus ("cookies") nustatyti svetainės lankomumą ir
        reikalingumą.{" "}
        <span style={{ fontSize: "10px" }}>
          <a
            style={{ textDecoration: "none" }}
            rel="noreferrer noopener"
            target="_blank"
            href="https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage"
          >
            Plačiau apie Google analytics slapukus
          </a>{" "}
        </span>
      </CookieConsent>
      <HowToUseIt />
    </>
  );
}

export default App;
