import { useRouter } from "next/router";
import { useSelector } from "react-redux";

export default function User() {
  const router = useRouter();
  const { id } = router.query;

  const users = useSelector((state) => state.users);
  const user = users[id];
  console.log(user);
  return (
    <>
      <h1>Hello from {id}</h1>
    </>
  );
}
