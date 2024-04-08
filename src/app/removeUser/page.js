"use client"
import { useSelector, useDispatch } from "react-redux";
import { deleteUser } from "../redux/slice";
export default function removeUser() {
    const userData = useSelector((data) => data.userData.users);
    const dispatch = useDispatch();
  
    const UserDispatch = () => {
      dispatch(deleteUser(userData));
    };
    return(
        <div className="display-user">
      <h3>User List</h3>
      {userData.map((item) => (
        
          <div key={item.id} className="user-item">
            <span>{item.name}</span>
            <button onClick={UserDispatch} > Delete User </button>
          </div>
      ))}
    </div>
    )
}