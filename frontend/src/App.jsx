import "./App.css";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import RootLayout from "./components/RootLayout/RootLayout";
import Home from "./components/Home/Home";
import Nutrients from "./components/NutrientPlan/Nutrients";
import Consulting from "./components/Consulting/Consulting";
import Shop from "../src/components/Shop/Shop";
import Cart from "./components/Cart/Cart";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="" element={<Home />} />
      <Route path="shop" element={<Shop />} />
      <Route path="nutrient" element={<Nutrients />} />
      <Route path="consult" element={<Consulting />} />
      <Route path="cart" element={<Cart />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
