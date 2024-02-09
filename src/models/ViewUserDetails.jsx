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

function ViewUserDetails({ onOpenUserDetail, onHandleOpenUserDetail }) {
    function handleOpenUserDetail() {
        onHandleOpenUserDetail(false);
    }

    return (
        <div>
            <Dialog open={onOpenUserDetail}>
                <form>
                    <DialogTitle>Current User Detail</DialogTitle>
                    <DialogContent>
                        <TextField
                            disabled
                            label="Name"
                            margin="normal"
                            variant="outlined"
                            fullWidth
                        />
                        <TextField
                            disabled
                            label="email"
                            type="email"
                            margin="normal"
                            variant="outlined"
                            fullWidth
                        />
                        <TextField
                            disabled
                            label="password"
                            type="password"
                            margin="normal"
                            variant="outlined"
                            autoComplete="on"
                            fullWidth
                        />
                        <FormControl variant="outlined" fullWidth>
                            <InputLabel id="role-label">Role</InputLabel>
                            <Select
                                disabled
                                labelId="role-label"
                                id="role"
                                label="Role"
                            >
                                <MenuItem value="Admin">Admin</MenuItem>
                                <MenuItem value="User">User</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField
                            disabled
                            label="Age"
                            margin="normal"
                            variant="outlined"
                            fullWidth
                            type="number"
                        />
                        <FormControlLabel
                            control={<Checkbox disabled />}
                            label="Active"
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button color="primary" onClick={handleOpenUserDetail}>
                            Close
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>
        </div>
    );
}

export default ViewUserDetails;
