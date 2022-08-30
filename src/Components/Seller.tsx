import React from "react";
import { Typography, TextField, Container } from "@mui/material";

type sellerType = {
  sellerInputs: {
    sellerCompanyName: string;
    sellerAddress: string;
    sellerCompanyCode: string;
    sellerBankAcc: string;
  };

  setSellerInputs: React.Dispatch<React.SetStateAction<any>>;
};

const Seller = ({ sellerInputs, setSellerInputs }: sellerType) => {
  return (
    <Container maxWidth="xs">
      <Typography variant="h5" sx={{ marginBottom: "1rem" }}>
        Pardavėjas
      </Typography>

      <Container style={{ display: "flex", flexDirection: "column" }}>
        <TextField
          sx={{ marginBottom: "0.5rem" }}
          variant="outlined"
          label="UAB Įmonė"
          value={sellerInputs.sellerCompanyName}
          onChange={(e) => {
            setSellerInputs({
              ...sellerInputs,
              sellerCompanyName: e.target.value,
            });
          }}
        ></TextField>
        <TextField
          sx={{ marginBottom: "0.5rem" }}
          variant="outlined"
          label="Įmonės adresas"
          value={sellerInputs.sellerAddress}
          onChange={(e) => {
            setSellerInputs({
              ...sellerInputs,
              sellerAddress: e.target.value,
            });
          }}
        ></TextField>
        <TextField
          sx={{ marginBottom: "0.5rem" }}
          variant="outlined"
          label="Įmonės kodas"
          value={sellerInputs.sellerCompanyCode}
          onChange={(e) => {
            setSellerInputs({
              ...sellerInputs,
              sellerCompanyCode: e.target.value,
            });
          }}
        ></TextField>
        <TextField
          sx={{ marginBottom: "0.5rem" }}
          variant="outlined"
          label="Banko sąskaita"
          value={sellerInputs.sellerBankAcc}
          onChange={(e) => {
            setSellerInputs({
              ...sellerInputs,
              sellerBankAcc: e.target.value,
            });
          }}
        ></TextField>
      </Container>
    </Container>
  );
};

export default Seller;
