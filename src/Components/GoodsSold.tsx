import { Typography, TextField, Box, Container } from "@mui/material";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";

import { goodsTypes } from "../types.model";

type goodsSoldType = {
  goodsSoldInputs: goodsTypes;
  setGoodsSoldInputs: React.Dispatch<React.SetStateAction<any>>;
};

const GoodsSold = ({ goodsSoldInputs, setGoodsSoldInputs }: goodsSoldType) => {
  return (
    <Container maxWidth="xs">
      <Box sx={{ display: "flex", gap: "1rem" }}>
        <EventAvailableIcon fontSize="large" color="info" />
        <Typography variant="h5" sx={{ marginBottom: "1rem" }}>
          Prekė / Paslauga
        </Typography>
      </Box>
      <Box sx={{ display: "flex" }}>
        <TextField
          sx={{ marginBottom: "0.5rem" }}
          variant="outlined"
          label="Prekės pavadinimas"
          value={goodsSoldInputs.goodsName}
          onChange={(e) =>
            setGoodsSoldInputs({
              ...goodsSoldInputs,
              goodsName: e.target.value,
            })
          }
        ></TextField>
        <TextField
          sx={{ marginBottom: "0.5rem" }}
          variant="outlined"
          label="Mato vnt."
          value={goodsSoldInputs.unit}
          onChange={(e) =>
            setGoodsSoldInputs({ ...goodsSoldInputs, unit: e.target.value })
          }
        ></TextField>
        <TextField
          sx={{ marginBottom: "0.5rem" }}
          variant="outlined"
          label="Kiekis"
          value={goodsSoldInputs.quantity}
          onChange={(e) =>
            setGoodsSoldInputs({
              ...goodsSoldInputs,
              quantity: e.target.value,
            })
          }
        ></TextField>
        <TextField
          sx={{ marginBottom: "0.5rem" }}
          variant="outlined"
          label="Kaina"
          value={goodsSoldInputs.price}
          onChange={(e) =>
            setGoodsSoldInputs({ ...goodsSoldInputs, price: e.target.value })
          }
        ></TextField>
      </Box>
    </Container>
  );
};

export default GoodsSold;
