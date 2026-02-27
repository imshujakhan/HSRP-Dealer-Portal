import styles from "./Nav.module.css";
const Nav = () => {
  return (
    <div>
      <div className={styles.nav_container}>
        <img src="" alt="companyLogo" />
        <h1>Dealer Dashboard</h1>
        <button>Logout</button>
      </div>
    </div>
  );
};

export default Nav;
