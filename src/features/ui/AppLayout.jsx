import { Outlet, useNavigation } from 'react-router-dom';
import CartOverview from '../cart/CartOverview';
import Header from './Header';
import Loader from './Loader';

function AppLayout() {
  //use loading status in useNavigation() hook to check the request status within any route
  const navigation = useNavigation();
  //navigation contains a state property which can be "idle" or "loading"
  const isLoading = navigation.state === 'loading';

  return (
    <div className="grid h-screen grid-rows-[auto,1fr,auto]">
      {isLoading && <Loader />}

      <Header />

      <div className="overflow-scroll">
        <main className="mx-auto max-w-3xl">
          <Outlet />
        </main>
      </div>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
