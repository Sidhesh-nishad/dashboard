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
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import toast from "react-hot-toast";

// function NewUser({ isOpen, setIsOpen }) {
function NewUser({ onOpenModal, setOnOpenModal }) {
    const [name, setName] = useState("");
    const [role, setRole] = useState("");
    const [age, setAge] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [active, setActive] = useState(false);
    const [loading, setLoading] = useState(false);

    // event handlers

    function handleCancel() {
        setName("");
        setRole("");
        setAge("");
        setPassword("");
        setEmail("");
        setActive(false);
        setOnOpenModal(false);
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);
        if (!name || !age || !role || !email || !password) return;

        // to create user for authentication it will returns a userdata
        const createdUserData = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        )
            .then((userCredential) => {
                // Signed up
                const user = userCredential.user;
                console.log(user);

                return user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                return errorMessage;
                // ..
            });

        // same time we are create user at database for lists

        // Add a new document in collection "cities"
        await setDoc(doc(db, "userData", createdUserData.uid), {
            name: name,
            email: email,
            role: role,
            age: age,
            status: active,
            password: password,
            Timestamp: serverTimestamp(),
        });
        toast.success("new user created successfully");
        console.log(createdUserData.uid);
        setLoading(false);
        handleCancel();
    }

    return (
        <Dialog open={onOpenModal}>
            <form onSubmit={handleSubmit}>
                <DialogTitle>Create User</DialogTitle>
                <DialogContent>
                    <TextField
                        required
                        label="Name"
                        margin="normal"
                        variant="outlined"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        fullWidth
                    />
                    <TextField
                        required
                        label="email"
                        type="email"
                        margin="normal"
                        variant="outlined"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        fullWidth
                    />
                    <TextField
                        required
                        label="password"
                        type="password"
                        margin="normal"
                        variant="outlined"
                        autoComplete="on"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        fullWidth
                    />
                    <FormControl variant="outlined" fullWidth>
                        <InputLabel id="role-label">Role</InputLabel>
                        <Select
                            required
                            labelId="role-label"
                            id="role"
                            label="Role"
                            defaultValue={role}
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                        >
                            <MenuItem value="Admin">Admin</MenuItem>
                            <MenuItem value="User">User</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                        required
                        label="Age"
                        margin="normal"
                        variant="outlined"
                        fullWidth
                        type="number"
                        value={age}
                        onChange={(e) => setAge(Number(e.target.value))}
                    />
                    <FormControlLabel
                        value={active}
                        onChange={(e) => setActive((active) => !active)}
                        control={<Checkbox />}
                        label="Active"
                    />
                </DialogContent>
                <DialogActions>
                    <Button color="primary" onClick={handleCancel}>
                        Cancel
                    </Button>
                    <Button color="primary" type="submit" disabled={loading}>
                        {loading ? "...creating" : "Create"}
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    );
}

export default NewUser;
