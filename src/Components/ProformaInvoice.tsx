import { useEffect, useState } from "react";
import { Container, Button, Box } from "@mui/material";
import Buyer from "./Buyer";
import GoodsSold from "./GoodsSold";
import ProformaSign from "./ProformaSign";
import Seller from "./Seller";
import Totals from "./Totals";

import PdfDocument from "./PdfDocument";

type sellerType = {
  company: string;
  address: string;
  companyCode: number | null;
  bankAccNr: string;
  bankSwiftCode: string;
  bankName: string;
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
  const [seller, setSeller] = useState<sellerType | null>(null);
  const [buyer, setBuyer] = useState<buyerType | null>(null);
  const [goods, setGoods] = useState<goodsType | null>(null);
  const [totalAndPayDate, setTotalAndPayDate] = useState<objectType | null>(
    null
  );

  const [getDataFromComponents, setGetDataFromComponents] =
    useState<boolean>(false);

  const submitHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setGetDataFromComponents(true);
  };

  return (
    <>
      <ProformaSign />
      <Container sx={{ display: "flex", flexDirection: "row" }}>
        <Seller setSeller={setSeller} trigger={getDataFromComponents} />
        <Buyer setBuyer={setBuyer} trigger={getDataFromComponents} />
      </Container>
      <GoodsSold setGoods={setGoods} trigger={getDataFromComponents} />
      <Totals
        setTotalAndPayDate={setTotalAndPayDate}
        trigger={getDataFromComponents}
      />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {!seller && !buyer && !goods && (
          <Button variant="text" onClick={submitHandler}>
            Gaminti proformą
          </Button>
        )}
      </Box>
      <PdfDocument seller={seller} buyer={buyer} goods={goods} />
    </>
  );
};

export default ProformaInvoice;
