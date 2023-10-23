import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import { IconButton, Stack, Typography } from "@mui/material";

function CartAmount({ quantity, setQuantity }) {
  const setIncrease = () => {
    quantity < 10 ? setQuantity(quantity + 1) : setQuantity(quantity);
  };
  const setDecrease = () => {
    quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1);
  };

  return (
    <Stack direction="row" alignItems="center">
      <IconButton onClick={setDecrease} sx={{ color: "#ee9ca7" }}>
        <RemoveCircleOutlineOutlinedIcon />
      </IconButton>
      <Typography fontSize="20px" width="25px" textAlign="center">
        {quantity}
      </Typography>
      <IconButton onClick={setIncrease} sx={{ color: "#ee9ca7" }}>
        <AddCircleOutlineOutlinedIcon />
      </IconButton>
    </Stack>
  );
}

export default CartAmount;
