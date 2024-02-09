import { DataGrid } from "@mui/x-data-grid";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

export default function UserTable({
    setDeleteModalIsOpen,
    onHandleOpenUserDetail,
    onHandleOpenUserUpdate,
}) {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(function () {
        const fetchData = async function () {
            let list = [];
            setIsLoading(true);
            try {
                const querySnapshot = await getDocs(collection(db, "userData"));
                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    list.push({ id: doc.id, ...doc.data() });
                    console.log(doc.id, " => ", doc.data());
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

    console.log(data);

    const columns = [
        { field: "id", headerName: "ID", width: 100 },
        { field: "name", headerName: "User", width: 200 },
        { field: "age", headerName: "Age", width: 200 },
        { field: "role", headerName: "Role", width: 200 },
        { field: "status", headerName: "Status", width: 200 },

        {
            field: "actions",
            headerName: "Actions",
            width: 200,
            renderCell: (params) => (
                <div>
                    <IconButton
                        aria-label="edit"
                        color="primary"
                        onClick={() => onHandleOpenUserDetail(true)}
                    >
                        <VisibilityIcon />
                    </IconButton>
                    <IconButton
                        aria-label="save"
                        color="secondary"
                        onClick={() => onHandleOpenUserUpdate(true)}
                    >
                        <EditIcon />
                    </IconButton>
                    <IconButton
                        aria-label="delete"
                        color="error"
                        onClick={() => setDeleteModalIsOpen(true)}
                    >
                        <DeleteIcon />
                    </IconButton>
                </div>
            ),
        },
    ];

    // const rows = [
    //     {
    //         id: 1,
    //         role: "developer",
    //         status: "active",
    //         fullName: "Snow",
    //         firstName: "Jon",
    //         age: 35,
    //     },
    //     {
    //         id: 2,
    //         role: "developer",
    //         status: "active",
    //         fullName: "Lannister",
    //         firstName: "Cersei",
    //         age: 42,
    //     },
    //     {
    //         id: 3,
    //         role: "developer",
    //         status: "active",
    //         fullName: "Lannister",
    //         firstName: "Jaime",
    //         age: 45,
    //     },
    //     {
    //         id: 4,
    //         role: "developer",
    //         status: "active",
    //         fullName: "Stark",
    //         firstName: "Arya",
    //         age: 16,
    //     },
    //     {
    //         id: 5,
    //         role: "developer",
    //         status: "active",
    //         fullName: "Targaryen",
    //         firstName: "Daenerys",
    //         age: null,
    //     },
    //     {
    //         id: 6,
    //         role: "developer",
    //         status: "active",
    //         fullName: "Melisandre",
    //         firstName: null,
    //         age: 150,
    //     },
    //     {
    //         id: 7,
    //         role: "developer",
    //         status: "active",
    //         fullName: "Clifford",
    //         firstName: "Ferrara",
    //         age: 44,
    //     },
    //     {
    //         id: 8,
    //         role: "developer",
    //         status: "active",
    //         fullName: "Frances",
    //         firstName: "Rossini",
    //         age: 36,
    //     },
    //     {
    //         id: 9,
    //         role: "developer",
    //         status: "active",
    //         fullName: "Roxie",
    //         firstName: "Harvey",
    //         age: 65,
    //     },
    // ];

    return (
        <div
            style={{
                height: 520,
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            {isLoading && "...LOADING USERS TABLE PLEASE WAIT"}
            {!isLoading && (
                <DataGrid
                    justifyContent="space-around"
                    rows={data}
                    columns={columns}
                    pageSize={10}
                    checkboxSelection
                />
            )}
        </div>
    );
}
