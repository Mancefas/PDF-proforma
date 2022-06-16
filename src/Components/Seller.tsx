import { useState } from "react";
import { Typography, TextField, Container, Button } from "@mui/material";

// for DRY later
const dataFields = [
  { id: "1", label: "UAB Įmonė", name: "sellerCompany", type: "text" },
  {
    id: "2",
    label: "Įmonės adresas",
    name: "sellerCompanyAddress",
    type: "text",
  },
  { id: "3", label: "Įmonės kodas", name: "sellerCompanyCode", type: "number" },
  { id: "4", label: "Banko sąskaita", name: "sellerBankAcc", type: "text" },
  { id: "5", label: "Banko kodas", name: "sellerBankSwiftCode", type: "text" },
  { id: "6", label: "Bankas", name: "sellerBankName", type: "text" },
];

type sellerType = {
  sellerCompany: string;
  sellerAddress: string;
  sellerCompanyCode: number | null;
  sellerBankAccNr: string;
  sellerBankCode: string;
  sellerBankName: string;
};

const Seller = () => {
  const [sellerCompany, setSellerCompany] = useState<string>("");
  const [sellerAddress, setSellerAddress] = useState<string>("");
  const [sellerCompanyCode, setSellerCompanyCode] = useState<number | null>(
    null
  );
  const [sellerBankAccNr, setSellerBankAccNr] = useState<string>("");
  const [sellerBankCode, setSellerBankCode] = useState<string>("");
  const [sellerBankName, setSellerBankName] = useState<string>("");

  const [seller, setSeller] = useState<sellerType | null>(null);

  const inputHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "sellerCompany") {
      setSellerCompany(value);
    } else if (name === "sellerCompanyAddress") {
      setSellerAddress(value);
    } else if (name === "sellerCompanyCode") {
      setSellerCompanyCode(+value);
    } else if (name === "sellerBankAcc") {
      setSellerBankAccNr(value);
    } else if (name === "sellerBankSwiftCode") {
      setSellerBankCode(value);
    } else if (name === sellerBankName) {
      setSellerBankName(value);
    }
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSeller({
      sellerCompany: sellerCompany,
      sellerAddress: sellerAddress,
      sellerCompanyCode: sellerCompanyCode,
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
        {dataFields.map((element) => (
          <TextField
            key={element.id}
            variant="outlined"
            label={element.label}
            name={element.name}
            type={element.type}
            onChange={inputHandler}
          ></TextField>
        ))}
        <Button variant="text" type="submit">
          Įvesti
        </Button>
      </form>
    </Container>
  );
};

export default Seller;
