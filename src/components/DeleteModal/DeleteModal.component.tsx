import { Button } from "@mui/material";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { cancelModal } from "store/slice/modalSlice";
import { StoreState } from "store/store";
import CloseIcon from "@mui/icons-material/Close";
import { useDeletePostMutation } from "store/api/postsApi";

const DeleteModal = () => {
  const dispatch = useDispatch();
  const { showModal, id } = useSelector((state: StoreState) => state.showModal);

  const [deletePost] = useDeletePostMutation();

  const handleDeleteClick = () => {
    deletePost({ id: id! });
    dispatch(cancelModal());
  };

  if (!showModal) return null;

  return createPortal(
    <div className="bg-black/70 fixed top-0 left-0 w-full h-full flex justify-center items-center">
      <div className="w-[600px] bg-white flex flex-col gap-5 p-6">
        <div className="flex flex-row justify-between">
          <h1>Delete Movie?</h1>
          <Button color="inherit" onClick={() => dispatch(cancelModal())}>
            <CloseIcon />
          </Button>
        </div>
        <p>
          Are you sure you want to delete this movie? This action is destructive
          and you will have to contact support to restore your data.
        </p>
        <div className="flex justify-end gap-4">
          <Button
            color="inherit"
            variant="outlined"
            onClick={() => dispatch(cancelModal())}
          >
            No don't delete it
          </Button>
          <Button color="error" variant="contained" onClick={handleDeleteClick}>
            Delete Movie
          </Button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default DeleteModal;
