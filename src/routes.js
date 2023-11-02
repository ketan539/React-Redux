//import Header from "./container/Header";
import ProductComponent from "./container/ProductComponent";
import ProductDetail from "./container/ProductDetail";
import ProductListing from "./container/ProductListing";

const routes = [
    // {
    //   type: "collapse",
    //   name: "Header",
    //   key: "header",
    //   route: "/header",
    //   component: <Header />,
    // },
    {
      type: "collapse",
      name: "Product Detail",
      key: "product-detail",
      route: "/product-detail/:id",
      component: <ProductDetail />,
    },
    {
      type: "collapse",
      name: "Product Component",
      key: "product-component",
      route: "/product-component",
      component: <ProductComponent />,
    },
    {
      type: "collapse",
      name: "Product Listing",
      key: "product-listing",
      route: "/product-listing",
      component: <ProductListing />,
    },
   
  ];
  export default routes;