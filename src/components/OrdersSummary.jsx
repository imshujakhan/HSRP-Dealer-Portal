import styles from "./OrdersSummary.module.css";
const OrdersSummary = () => {
  return (
    <div className={styles.ordersummary}>
      <div className={styles.orderHeading}>
        <div className={styles.totalOrder}>
          <h1>9999</h1>
          <a href="">Total Orders</a>
        </div>
        <div className={styles.orderRecievedToDealer}>
          <h1>9999</h1>
          <a href="">Order Recieved To Dealer</a>
        </div>
        <div className={styles.pendingOrders}>
          <h1>9999</h1>
          <a href="">Pending for complete</a>
        </div>
        <div className={styles.completedTillDate}>
          <h1>9999</h1>
          <a href="">Completed Till Date</a>
        </div>
      </div>
    </div>
  );
};

export default OrdersSummary;
