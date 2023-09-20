import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import {HistoryLayout} from "./layouts/HistoryLayout"
import { Dashboard } from "./pages/Dashboard";
import { PurchaseDetails } from "./pages/PurchaseDetails";
import {History} from "./pages/History"
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
          <Route path="/history" element={<HistoryLayout />}>
          <Route index element={<History />} />
          </Route>
      </Routes>
    </BrowserRouter>
  );
};
