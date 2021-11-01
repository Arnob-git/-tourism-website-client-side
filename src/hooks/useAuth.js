import { useContext } from "react"
import { AuthContext } from "../contxt/AuthProvider"

const useAuth = () => {
    return useContext(AuthContext);
}

export default useAuth;