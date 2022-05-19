import Link from "next/link";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, deleteUser, updateUser } from "../../redux/slices/usersSlice";

export default function Users() {
  const users = useSelector((state) => state.users);
  const [isUpdating, setIsUpdating] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const dispatch = useDispatch();

  const [forms, setForms] = useState({
    firstName: "",
    lastName: "",
  });

  const handleChange = (form, event) => {
    setForms((prev) => {
      return {
        ...prev,
        [form]: event.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isUpdating) {
      dispatch(addUser(forms));
      setForms({
        firstName: "",
        lastName: "",
      });
    } else {
      dispatch(updateUser({ selectedIndex, forms }));
      setIsUpdating(false);
    }
  };

  const handleUpdate = (idx) => {
    setSelectedIndex(idx);
    setIsUpdating(true);
    const { firstName, lastName } = users[idx];
    setForms({ firstName, lastName });
  };

  const handleDelete = (idx) => {
    dispatch(deleteUser(idx));
  };

  return (
    <div style={{ margin: "20px 20px", gap: "20px" }}>
      {/* form */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        <form onSubmit={handleSubmit}>
          <div style={{ flexDirection: "row" }}>
            <div style={{ flexDirection: "column" }}>
              <label>firstname</label>
            </div>
            <input
              placeholder="firstName"
              onChange={(e) => handleChange("firstName", e)}
              value={forms.firstName}
            />
          </div>
          <div style={{ flexDirection: "row" }}>
            <div style={{ flexDirection: "column" }}>
              <label>lastName</label>
            </div>
            <input
              placeholder="lastName"
              onChange={(e) => handleChange("lastName", e)}
              value={forms.lastName}
            />
          </div>
          <button>{isUpdating ? "Update" : "Submit"} </button>
        </form>
      </div>

      {/* table */}
      <br />

      <div style={{ flexDirection: "row" }}>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => {
              return (
                <tr key={idx}>
                  <th scope="row">{idx + 1}</th>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>
                    <button onClick={() => handleUpdate(idx)} color="primary">
                      Update
                    </button>
                    <button color="danger" onClick={() => handleDelete(idx)}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
