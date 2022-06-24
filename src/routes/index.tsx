import React, { lazy, Suspense } from 'react'
import {
  Routes as RoutesRouterDom,
  Route,
  Navigate
} from 'react-router-dom'

import { LoadingSuspense } from '../components/Controllers/LoadingSuspense'

const Cart = lazy(() => import('../pages/Cart'))
const OrderPlaced = lazy(() => import('../pages/OrderPlaced'))
const Payments = lazy(() => import('../pages/Payments'))

const Routes: React.FC = () => (
  <Suspense fallback={<LoadingSuspense />}>
    <RoutesRouterDom>
      <Route path="/" element={<Navigate to="/cart" />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/orderPlaced" element={<OrderPlaced />} />
      <Route path="/payments" element={<Payments />} />
    </RoutesRouterDom>
  </Suspense>
)

export default Routes

