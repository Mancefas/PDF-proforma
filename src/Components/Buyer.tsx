import { useRef } from "react";
import { Typography, Box, TextField, Container, Button } from "@mui/material";

// if needed to map fields later
// const dataFields = [
//   { id: 1, label: "UAB Įmonė", ref: "buyerCompanyName", type: "text" },
//   { id: 2, label: "Įmonės adresas", ref: "buyerCompanyAddress", type: "text" },
//   { id: 3, label: "Įmonės kodas", ref: "buyerCode", type: "number" },
// ];

const Buyer = ({ setBuyer = () => {} }: any) => {
  const buyerCompanyName = useRef<HTMLInputElement>(null);
  const buyerCompanyAddress = useRef<HTMLInputElement>(null);
  const buyerCode = useRef<HTMLInputElement>(null);

  const formSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setBuyer({
      company: buyerCompanyName.current?.value,
      adress: buyerCompanyAddress.current?.value,
      code: buyerCode.current?.value,
    });
  };

  return (
    <Container maxWidth="xs">
      <Typography variant="h5">Pirkėjas</Typography>
      <Box>
        <form
          onSubmit={formSubmitHandler}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <TextField
            variant="outlined"
            label="UAB Įmonė"
            inputRef={buyerCompanyName}
          ></TextField>
          <TextField
            variant="outlined"
            label="Įmonės adresas"
            inputRef={buyerCompanyAddress}
          ></TextField>
          <TextField
            variant="outlined"
            label="Įmonės kodas"
            type="number"
            inputRef={buyerCode}
          ></TextField>
          <Button variant="text" type="submit">
            Įvesti
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Buyer;
