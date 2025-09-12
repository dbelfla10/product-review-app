import "./Header.css";
import Logo from "../../assets/logo-placeholder.png";

function Header({ search, setSearch }) {
  return (
    <div className="header">
      <img className="header__logo" src={Logo} alt="App logo" />
      <h1 className="header__title">The Product Review App</h1>
      <input
        type="text"
        className="header__search-input"
        placeholder="Search for a product"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default Header;
