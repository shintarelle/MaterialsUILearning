// import OneView from 'src/sections/one/view';

import ProductsView from 'src/sections/products/ProductsView';
// ----------------------------------------------------------------------

export const metadata = {
  title: 'Products',
};

export default function Page() {
  console.log('Loading')
  return <ProductsView />
}
