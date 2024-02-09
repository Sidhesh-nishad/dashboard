import { styled } from "@mui/system";
import SidebarList from "./SidebarList";
import {
    AccountBox,
    AssignmentInd,
    Dashboard,
    ExitToApp,
    People,
} from "@mui/icons-material";
import { useState } from "react";

const NavContainer = styled("div")({
    color: "darkslategray",
    backgroundColor: "#fff",
    height: "100vh",
    width: "13rem",
    padding: 8,
    shadow: "2px",
    borderRadius: 4,
    borderRight: "2px solid #e2e8f0",
});

const ListDiv = styled("div")({
    paddingTop: "70px",
});
// sidebar list

const sidebarlist = [
    {
        icon: <Dashboard />,
        title: "Dashboard",
        to: "/",
    },
    {
        icon: <People />,
        title: "Users",
        to: "/users",
    },
    {
        icon: <AssignmentInd />,
        title: "Role",
        to: "/role",
    },
    {
        icon: <AccountBox />,
        title: "Profile",
        to: "/profile",
    },
    {
        icon: <ExitToApp />,
        title: "Logout",
    },
];

function Sidebar() {
    const [currrent, setCurrent] = useState("");

    return (
        <NavContainer>
            <ListDiv>
                {sidebarlist.map((items) => (
                    <SidebarList
                        {...items}
                        key={items.title}
                        current={currrent}
                        setCurrent={setCurrent}
                    />
                ))}
            </ListDiv>
        </NavContainer>
    );
}

export default Sidebar;
