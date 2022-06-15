import React, { lazy, Suspense } from 'react'
import {
  BrowserRouter as Router,
  Routes as RoutesRouterDom,
  Route,
  Navigate
} from 'react-router-dom'
import { LoadingSuspense } from '../components/LoadingSuspense'

const Cart = lazy(() => import('../pages/Cart'))
const OrderPlaced = lazy(() => import('../pages/OrderPlaced'))
const Payments = lazy(() => import('../pages/Payments'))

const Routes: React.FC = () => (
  <Router>
    <Suspense fallback={<LoadingSuspense />}>
      <RoutesRouterDom>
        <Route path="/" element={<Navigate to="/cart" />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orderPlaced" element={<OrderPlaced />} />
        <Route path="/payments" element={<Payments />} />
      </RoutesRouterDom>
    </Suspense>
  </Router>
)

export default Routes
