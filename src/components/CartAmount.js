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
    <Stack direction="row">
      <button onClick={setDecrease}>
        <RemoveCircleOutlineOutlinedIcon />
      </button>
      <Typography fontSize="20px"> {quantity}</Typography>
      <button onClick={setIncrease}>
        <AddCircleOutlineOutlinedIcon />
      </button>
    </Stack>
  );
}

export default CartAmount;
