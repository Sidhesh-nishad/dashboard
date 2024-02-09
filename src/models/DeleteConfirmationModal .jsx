import React from "react";
import {
    Dialog,
    DialogActions,
    DialogTitle,
    Typography,
    Button,
} from "@mui/material";
const DeleteConfirmationModal = ({
    deleteModalIsOpen,
    setDeleteModalIsOpen,
}) => {
    //event listeners
    function handleClose() {
        setDeleteModalIsOpen(false);
    }

    return (
        <Dialog open={deleteModalIsOpen}>
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
                    <Button
                        variant="contained"
                        color="error"
                        onClick={handleClose}
                    >
                        Yes
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    );
};

export default DeleteConfirmationModal;
