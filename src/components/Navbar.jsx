import React, { useEffect, useState } from "react";
import { styled } from "@mui/system";
import { useSelector } from "react-redux";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const NavDiv = styled("div")({
    display: "flex",
    justifyContent: "end",
    alignItems: "center",
    paddingRight: "28px",
    height: "4rem",
    width: "85vw",
    shapeOutside: "2px solid slate",
    backgroundColor: "#fff",
    borderBottom: "2px solid #e2e8f0",
});

const Navbar = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);

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
        <NavDiv>
            {isLoading ? (
                "...loading user name"
            ) : (
                <p style={{ fontSize: "20px" }}>welcome {currentUser?.name} </p>
            )}
        </NavDiv>
    );
};

export default Navbar;
