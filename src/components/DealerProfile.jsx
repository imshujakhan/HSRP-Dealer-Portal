import styles from "./DealerProfile.module.css";
const DealerProfile = () => {
  return (
    <div className={styles.dealer_profile_container}>
      <div className={styles.Dealer_heading}>
        <h1>Dealer Profile</h1>
      </div>
      <div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">DealerShip Name :</th>
              <th scope="col">Epson Amravati</th>
              <th scope="col">Address</th>
              <th scope="col">Pakiza Colony Walgaon Road Amravati 444601</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">User ID:-</th>
              <td>103482</td>
              <td>Email ID:-</td>
              <td>shujakhanpvt@gmail.com</td>
            </tr>
            <tr>
              <th scope="row">Contact Person:-</th>
              <td>Shahezad Khan</td>
              <td>Mobile No:-</td>
              <td>8888045130</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DealerProfile;
