import { styled } from "@mui/system";
import { useState } from "react";
import DeleteConfirmationModal from "../../models/DeleteConfirmationModal ";
import ViewUserDetails from "../../models/ViewUserDetails";
import UpdateUser from "../../models/UpdateUser";
import RoleTable from "./RoleTable";

const Header = styled("div")({
    height: "4rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    fontSize: "1.5rem",
});

function Role() {
    const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
    const [UserDetailsIsOpen, setUserDetailsIsOpen] = useState(false);
    const [updateUserIsOpen, setUpdateUserIsOpen] = useState(false);

    return (
        <div>
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
                <p>Roles </p>
            </Header>
            <RoleTable
                setDeleteModalIsOpen={setDeleteModalIsOpen}
                onHandleOpenUserDetail={setUserDetailsIsOpen}
                onHandleOpenUserUpdate={setUpdateUserIsOpen}
            />
        </div>
    );
}

export default Role;
