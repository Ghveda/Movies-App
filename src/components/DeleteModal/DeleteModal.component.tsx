import { Button } from "@mui/material";
import React from "react";
import { createPortal } from "react-dom";

const DeleteModal = () => {
  return createPortal(
    <div className="bg-black/70 absolute top-0 left-0 w-full h-full flex justify-center items-center">
      <div className="w-[600px] bg-white flex flex-col gap-5 p-6">
        <div className="flex flex-row justify-between">
          <h1>Delete Movie?</h1>
          <span>X</span>
        </div>
        <p>
          Are you sure you want to delete this movie? This action is destructive
          and you will have to contact support to restore your data.
        </p>
        <div className="flex justify-end gap-4">
          <Button color="inherit" variant="outlined">
            No don't delete it
          </Button>
          <Button color="error" variant="contained">
            Delete Movie
          </Button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default DeleteModal;
