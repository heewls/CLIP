import { createBrowserRouter } from 'react-router-dom';

import { Purchase } from '@/components/Mypage-Purchase/Purchase';
import { SoldPage } from '@/components/Mypage-Sold/SoldPage';
import { AddProduct } from '@/pages/AddProduct/AddProduct.tsx';
import { CartPage } from '@/pages/CartPage/CartPage';
import Menu from '@/pages/Category/Menu';
import { DefaultLayout } from '@/pages/DefaultLayout/DefaultLayout.tsx';
import DetailPage from '@/pages/DetailPage/DetailPage';
import Home from '@/pages/Home/Home.tsx';
import { MyPage } from '@/pages/MyPage/MyPage.tsx';
import { Payment } from '@/pages/Payment/Payment';
import ProductPage from '@/pages/ProductPage/ProductPage';
import { ProtectedRoute } from '@/pages/ProtectedRoute.tsx';
import Search from '@/pages/Search/Search';
import SearchProduct from '@/pages/Search/SearchProduct';
import SignInPage from '@/pages/SignInPage/SignInPage';
import SignUpPage from '@/pages/SignUpPage/SignUpPage';
import SignUpUserPage from '@/pages/SignUpUserPage/SignUpUserPage';
import { UpdateProduct } from '@/pages/UpdateProduct/UpdateProduct.tsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    // errorElement: <div>Not Found Page</div>,
    children: [
      // 제품 및 검색
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/product/:productId',
        element: <DetailPage />,
      },
      {
        path: '/category',
        element: <Menu />,
      },
      {
        path: '/product/search/category',
        element: <ProductPage />,
      },
      {
        path: '/product/search',
        element: <SearchProduct />,
      },
      {
        path: '/search',
        element: <Search />,
      },
      // 회원가입 / 로그인
      {
        path: '/signup',
        element: <SignUpPage />,
      },
      {
        path: '/signup/seller',
        element: <SignUpUserPage />,
      },
      {
        path: '/signup/buyer',
        element: <SignUpUserPage />,
      },
      {
        path: '/signin',
        element: <SignInPage />,
      },

      // 마이페이지 및 결제 등
      {
        path: '/mycart',
        element: (
          <ProtectedRoute onlyBuyer>
            <CartPage />
          </ProtectedRoute>
        ),
      },
      {
        path: '/pay',
        element: (
          <ProtectedRoute onlyBuyer>
            <Payment />
          </ProtectedRoute>
        ),
      },
      {
        path: '/mypage',
        element: (
          <ProtectedRoute>
            <MyPage />
          </ProtectedRoute>
        ),
      },
      {
        path: '/new/product',
        element: (
          <ProtectedRoute onlySeller>
            <AddProduct />
          </ProtectedRoute>
        ),
      },
      {
        path: '/update/product',
        element: (
          <ProtectedRoute onlySeller>
            <UpdateProduct />
          </ProtectedRoute>
        ),
      },
      {
        path: '/purchase',
        element: <Purchase />,
      },
      {
        path: '/sold',
        element: <SoldPage />,
      },
    ],
  },
]);

export type RoutePath =
  | '/signup'
  | '/signup/seller'
  | '/signup/buyer'
  | '/signin'
  | '/'
  | '/product/:productId'
  | '/category'
  | '/mycart'
  | '/pay'
  | '/mypage'
  | '/purchase'
  | '/sold'
  | '/new/product'
  | '/update/product'
  | '/search'
  | '/product/search/category'
  | '/product/search'
  | string;
