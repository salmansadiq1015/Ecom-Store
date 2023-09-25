import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import About from "./pages/About/About";
import Policy from "./pages/Policy/Policy";
import Contact from "./pages/Contact/Contact";
import PageNotFound from "./pages/PageNotFound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Dashboard from "./pages/User/Dashboard";
import PrivateRoute from "./components/Routes/PrivateRoute";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import AdminRoute from "./components/Routes/AdminRoute";
import CreateCategory from "./pages/Admin/CreateCategory/CreateCategory";
import CreateProduct from "./pages/Admin/CreateCategory/CreateProduct";
import Users from "./pages/Admin/Users/Users";
import UserProfile from "./pages/User/UserProfile";
import Order from "./pages/User/Order";
import Products from "./pages/Admin/CreateCategory/Products";
import UpdateProduct from "./pages/Admin/CreateCategory/UpdateProduct";
import Search from "./pages/Search/Search";
import ProductsDetail from "./pages/ProductDetails/ProductsDetail";
import GetMessages from "./pages/Admin/CreateCategory/GetMessages";
import Categories from "./pages/Category/Categories";
import CategoryProduct from "./pages/Category/CategoryProduct";
import Card from "./pages/Cart/Card";
import Orders from "./pages/Admin/CreateCategory/Orders";
import HProducts from "./pages/AllProducts/HProducts";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<Dashboard />}></Route>
          <Route path="user/profile" element={<UserProfile />}></Route>
          <Route path="user/orders" element={<Order />}></Route>
        </Route>
        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/create-category" element={<CreateCategory />} />
          <Route path="admin/create-product" element={<CreateProduct />} />
          <Route path="admin/products" element={<Products />} />
          <Route path="admin/orders" element={<Orders />} />
          <Route path="admin/messages" element={<GetMessages />} />
          <Route
            path="admin/update-product/:slug"
            element={<UpdateProduct />}
          />
          <Route path="admin/users" element={<Users />} />
        </Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/forgot-password" element={<ForgotPassword />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/policy" element={<Policy />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/products" element={<HProducts />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/categories" element={<Categories />}></Route>
        <Route path="/category/:slug" element={<CategoryProduct />}></Route>
        <Route path="/product/:slug" element={<ProductsDetail />}></Route>
        <Route path="/card" element={<Card />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
