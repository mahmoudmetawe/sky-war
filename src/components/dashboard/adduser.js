import Form from "../register";
export default function AddUser() {
    return(
        <div className="dashboard-content">
            <Form button = "Add User" username="" email = "" location="/dashboard/users" endpoint="user/create" />
        </div>
    )
}