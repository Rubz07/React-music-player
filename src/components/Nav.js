import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ libraryStatus, setLibraryStatus }) => {
  return (
    <nav className="navigation">
      <h1 className="navigation__title">Waves</h1>
      <button
        className="navigation__button"
        onClick={() => setLibraryStatus(!libraryStatus)}
      >
        Library
        <FontAwesomeIcon icon={faMusic} className="navigation__icon" />
      </button>
    </nav>
  );
};

export default Nav;
