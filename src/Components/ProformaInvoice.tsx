import { useState } from "react";
import { Container, Button, Box, Typography } from "@mui/material";
import Buyer from "./Buyer";
import GoodsSold from "./GoodsSold";
import Seller from "./Seller";
import NumberAndDate from "./NumberAndDate";

import PdfDocument from "./PdfDocument";

type sellerType = {
  company: string;
  address: string;
  companyCode: number;
  bankAccNr: string;
  bankSwiftCode: string;
  bankName: string;
};
type buyerType = {
  company: string;
  address: string;
  code: number;
};

type numberAndDateType = {
  proformaNumber: string;
  proformaDate: string;
};

type goodsType = {
  goodsName: string;
  unit: string;
  quantity: number;
  price: number;
};

const ProformaInvoice = () => {
  const [seller, setSeller] = useState<sellerType>();
  const [buyer, setBuyer] = useState<buyerType>();
  const [goods, setGoods] = useState<goodsType>();
  const [numberAndDate, setNumberAndDate] = useState<numberAndDateType>();

  const [getDataFromComponents, setGetDataFromComponents] =
    useState<boolean>(false);

  const submitHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setGetDataFromComponents((prevState) => !prevState);
  };

  return (
    <>
      <Typography variant="h3" align="center">
        Išankstinė sąskaita-faktūra
      </Typography>
      <NumberAndDate
        setNumberAndDate={setNumberAndDate}
        trigger={getDataFromComponents}
      />
      <Container sx={{ display: "flex", flexDirection: "row" }}>
        <Seller setSeller={setSeller} trigger={getDataFromComponents} />
        <Buyer setBuyer={setBuyer} trigger={getDataFromComponents} />
      </Container>
      <GoodsSold setGoods={setGoods} trigger={getDataFromComponents} />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {seller === undefined && (
          <Button variant="text" onClick={submitHandler}>
            Gaminti proformą
          </Button>
        )}
      </Box>
      <PdfDocument
        seller={seller!}
        buyer={buyer!}
        goods={goods!}
        numberAndDate={numberAndDate!}
        setSeller={setSeller}
      />
    </>
  );
};

export default ProformaInvoice;
