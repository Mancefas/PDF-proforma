import { Typography, Box, TextField, Container, Button } from "@mui/material";
import { useState } from "react";

type buyer = {
  company: string;
  adress: string;
  code: string;
};

const Buyer = () => {
  const [buyerCompanyName, setBuyerCompanyName] = useState<string>("");
  const [buyerCompanyAddress, setBuyerCompanyAddress] = useState<string>("");
  const [buyerCode, setBuyerCode] = useState<string>("");

  const [buyer, setBuyer] = useState<buyer | null>(null);

  const formSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setBuyer({
      company: buyerCompanyName,
      adress: buyerCompanyAddress,
      code: buyerCode,
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
            onChange={(e) => setBuyerCompanyName(e.target.value)}
          ></TextField>
          <TextField
            variant="outlined"
            label="Įmonės adresas"
            onChange={(e) => setBuyerCompanyAddress(e.target.value)}
          ></TextField>
          <TextField
            variant="outlined"
            label="Įmonės kodas"
            onChange={(e) => setBuyerCode(e.target.value)}
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
