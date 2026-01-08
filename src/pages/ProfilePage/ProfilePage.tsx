import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";

export default function ProfilePage() {
  const user = useSelector(selectUser);

  return <h1>Welcome to your profile {user.name}</h1>;
}
