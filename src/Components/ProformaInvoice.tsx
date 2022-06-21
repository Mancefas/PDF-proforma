import { useState } from "react";
import { Container, Button, Box } from "@mui/material";
import Buyer from "./Buyer";
import GoodsSold from "./GoodsSold";
import ProformaSign from "./ProformaSign";
import Seller from "./Seller";
import Totals from "./Totals";

import PdfDocument from "./PdfDocument";

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

type objectType = {
  totalAmount: string;
  payUntilDate: string;
};

type goodsType = {
  goodsName: string;
  unit: string;
  quantity: number | null;
  price: number | null;
  totalPrice: number | null;
};

const ProformaInvoice = () => {
  const [formInputs, setFormInputs] = useState({});

  const [seller, setSeller] = useState<sellerType | null>(null);
  const [buyer, setBuyer] = useState<buyerType | null>(null);
  const [goods, setGoods] = useState<goodsType | null>(null);
  const [totalAndPayDate, setTotalAndPayDate] = useState<objectType | null>(
    null
  );

  const submitHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (
      seller != null &&
      buyer != null &&
      goods != null &&
      totalAndPayDate != null
    ) {
      setFormInputs({
        seller: seller,
        buyer: buyer,
        goods: goods,
        totalAndPayDate: totalAndPayDate,
      });
    }
  };

  return (
    <>
      <ProformaSign />
      <Container sx={{ display: "flex", flexDirection: "row" }}>
        <Seller setSeller={setSeller} />
        <Buyer setBuyer={setBuyer} />
      </Container>
      <GoodsSold setGoods={setGoods} />
      <Totals setTotalAndPayDate={setTotalAndPayDate} />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button variant="text" onClick={submitHandler}>
          Daryti proformą
        </Button>
      </Box>
      <PdfDocument formInputs={formInputs} />
    </>
  );
};

export default ProformaInvoice;
