import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-lg font-semibold">Logo</h1>
          </div>
          <div className="flex space-x-4">
            <Link to="/">Home</Link>
            <Link to="/listing"> Car Listing </Link>
          </div>
        </div>
      </div>

      <Outlet />
    </>
  );
};

export default Layout;
