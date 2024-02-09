import { DataGrid } from "@mui/x-data-grid";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

export default function RoleTable({
    setDeleteModalIsOpen,
    onHandleOpenUserDetail,
    onHandleOpenUserUpdate,
}) {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);
    console.log(selectedRow);

    useEffect(function () {
        const fetchData = async function () {
            setIsLoading(true);
            let list = [];
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

    const columns = [
        { field: "id", headerName: "ID", width: 100 },
        { field: "name", headerName: "User name", width: 200 },
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

    const handleRowSelection = (selectedRowIds) => {
        const selectedId = selectedRowIds[0];
        const selectedRowData = data.find((row) => row.id === selectedId);
        setSelectedRow(selectedRowData);
    };

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
            {isLoading && "...LOADING ROLE TABLE PLEASE WAIT"}
            {!isLoading && (
                <DataGrid
                    onClick={() => console.log("hello")}
                    justifyContent="space-around"
                    rows={data}
                    columns={columns}
                    pageSize={10}
                    checkboxSelection
                    onSelectionModelChange={handleRowSelection}
                />
            )}
        </div>
    );
}
