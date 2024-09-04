import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Alert, Snackbar } from "@mui/material";
import * as action from "../../../redux/reducer";

function Template3({ children }) {
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(action.Message({ open: false })); // Closing the message
  };
  const message = useSelector((state) => state.message);
  const open = useSelector((state) => state.open);
  const error = useSelector((state) => state.error);
  return (
    <>
      <div className="w-full">{children}</div>
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={!error ? "success" : "error"}
          sx={{ width: "100%" }}
        >
          {message}
        </Alert>
      </Snackbar>
    </>
  );
}
export default Template3;
