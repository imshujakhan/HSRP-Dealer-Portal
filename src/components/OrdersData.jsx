import styles from "./OrdersData.module.css";
import Button from "./Button";
const OrdersData = () => {
  return (
    <div className={styles.dataTables}>
      <div className="table1">
        {" "}
        <table class="table table-bordered">
          <tbody>
            <tr>
              <th>
                <h4>Scheduled Appoinment</h4>
              </th>
              <th>
                <h4>Orders</h4>
              </th>
            </tr>
            <tr align="center">
              <td>
                <span>02-03-2026</span>
              </td>
              <td>
                <u>
                  <a href="#">1</a>
                </u>{" "}
              </td>
            </tr>
            <tr align="center">
              <td>
                <span>27-02-2026</span>
              </td>
              <td>
                <u>
                  <a href="#">8</a>
                </u>{" "}
              </td>
            </tr>
            <tr align="center">
              <td>
                <span>28-02-2026</span>
              </td>
              <td>
                <u>
                  <a href="#">3</a>
                </u>{" "}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="table2">
        {" "}
        <table class="table table-bordered">
          <tbody>
            <tr>
              <th>
                <h4>Appointment Date</h4>
              </th>
              <th>
                <h4>
                  HSRP Received
                  <br />
                  By Dealer
                </h4>
              </th>
            </tr>
            <tr align="center">
              <td>
                <span>02-03-2026</span>
              </td>
              <td>
                <u>
                  <a href="#">1</a>
                </u>{" "}
              </td>
            </tr>
            <tr align="center">
              <td>
                <span>27-02-2026</span>
              </td>
              <td>
                <u>
                  <a href="#">8</a>
                </u>{" "}
              </td>
            </tr>
            <tr align="center">
              <td>
                <span>28-02-2026</span>
              </td>
              <td>
                <u>
                  <a href="#">3</a>
                </u>{" "}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="table3">
        {" "}
        <table class="table table-bordered">
          <tbody>
            <tr>
              <th>
                <h4>Pending for complete</h4>
              </th>
            </tr>
            <tr align="center">
              <td>
                <u>
                  <a href="#">1</a>
                </u>{" "}
              </td>
            </tr>
            <tr>
              <th>
                <h4>today orders completed </h4>
              </th>
            </tr>
            <tr align="center">
              <td>
                <u>
                  <a href="#">1</a>
                </u>{" "}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Button />
    </div>
  );
};

export default OrdersData;
