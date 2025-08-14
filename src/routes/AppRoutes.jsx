import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { LoadingSpinner } from '../components/common/LoadingSpinner';
import { ROUTES } from '../config/routes';


// Lazy load components for better performance
const Home = lazy(() => import('../pages/Home'));
const Shop = lazy(() => import('../pages/Shop'));
const Blog = lazy(() => import('../pages/Blog'));
const About = lazy(() => import('../pages/About'));
const Contact = lazy(() => import('../pages/Contact'));
const Dashboard = lazy(() => import('../pages/Dashboard/Dashboard'));
const Uploads = lazy(() => import('../pages/Dashboard/uploads'));
const Favorites = lazy(() => import('../pages/Dashboard/favorites'));
const Invoice = lazy(() => import('../pages/Dashboard/invoice'));
const AccountSettings = lazy(() => import('../pages/Dashboard/acct-settings'));
const Orders = lazy(() => import('../pages/Dashboard/orders'));
const Quotes = lazy(() => import('../pages/Dashboard/quotes'));
const TrackOrder = lazy(() => import('../pages/Dashboard/track-order'));

const CartCheckOut = lazy(() => import('../components/Cart/CartCheckOut'));
const TrackOrderInfo = lazy(() => import('../pages/TrackOrderInfo'));
const QuoteInfo = lazy(()=>import('../pages/QuoteInfo'));

export const AppRoutes = () => (
  <Suspense fallback={<LoadingSpinner size="large" className="min-h-[400px]" />}>
    <Routes>

      {/* Public Routes */}
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.SHOP} element={<Shop />} />
      <Route path={ROUTES.BLOG} element={<Blog />} />
      <Route path={ROUTES.ABOUT} element={<About />} />
      <Route path={ROUTES.CONTACT} element={<Contact />} />

      
      {/* Dashboard Routes */}
      <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
      <Route path={ROUTES.UPLOADS} element={<Uploads />} />
      <Route path={ROUTES.FAVORITES} element={<Favorites />} />
      <Route path={ROUTES.ORDERS} element={<Orders />} />
      <Route path={ROUTES.QUOTES} element={<Quotes />} />
      <Route path={ROUTES.INVOICE} element={<Invoice />} />
      <Route path={ROUTES.TRACK_ORDER} element={<TrackOrder />} />
      <Route path={ROUTES.TRACK_ORDER_INFO} element={<TrackOrderInfo />} />
      <Route path={ROUTES.QUOTE_INFO} element={<QuoteInfo />} />
      <Route path={ROUTES.ACCOUNT_SETTINGS} element={<AccountSettings />} />
      <Route path={ROUTES.CART_CHECKOUT} element={<CartCheckOut />} />

      
      {/* Fallback Route */}
      <Route path="*" element={<Home />} />
    </Routes>
  </Suspense>
);
