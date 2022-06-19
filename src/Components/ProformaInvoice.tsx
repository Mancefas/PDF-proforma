import { useState } from "react";
import { Container, Button, Box } from "@mui/material";
import Buyer from "./Buyer";
import GoodsSold from "./GoodsSold";
import ProformaSign from "./ProformaSign";
import Seller from "./Seller";
import Totals from "./Totals";

type sellerType = {
  sellerCompany: string;
  sellerAddress: string;
  sellerCompanyCode: number | null;
  sellerBankAccNr: string;
  sellerBankCode: string;
  sellerBankName: string;
};
type buyerType = {
  company: string;
  adress: string;
  code: number;
};

const ProformaInvoice = () => {
  const [formInputs, setFormInputs] = useState({});
  const [seller, setSeller] = useState<sellerType | null>(null);
  const [buyer, setBuyer] = useState<buyerType | {}>({});

  const submitHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setFormInputs({
      seller: seller,
      buyer: buyer,
    });
  };

  return (
    <>
      <ProformaSign />
      <Container sx={{ display: "flex", flexDirection: "row" }}>
        <Seller setSeller={setSeller} />
        <Buyer setBuyer={setBuyer} />
      </Container>
      <GoodsSold />
      <Totals />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button variant="text" onClick={submitHandler}>
          Gauti proforma
        </Button>
      </Box>
    </>
  );
};

export default ProformaInvoice;
