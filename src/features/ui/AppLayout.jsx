import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../cart/CartOverview";
import Header from "./Header";
import Loader from "./Loader";

function AppLayout() {
  //use loading status in useNavigation() hook to check the request status within any route
  const navigation = useNavigation();
  //navigation contains a state property which can be "idle" or "loading"
  const isLoading = navigation.state === "loading";
  console.log(isLoading);
  return (
    <div className="layout">
      {isLoading && <Loader />}

      <Header />

      <main>
        <Outlet />
      </main>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
