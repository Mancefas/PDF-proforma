import { useState } from "react";
import { Container, Box, Button, Typography } from "@mui/material";
import Buyer from "./Buyer";
import Seller from "./Seller";
import NumberAndDate from "./NumberAndDate";
import GoodsSold from "./GoodsSold";

const ProformaInvoice = () => {
  const [formPage, setFormPage] = useState<number>(0);

  const [numberAndDateInputs, setNumberAndDateInputs] = useState({
    proformaNumber: "",
    proformaDate: "",
  });
  const [sellerInputs, setSellerInputs] = useState({
    sellerCompanyName: "",
    sellerAddress: "",
    sellerCompanyCode: "",
    sellerBankAcc: "",
  });
  const [buyerInputs, setBuyerInputs] = useState({
    buyerCompanyName: "",
    buyerAddress: "",
    buyerCompanyCode: "",
  });
  const [goodsSoldInputs, setGoodsSoldInputs] = useState({
    goodsName: "",
    unit: "",
    quantity: 0,
    price: 0,
  });

  return (
    <>
      <Typography variant="h3" align="center">
        Sąskaita proforma
      </Typography>

      <Container sx={{ marginTop: "2rem" }}>
        {formPage === 0 && (
          <NumberAndDate
            numberAndDateInputs={numberAndDateInputs}
            setNumberAndDateInputs={setNumberAndDateInputs}
          />
        )}

        {formPage === 1 && (
          <Seller
            sellerInputs={sellerInputs}
            setSellerInputs={setSellerInputs}
          />
        )}

        {formPage === 2 && (
          <Buyer buyerInputs={buyerInputs} setBuyerInputs={setBuyerInputs} />
        )}

        {formPage === 3 && (
          <GoodsSold
            goodsSoldInputs={goodsSoldInputs}
            setGoodsSoldInputs={setGoodsSoldInputs}
          />
        )}
      </Container>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <Button
          variant="contained"
          disabled={formPage === 0}
          onClick={() => setFormPage(formPage - 1)}
        >
          Atgal
        </Button>
        <Button
          variant="contained"
          disabled={formPage === 3}
          onClick={() => setFormPage(formPage + 1)}
        >
          Toliau
        </Button>
      </Box>
    </>
  );
};

export default ProformaInvoice;
