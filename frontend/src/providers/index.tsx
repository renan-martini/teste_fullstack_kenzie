import { IChildren } from "../interfaces";
import UserProvider from "./user";

function Providers({ children }: IChildren) {
  return <UserProvider>{children}</UserProvider>;
}

export default Providers;
