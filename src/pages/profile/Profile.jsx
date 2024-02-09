import {
    Container,
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Box,
} from "@mui/material";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase";

const Profile = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);
    console.log(currentUser);

    useEffect(function () {
        const fetchData = async function () {
            setIsLoading(true);
            let list = [];
            try {
                const querySnapshot = await getDocs(collection(db, "userData"));
                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    list.push({ id: doc.id, ...doc.data() });
                });
                setData(list);
                setIsLoading(false);
            } catch (error) {
                console.error(error);
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);

    useEffect(
        function () {
            const user = JSON.parse(localStorage.getItem("user"));
            const curr = data?.filter((users) => users.email === user);
            setCurrentUser(curr[0]);
        },
        [data]
    );

    return (
        <div>
            <Container>
                <Box sx={{ mb: 2 }}>
                    <InputLabel>Name</InputLabel>
                    <TextField
                        placeholder={!isLoading ? currentUser?.name : ""}
                        fullWidth
                        disabled
                    />
                </Box>
                <Box sx={{ mb: 2 }}>
                    <InputLabel>Role</InputLabel>
                    <TextField
                        placeholder={!isLoading ? currentUser?.role : ""}
                        fullWidth
                        disabled
                    />
                </Box>
                <Box sx={{ mb: 2 }}>
                    <InputLabel>Age</InputLabel>
                    <TextField
                        placeholder={!isLoading ? currentUser?.age : ""}
                        fullWidth
                        disabled
                    />
                </Box>
                <Box sx={{ mb: 2 }}>
                    <InputLabel>Status</InputLabel>
                    <TextField
                        placeholder={
                            !isLoading
                                ? currentUser?.status === true
                                    ? "active"
                                    : "inactive"
                                : ""
                        }
                        fullWidth
                        disabled
                    />
                </Box>
            </Container>
        </div>
    );
};

export default Profile;
