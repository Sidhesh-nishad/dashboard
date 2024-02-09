import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { auth } from "../../firebase";
import toast from "react-hot-toast";

import Sheet from "@mui/joy/Sheet";
import CssBaseline from "@mui/joy/CssBaseline";
import Typography from "@mui/joy/Typography";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import Box from "@mui/system/Box";
import { getUser } from "./loginSlice";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    function handleSubmit(e) {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                dispatch(getUser(user.email));
                localStorage.setItem("user", JSON.stringify(user.email));
                setError(false);
                setEmail("");
                setPassword("");
                toast.success("successfully Logged IN");
                navigate("/");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(true);
            });
    }

    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
        >
            <form>
                <CssBaseline />
                <Sheet
                    sx={{
                        width: 300,
                        height: 320,
                        mx: "auto", // margin left & right
                        my: 4, // margin top & bottom
                        py: 3, // padding top & bottom
                        px: 2, // padding left & right
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                        borderRadius: "sm",
                        boxShadow: "md",
                    }}
                    variant="outlined"
                >
                    <div>
                        <Typography level="h4" component="h1">
                            <b>Welcome!</b>
                        </Typography>
                        <Typography level="body-sm">
                            Sign in to continue.
                        </Typography>
                    </div>
                    <FormControl>
                        <FormLabel>Email</FormLabel>
                        <Input
                            // html input attribute
                            name="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Password</FormLabel>
                        <Input
                            // html input attribute
                            name="password"
                            type="password"
                            placeholder="password"
                            autoComplete="on"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </FormControl>
                    <Button
                        sx={{ mt: 1 /* margin top */ }}
                        onClick={handleSubmit}
                    >
                        Log in
                    </Button>
                    {error && (
                        <p
                            style={{
                                marginTop: "10px",
                                text: "10px",
                                textAlign: "center",
                                color: "red",
                            }}
                        >
                            Wrong Email and password
                        </p>
                    )}
                </Sheet>
            </form>
        </Box>
    );
}

export default Login;
