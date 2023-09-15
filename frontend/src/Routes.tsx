import { BrowserRouter, Route, Routes } from "react-router-dom";
import {DefaultLayout} from "./layouts/DefaultLayout"
import { Dashboard } from "./pages/Dashboard";
export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Dashboard />} />
          {/* <Route path="/cart" element={<Cart />} /> */}
          {/* <Route path="/deliverySend" element={<DeliverySend />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
