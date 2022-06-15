import { Container } from "@mui/material";
import Buyer from "./Buyer";
import GoodsSold from "./GoodsSold";
import ProformaSign from "./ProformaSign";
import Seller from "./Seller";
import Totals from "./Totals";

const ProformaInvoice = () => {
  return (
    <>
      <ProformaSign />
      <Container sx={{ display: "flex", flexDirection: "row" }}>
        <Seller />
        <Buyer />
      </Container>
      <GoodsSold />
      <Totals />
    </>
  );
};

export default ProformaInvoice;
