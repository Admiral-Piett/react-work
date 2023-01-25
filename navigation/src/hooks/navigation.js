import { useContext } from "react";
import NavigationContext from "../contexts/navigation";

const useNavigation = () => {
  return useContext(NavigationContext);
};

export default useNavigation;
