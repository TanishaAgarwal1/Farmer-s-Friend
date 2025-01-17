import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
    const { loading, logout } = useLogout();

    return (
        <div className="mt-auto">
            {!loading ? (
                <BiLogOut
                    className="w-8 h-8 text-black cursor-pointer"
                    style={{ fontSize: "32px" }} // Set icon size directly using style prop
                    onClick={logout}
                />
            ) : (
                <span className="loading loading-spinner"></span>
            )}
        </div>
    );
};

export default LogoutButton;
