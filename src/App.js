import "./App.css";
import ReactGA from "react-ga"
import Maintenance from "./components/UI/maintenance";
import Layout from "./components/Layout/Layout"

const TRACKING_ID = "G-ZVRLRF2HCH"
ReactGA.initialize(TRACKING_ID);

function App() {
  return <>
    <Layout />
    {/* <Maintenance /> */}
  </>;
}

export default App;
