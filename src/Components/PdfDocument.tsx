import { jsPDF } from "jspdf";
import { Box, Button } from "@mui/material";

const PdfDocument = ({ formInputs = () => {} }: any) => {
  const createPDFDif = () => {
    const doc = new jsPDF("portrait", "pt", "a4");
    doc.addFont("/Fonts/Roboto-normal.ttf", "Roboto", "normal");

    //Proforma sign, number, date
    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);
    doc.text("Proforma invoice", 220, 40);

    doc.setFont("times", "normal");
    doc.setFontSize(16);

    const proformaNumberDate = ["Numeris", "Data"];
    doc.text(proformaNumberDate, 250, 70);

    // Seller Component in pdf
    doc.setFont("Roboto", "normal");

    doc.text("Pardavėjas", 50, 150);
    const seller = [
      `${formInputs.seller.sellerCompany}`,
      `${formInputs.seller.sellerAddress}`,
      `${formInputs.seller.sellerCompanyCode}`,
      `${formInputs.seller.sellerBankCode}`,
      `${formInputs.seller.sellerBankCode}`,
      `${formInputs.seller.sellerBankName}`,
    ];
    doc.text(seller, 50, 175);

    // Buyer component in pdf
    doc.text("Pirkėjas", 425, 150);
    const buyer = [
      `${formInputs.buyer.company}`,
      `${formInputs.buyer.adress}`,
      `${formInputs.buyer.code}`,
    ];
    doc.text(buyer, 425, 175);

    //Goods component in pdf
    doc.setFontSize(12);

    const goodsName = ["Prekės pavadinimas", "Name of goods"];
    doc.text(goodsName, 20, 400);

    const units = ["Mato vnt.", "m2"];
    doc.text(units, 200, 400);

    const quantity = ["Kiekis", "2"];
    doc.text(quantity, 300, 400);

    const priceOneUnit = ["Kaina", "100"];
    doc.text(priceOneUnit, 400, 400);

    const totalPrice = ["Suma EUR", "200"];
    doc.text(totalPrice, 500, 400);

    //Numbers in words and due date in pdf
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
      {formInputs.seller && (
        <Button variant="contained" onClick={createPDFDif} type="button">
          Atsisiųsti proformą
        </Button>
      )}
    </Box>
  );
};

export default PdfDocument;
