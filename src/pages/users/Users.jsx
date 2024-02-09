import { styled } from "@mui/system";
import NewUser from "../../models/NewUser";
import { useState } from "react";
import UserTable from "./UserTable";
import DeleteConfirmationModal from "../../models/DeleteConfirmationModal ";
import ViewUserDetails from "../../models/ViewUserDetails";
import UpdateUser from "../../models/UpdateUser";

const Header = styled("div")({
    height: "4rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
});
const Button = styled("div")({
    width: "6rem",
    height: "2rem",
    border: "2px solid #00ff00",
    color: "#00ff00",
    borderRadius: "1rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
});

function Users() {
    const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
    const [UserDetailsIsOpen, setUserDetailsIsOpen] = useState(false);
    const [updateUserIsOpen, setUpdateUserIsOpen] = useState(false);
    const [createUserModelIsOpen, setCreateUserModelIsOpen] = useState(false);

    function handleOpen() {
        setCreateUserModelIsOpen(true);
    }

    return (
        <div>
            <NewUser
                onOpenModal={createUserModelIsOpen}
                setOnOpenModal={setCreateUserModelIsOpen}
            />
            <DeleteConfirmationModal
                deleteModalIsOpen={deleteModalIsOpen}
                setDeleteModalIsOpen={setDeleteModalIsOpen}
            />
            <ViewUserDetails
                onOpenUserDetail={UserDetailsIsOpen}
                onHandleOpenUserDetail={setUserDetailsIsOpen}
            />
            <UpdateUser
                onOpenUserUpdate={updateUserIsOpen}
                onHandleOpenUserUpdate={setUpdateUserIsOpen}
            />
            <Header>
                <p>ADD NEW USER</p>
                <Button onClick={handleOpen}>ADD NEW</Button>
            </Header>
            <UserTable
                setDeleteModalIsOpen={setDeleteModalIsOpen}
                onHandleOpenUserDetail={setUserDetailsIsOpen}
                onHandleOpenUserUpdate={setUpdateUserIsOpen}
            />
        </div>
    );
}

export default Users;
