import {
    TextField,
    Button,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Checkbox,
    FormControlLabel,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
} from "@mui/material";

function UpdateUser({ onOpenUserUpdate, onHandleOpenUserUpdate }) {
    // event handlers
    function handleOpenUserDetail() {
        onHandleOpenUserUpdate(false);
    }
    return (
        <div>
            <Dialog open={onOpenUserUpdate}>
                <form>
                    <DialogTitle>Update Current User Detail</DialogTitle>
                    <DialogContent>
                        <TextField
                            label="Name"
                            margin="normal"
                            variant="outlined"
                            fullWidth
                        />
                        <TextField
                            label="email"
                            type="email"
                            margin="normal"
                            variant="outlined"
                            fullWidth
                        />
                        <TextField
                            label="password"
                            type="password"
                            margin="normal"
                            variant="outlined"
                            autoComplete="on"
                            fullWidth
                        />
                        <FormControl variant="outlined" fullWidth>
                            <InputLabel id="role-label">Role</InputLabel>
                            <Select labelId="role-label" id="role" label="Role">
                                <MenuItem value="Admin">Admin</MenuItem>
                                <MenuItem value="User">User</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField
                            label="Age"
                            margin="normal"
                            variant="outlined"
                            fullWidth
                            type="number"
                        />
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Active"
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button color="primary" onClick={handleOpenUserDetail}>
                            Close
                        </Button>
                        <Button color="primary" onClick={handleOpenUserDetail}>
                            Update
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>
        </div>
    );
}

export default UpdateUser;
