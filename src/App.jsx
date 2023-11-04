import "./App.css";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import RootLayout from "../src/components/RootLayout/RootLayout";
import Home from "./components/Home1/Home/Home";
import Nutrients from "./components/Home1/NutrientPlan/Nutrients";
import Consulting from "./components/Home1/Consulting/Consulting";
import Shop from "./components/Home1/Shop/Shop";
import Cart from "./components/Cart/Cart";
import { loadHomePage } from "./handleAPIs";
import { useEffect, useState } from "react";
import Navbar from "./components/Home1/Navbar/Navbar";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route exact path="/" element={<RootLayout />}>
      <Route
        exact
        path=""
        element={
          <>
            <Navbar /> <Home />
          </>
        }
      />
      <Route exact path="shop" element={<Shop />} />
      <Route exact path="nutrient" element={<Nutrients />} />
      <Route exact path="consult" element={<Consulting />} />
      <Route exact path="cart" element={<Cart />} />
    </Route>
  )
);

function App() {
  let [homeData, setHomeData] = useState();
  useEffect(() => {
    loadHomePage(setHomeData);
    console.log(homeData);
  }, []);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
