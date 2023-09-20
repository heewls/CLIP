import { createBrowserRouter } from 'react-router-dom';

import { AddProduct } from '@/pages/AddProduct/AddProduct.tsx';
import { CartPage } from '@/pages/CartPage/CartPage';
import Menu from '@/pages/Category/Menu';
import { DefaultLayout } from '@/pages/DefaultLayout/DefaultLayout.tsx';
import DetailPage from '@/pages/DetailPage/DetailPage';
import Home from '@/pages/Home/Home.tsx';
import LiveSession from '@/pages/LiveSession/LiveSession';
import { MyPage } from '@/pages/MyPage/MyPage.tsx';
import { Payment } from '@/pages/Payment/Payment';
import ProductPage from '@/pages/ProductPage/ProductPage';
import { ProtectedRoute } from '@/pages/ProtectedRoute.tsx';
import Search from '@/pages/Search/Search';
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
        path: '/detail/:productId',
        element: <DetailPage />,
      },
      {
        path: '/product/search/category',
        element: <ProductPage />,
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

      // 라이브 관련
      // {
      //   path: "/live/:liveId",
      //   element :
      // },
      {
        path: '/live',
        element: <LiveSession />,
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
  | '/new/product'
  | '/update/product'
  | '/search'
  | '/product/search/category'
  | string;
