import { useSelector } from "react-redux";
import AppRoutes from "./AppRoutes";
const App = () => {
  let user = useSelector((state)=>state.user.currentUser);
  // console.log(user.user.name);
  return (
    <>
      {user && <p>{user.user.name}</p> }
      {user && <p>{user.user.email}</p> }

      <AppRoutes user={user ? user : null} />

    </>
  );
};
export default App;
