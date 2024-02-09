import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
    Dialog,
    DialogActions,
    DialogTitle,
    Typography,
    Button,
} from "@mui/material";
import { setIsOpenLogOutModal } from "../pages/login/loginSlice";

const ConfirmLogout = () => {
    const { isOpenLogOutModal } = useSelector((state) => state.login);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    //event listeners
    function handleClose() {
        dispatch(setIsOpenLogOutModal(false));
    }

    function logOut() {
        localStorage.removeItem("user");
        navigate("/login");
        handleClose();
    }

    return (
        <Dialog open={isOpenLogOutModal} onSubmit={logOut}>
            <form>
                <DialogTitle>
                    <Typography variant="p">
                        Are you sure you want to delete this user?
                    </Typography>
                </DialogTitle>

                <DialogActions>
                    <Button variant="contained" onClick={handleClose}>
                        No
                    </Button>
                    <Button variant="contained" type="submit" color="error">
                        Yes
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    );
};

export default ConfirmLogout;
