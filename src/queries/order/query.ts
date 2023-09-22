import { useQuery, UseQueryOptions } from '@tanstack/react-query';

import { getCartOrder, getProductOrder, getSellingProduct, OrderProduct } from '@/apis/order.ts';
import { queryKeys } from '@/queries/queryKeys.ts';

export const useGetOrders = (
  type: 'CART' | 'PAY',
  payload: string,
  options?: Omit<UseQueryOptions<Order[]>, 'queryKey' | 'queryFn'>,
) => {
  return useQuery<Order[]>(
    [queryKeys.order],
    () => (type === 'CART' ? getCartOrder(payload) : getProductOrder(payload)),
    {
      ...options,
    },
  );
};

export const useGetSellingProduct = (
  options?: Omit<UseQueryOptions<OrderProduct[]>, 'queryKey' | 'queryFn'>,
) => {
  return useQuery<OrderProduct[]>([queryKeys.order], () => getSellingProduct(), { ...options });
};
