import { Typography, TextField, Box, Container } from "@mui/material";

type goodsSoldType = {
  goodsSoldInputs: {
    goodsName: string;
    unit: string;
    quantity: number;
    price: number;
  };
  setGoodsSoldInputs: React.Dispatch<React.SetStateAction<any>>;
};

const GoodsSold2 = ({ goodsSoldInputs, setGoodsSoldInputs }: goodsSoldType) => {
  return (
    <Container maxWidth="xs">
      <Typography variant="h5" sx={{ marginBottom: "1rem" }}>
        Pirkėjas
      </Typography>
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

export default GoodsSold2;
