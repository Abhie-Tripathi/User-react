import React,{useState} from "react";
import AddUser from "./components/User/AddUser";
import UsersList from "./components/User/UsersList";

function App() {
  const [usersList, setusersList] = useState([])
  const AddUserhandler=(uname,uage) =>{
    setusersList((prevUserslist) =>{
      return [...prevUserslist,{username: uname, age: uage}]})
  }
  return (
    <div>
      <AddUser onadduser={AddUserhandler}/>
      <UsersList users={usersList}/>
    </div>
  );
}

export default App;
