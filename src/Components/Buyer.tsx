import React from "react";
import { Container, Box, TextField, Typography } from "@mui/material";

type buyerProps = {
  buyerInputs: {
    buyerCompanyName: string;
    buyerAddress: string;
    buyerCompanyCode: string;
  };
  setBuyerInputs: React.Dispatch<React.SetStateAction<any>>;
};

const Buyer = ({ buyerInputs, setBuyerInputs }: buyerProps) => {
  return (
    <Container maxWidth="xs">
      <Typography variant="h5" sx={{ marginBottom: "1rem" }}>
        Pirkėjas
      </Typography>
      <Box>
        <Container style={{ display: "flex", flexDirection: "column" }}>
          <TextField
            sx={{ marginBottom: "0.5rem" }}
            variant="outlined"
            label="UAB Įmonė"
            value={buyerInputs.buyerCompanyName}
            onChange={(e) => {
              setBuyerInputs({
                ...buyerInputs,
                buyerCompanyName: e.target.value,
              });
            }}
          ></TextField>
          <TextField
            sx={{ marginBottom: "0.5rem" }}
            variant="outlined"
            label="Įmonės adresas"
            value={buyerInputs.buyerAddress}
            onChange={(e) => {
              setBuyerInputs({
                ...buyerInputs,
                buyerAddress: e.target.value,
              });
            }}
          ></TextField>
          <TextField
            sx={{ marginBottom: "0.5rem" }}
            variant="outlined"
            label="Įmonės kodas"
            value={buyerInputs.buyerCompanyCode}
            onChange={(e) => {
              setBuyerInputs({
                ...buyerInputs,
                buyerCompanyCode: e.target.value,
              });
            }}
          ></TextField>
        </Container>
      </Box>
    </Container>
  );
};

export default Buyer;
