import React from "react";
import { Typography, TextField, Container, Box } from "@mui/material";
import StorefrontIcon from "@mui/icons-material/Storefront";

import { sellerTypes } from "../types.model";

type sellerType = {
  sellerInputs: sellerTypes;
  setSellerInputs: React.Dispatch<React.SetStateAction<any>>;
};

const Seller = ({ sellerInputs, setSellerInputs }: sellerType) => {
  return (
    <Container maxWidth="xs">
      <Box sx={{ display: "flex", gap: "1rem" }}>
        <StorefrontIcon fontSize="large" color="info" />
        <Typography variant="h5" sx={{ marginBottom: "1rem" }}>
          Pardavėjas
        </Typography>
      </Box>

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
