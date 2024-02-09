import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setIsOpenLogOutModal } from "../pages/login/loginSlice";

function SidebarList({ title, icon, to, setCurrent, current }) {
    const dispatch = useDispatch();

    return (
        <Link to={to}>
            <List
                onClick={() => {
                    setCurrent(title);
                    if (title === "Logout") {
                        dispatch(setIsOpenLogOutModal(true));
                    }
                }}
            >
                <ListItem
                    disablePadding
                    className={current === title ? "active" : ""}
                >
                    <ListItemButton>
                        <ListItemIcon>{icon}</ListItemIcon>
                        <ListItemText primary={title} />
                    </ListItemButton>
                </ListItem>
            </List>
        </Link>
    );
}

export default SidebarList;
