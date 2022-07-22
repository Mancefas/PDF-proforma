import { useState } from "react";
import { Button, Box, Typography, Grid } from "@mui/material";
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
        Sąskaita proforma
      </Typography>

      <NumberAndDate
        setNumberAndDate={setNumberAndDate}
        trigger={getDataFromComponents}
      />

      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="flex-start"
        columns={{ sm: 12 }}
        rowSpacing={1}
      >
        <Grid item>
          <Seller setSeller={setSeller} trigger={getDataFromComponents} />
        </Grid>
        <Grid item>
          <Buyer setBuyer={setBuyer} trigger={getDataFromComponents} />
        </Grid>
      </Grid>

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
        setBuyer={setBuyer}
        setGoods={setGoods}
        setNumberAndDate={setNumberAndDate}
      />
    </>
  );
};

export default ProformaInvoice;
