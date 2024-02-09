import { Outlet } from "react-router-dom";
import Login from "../pages/login/Login";
import { useSelector } from "react-redux";
import Sidebar from "./Sidebar";

import { styled } from "@mui/system";
import Navbar from "./Navbar";
import ConfirmLogout from "../models/ConfirmLogout";

const Div = styled("div")({
    display: "flex",
    width: "100vh",
});
const NavWithContent = styled("div")({
    display: "flex",
    flexDirection: "column",
});

const OutletDiv = styled("div")({
    margin: "2rem",
});

function AppLayout() {
    const { user } = useSelector((state) => state.login);
    const currenUser = Boolean(user);

    if (!currenUser) return <Login />;

    return (
        <Div>
            <Sidebar />
            <div>
                <NavWithContent>
                    <Navbar />
                    <OutletDiv>
                        <Outlet />
                    </OutletDiv>
                </NavWithContent>
                <ConfirmLogout />
            </div>
        </Div>
    );
}

export default AppLayout;
