import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Login from "./pages/login/Login";
import AppLayout from "./components/AppLayout";
import Dashboard from "./pages/dashboard/Dashboard";
import Users from "./pages/users/Users";
import Role from "./pages/role/Role";
import Profile from "./pages/profile/Profile";
import ConfirmLogout from "./models/ConfirmLogout";

const router = createBrowserRouter([
    {
        element: <Login />,
        children: [{ path: "/login", element: <Login /> }],
    },
    {
        element: <AppLayout />,
        children: [
            { path: "/", element: <Dashboard /> },

            {
                path: "/users",
                element: <Users />,
            },
            {
                path: "/role",
                element: <Role />,
            },
            {
                path: "/profile",
                element: <Profile />,
            },
        ],
    },
]);

function App() {
    return (
        <>
            <RouterProvider router={router} />
            <Toaster />
        </>
    );
}

export default App;
