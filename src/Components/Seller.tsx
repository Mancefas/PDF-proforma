import { useState, useRef } from "react";
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
  const sellerCompany = useRef<HTMLInputElement>(null);
  const sellerAddress = useRef<HTMLInputElement>(null);
  const sellerCompanyCode = useRef<HTMLInputElement>(null);
  const sellerBankAccNr = useRef<HTMLInputElement>(null);
  const sellerBankSwiftCode = useRef<HTMLInputElement>(null);
  const sellerBankName = useRef<HTMLInputElement>(null);

  const [seller, setSeller] = useState<sellerType | null>(null);
  console.log(seller);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // if check to get all inputs before setSeller
    if (
      sellerCompany.current?.value &&
      sellerAddress.current?.value &&
      sellerCompanyCode.current?.value &&
      sellerBankAccNr.current?.value &&
      sellerBankSwiftCode.current?.value &&
      sellerBankName.current?.value
    ) {
      setSeller({
        sellerCompany: sellerCompany.current?.value,
        sellerAddress: sellerAddress.current?.value,
        sellerCompanyCode: +sellerCompanyCode.current?.value,
        sellerBankAccNr: sellerBankAccNr.current?.value,
        sellerBankCode: sellerBankSwiftCode.current?.value,
        sellerBankName: sellerBankName.current?.value,
      });
    }
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
            inputRef={
              element.name === "sellerCompany"
                ? sellerCompany
                : element.name === "sellerCompanyAddress"
                ? sellerAddress
                : element.name === "sellerCompanyCode"
                ? sellerCompanyCode
                : element.name === "sellerBankAcc"
                ? sellerBankAccNr
                : element.name === "sellerBankSwiftCode"
                ? sellerBankSwiftCode
                : element.name === "sellerBankName"
                ? sellerBankName
                : null
            }
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
