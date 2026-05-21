import { Routes, Route, Navigate } from 'react-router-dom';
import AppLayout from './components/AppLayout.jsx';
import WifiLogin from './screens/WifiLogin.jsx';
import Connected from './screens/Connected.jsx';
import EMagazine from './screens/EMagazine.jsx';
import MyVouchers from './screens/MyVouchers.jsx';
import VoucherDetail from './screens/VoucherDetail.jsx';

export default function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<WifiLogin />} />
        <Route path="/connected" element={<Connected />} />
        <Route path="/magazine" element={<EMagazine />} />
        <Route path="/vouchers" element={<MyVouchers />} />
        <Route path="/vouchers/:id" element={<VoucherDetail />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
