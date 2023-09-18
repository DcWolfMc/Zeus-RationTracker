import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Dashboard } from "./pages/Dashboard";
import { PurchaseDetails } from "./pages/PurchaseDetails";
export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="/purchase" element={<Dashboard />} />
          <Route path="/purchase/:id" element={<PurchaseDetails />} />
          <Route path="/purchase/:id/edit" element={<PurchaseDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
