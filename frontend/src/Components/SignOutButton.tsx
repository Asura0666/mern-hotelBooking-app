import { useMutation, useQueryClient } from "react-query";
import * as apiClient from "../api-client";
import { useAppContext } from "../contexts/AppContext";

const SignOutButton = () => {
  const { showToast } = useAppContext();
  const queryClient = useQueryClient();
  const mutation = useMutation(apiClient.signOut, {
    onSuccess: async () => {
      await queryClient.invalidateQueries("validateToken");
      showToast({ message: "Signed Out!", type: "Success" });
    },
    onError: (error: Error) => {
      showToast({ message: error.message, type: "Error" });
    },
  });

  const handleClick = () => {
    mutation.mutate();
  };

  return (
    <button
      onClick={handleClick}
      className="flex bg-white items-center text-blue-600 px-4 py-2  font-bold hover:bg-gray-100"
    >
      Sign Out
    </button>
  );
};

export default SignOutButton;
