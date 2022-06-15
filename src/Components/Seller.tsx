import { useState } from "react";
import { Typography, TextField, Container, Button } from "@mui/material";

// for DRY later
const dataFields = [
  { label: "UAB Įmonė", set: "setSellerCompany(e)" },
  { label: "Įmonės adresas", set: "setSellerAddress(e)" },
  { label: "Įmonės kodas", set: "setSellerBankAccNr(e)" },
  { label: "Banko sąskaita", set: "setSellerBankAccNr(e)" },
  { label: "Banko kodas", set: "setSellerBankCode(e)" },
  { label: "Bankas", set: "setSellerBankName(e)" },
];

type sellerType = {
  sellerCompany: string;
  sellerAddress: string;
  sellerBankAccNr: string;
  sellerBankCode: string;
  sellerBankName: string;
};

const Seller = () => {
  const [sellerCompany, setSellerCompany] = useState<string>("");
  const [sellerAddress, setSellerAddress] = useState<string>("");
  const [sellerBankAccNr, setSellerBankAccNr] = useState<string>("");
  const [sellerBankCode, setSellerBankCode] = useState<string>("");
  const [sellerBankName, setSellerBankName] = useState<string>("");

  const [seller, setSeller] = useState<sellerType | null>(null);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSeller({
      sellerCompany: sellerCompany,
      sellerAddress: sellerAddress,
      sellerBankAccNr: sellerBankAccNr,
      sellerBankCode: sellerBankCode,
      sellerBankName: sellerBankName,
    });
  };
  return (
    <Container maxWidth="xs">
      <Typography variant="h5">Pardavėjas</Typography>

      <form
        onSubmit={submitHandler}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <TextField
          variant="outlined"
          label="UAB Įmonė"
          onChange={(e) => setSellerCompany(e.target.value)}
        ></TextField>
        <TextField
          variant="outlined"
          label="Įmonės adresas"
          onChange={(e) => setSellerAddress(e.target.value)}
        ></TextField>
        <TextField
          variant="outlined"
          label="Įmonės kodas"
          onChange={(e) => setSellerBankAccNr(e.target.value)}
        ></TextField>
        <TextField
          variant="outlined"
          label="Banko sąskaita"
          onChange={(e) => setSellerBankCode(e.target.value)}
        ></TextField>
        <TextField
          variant="outlined"
          label="Banko kodas"
          onChange={(e) => setSellerBankCode(e.target.value)}
        ></TextField>
        <TextField
          variant="outlined"
          label="Bankas"
          onChange={(e) => setSellerBankName(e.target.value)}
        ></TextField>
        <Button variant="text" type="submit">
          Įvesti
        </Button>
      </form>
    </Container>
  );
};

export default Seller;
