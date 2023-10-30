import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import { IconButton, Stack, Typography } from "@mui/material";
import { useContext } from "react";
import { myContext } from "./Context";

function CartAmount() {
  const { quantity, decQty, incQty } = useContext(myContext);

  return (
    <Stack direction="row" alignItems="center">
      <IconButton onClick={decQty} sx={{ color: "#ee9ca7" }}>
        <RemoveCircleOutlineOutlinedIcon />
      </IconButton>
      <Typography fontSize="20px" width="25px" textAlign="center">
        {quantity}
      </Typography>
      <IconButton onClick={incQty} sx={{ color: "#ee9ca7" }}>
        <AddCircleOutlineOutlinedIcon />
      </IconButton>
    </Stack>
  );
}

export default CartAmount;
