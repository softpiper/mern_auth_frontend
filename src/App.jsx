import { useSelector } from "react-redux";
import AppRoutes from "./AppRoutes";
const App = () => {
  let user = useSelector((state)=>state.user.currentUser);
  console.log(user.user);
  return (
    <>
      
      <AppRoutes user={user ? user : null} />

    </>
  );
};
export default App;
