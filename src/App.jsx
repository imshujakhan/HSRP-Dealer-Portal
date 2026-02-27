import Nav from "./components/Nav";
import DealerProfile from "./components/DealerProfile";
import "bootstrap/dist/css/bootstrap.min.css";
import OrdersSummary from "./components/OrdersSummary";
import OrdersData from "./components/OrdersData";
import styles from "./App.module.css";
function App() {
  return (
    <>
      <Nav />
      <DealerProfile />
      <OrdersSummary />
      <OrdersData />
    </>
  );
}

export default App;
