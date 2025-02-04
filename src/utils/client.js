import { createThirdwebClient } from "thirdweb";
import { THIRDWEB_CLIENT } from "../constants";
 
export const client = createThirdwebClient({
  clientId: THIRDWEB_CLIENT,
});