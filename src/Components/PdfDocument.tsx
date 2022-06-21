import { jsPDF } from "jspdf";
import { Box, Button } from "@mui/material";

const PdfDocument = ({ numberAndDate, seller, buyer, goods }: any) => {
  const createPDFDif = () => {
    const doc = new jsPDF("portrait", "pt", "a4");
    doc.addFont("/Fonts/Roboto-normal.ttf", "Roboto", "normal");

    //Proforma sign, number, date
    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);
    doc.text("Proforma invoice", 220, 40);

    doc.setFont("times", "normal");
    doc.setFontSize(16);

    const proformaNumberDate = [
      `${numberAndDate.proformaNumber}`,
      `${numberAndDate.proformaDate}`,
    ];
    doc.text(proformaNumberDate, 250, 70);

    // Seller Component in pdf
    doc.setFont("Roboto", "normal");

    doc.text("Pardavėjas", 50, 150);
    doc.setFontSize(12);
    const sellerData = [
      `${seller.company}`,
      `${seller.address}`,
      `Įm.kodas ${seller.companyCode}`,
      `Banko sąsk ${seller.bankAccNr}`,
      `Banko SWIFT ${seller.bankSwiftCode}`,
      `Bankas ${seller.bankName}`,
    ];
    doc.text(sellerData, 50, 175);

    // Buyer component in pdf
    doc.setFontSize(16);
    doc.text("Pirkėjas", 425, 150);
    doc.setFontSize(12);
    const buyerData = [
      `${buyer.company}`,
      `${buyer.adress}`,
      `Įm. kodas ${buyer.code}`,
    ];
    doc.text(buyerData, 425, 175);

    //Goods component in pdf
    doc.setFontSize(12);

    const goodsName = ["Prekės pavadinimas", `${goods.goodsName}`];
    doc.text(goodsName, 20, 400);

    const units = ["Mato vnt.", `${goods.unit}`];
    doc.text(units, 200, 400);

    const quantity = ["Kiekis", `${goods.quantity}`];
    doc.text(quantity, 300, 400);

    const priceOneUnit = ["Kaina", `${goods.price}`];
    doc.text(priceOneUnit, 400, 400);

    const totalPrice = ["Suma EUR", `${goods.quantity * goods.price}`];
    doc.text(totalPrice, 500, 400);

    //Numbers in words in pdf
    doc.text("Viso suma žodžiais :", 150, 475);
    doc.text(" pvz Du šimtai eurų", 300, 475);

    doc.save("proforma.pdf");
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "2rem",
        marginTop: "1rem",
      }}
    >
      {seller && buyer && goods && (
        <Button variant="contained" onClick={createPDFDif} type="button">
          Atsisiųsti proformą
        </Button>
      )}
    </Box>
  );
};

export default PdfDocument;
