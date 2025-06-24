import { Link } from 'react-router-dom';
import SearchOrder from '../order/SearchOrder';
import UserName from '../user/UserName';

function Header() {
  return (
    <header className="upercase flex items-center justify-between border-b border-stone-200 bg-yellow-500 px-4 py-3 sm:px-6">
      <Link className="tracking-widest" to="/">
        Fast React Pizza Co.
      </Link>
      <SearchOrder />
      <UserName />
    </header>
  );
}

export default Header;
