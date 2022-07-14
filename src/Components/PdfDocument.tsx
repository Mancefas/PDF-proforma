import { jsPDF } from "jspdf";
import { Box, Button } from "@mui/material";

type PdfDocumentProps = {
  numberAndDate: {
    proformaNumber: string;
    proformaDate: string;
  };
  seller: {
    company: string;
    address: string;
    companyCode: number;
    bankAccNr: string;
    bankSwiftCode: string;
    bankName: string;
  };
  buyer: {
    company: string;
    address: string;
    code: number;
  };
  goods: {
    goodsName: string;
    unit: string;
    quantity: number;
    price: number;
  };
  setBuyer: React.Dispatch<
    React.SetStateAction<
      | {
          company: string;
          address: string;
          code: number;
        }
      | undefined
    >
  >;
  setSeller: React.Dispatch<
    React.SetStateAction<
      | {
          company: string;
          address: string;
          companyCode: number;
          bankAccNr: string;
          bankSwiftCode: string;
          bankName: string;
        }
      | undefined
    >
  >;
  setGoods: React.Dispatch<
    React.SetStateAction<
      | {
          goodsName: string;
          unit: string;
          quantity: number;
          price: number;
        }
      | undefined
    >
  >;
  setNumberAndDate: React.Dispatch<
    React.SetStateAction<
      | {
          proformaNumber: string;
          proformaDate: string;
        }
      | undefined
    >
  >;
};

const PdfDocument = ({
  numberAndDate,
  seller,
  buyer,
  goods,
  setSeller,
  setBuyer,
  setGoods,
  setNumberAndDate,
}: PdfDocumentProps) => {
  const createPDFDif = () => {
    const doc = new jsPDF({ orientation: "p", unit: "cm", format: "a4" });
    doc.addFont("/Fonts/Roboto-normal.ttf", "Roboto", "normal");

    //Proforma sign, number, date
    doc.setFont("Roboto", "normal");
    doc.setFontSize(22);
    doc.setTextColor("blue");
    doc.text("Sąskaita proforma", 7, 2);
    doc.setTextColor("black");

    doc.setFont("times", "bold");
    doc.setFontSize(16);

    doc.text(numberAndDate.proformaNumber, 8, 3);
    doc.text(numberAndDate.proformaDate, 10, 3);

    // Seller Component in pdf
    doc.setFont("Roboto", "normal");

    doc.setTextColor("blue");
    doc.text("Pardavėjas", 3, 5);
    doc.setTextColor("black");
    doc.setFontSize(12);
    const sellerData = [
      `${seller.company}`,
      `${seller.address}`,
      `Įm.kodas ${seller.companyCode}`,
      `Banko sąsk ${seller.bankAccNr}`,
      `Banko SWIFT ${seller.bankSwiftCode}`,
      `Bankas ${seller.bankName}`,
    ];
    doc.text(sellerData, 3, 6);

    // Buyer component in pdf
    doc.setFontSize(16);
    doc.setTextColor("blue");
    doc.text("Pirkėjas", 14, 5);
    doc.setTextColor("black");
    doc.setFontSize(12);
    const buyerData = [
      `${buyer.company}`,
      `${buyer.address}`,
      `Įm. kodas ${buyer.code}`,
    ];
    doc.text(buyerData, 14, 6);

    //Goods component in pdf
    doc.setFontSize(12);
    doc.setLineHeightFactor(1.8);

    const goodsName = ["Prekės pavadinimas", `${goods.goodsName}`];
    doc.text(goodsName, 3, 12);

    const units = ["Mato vnt.", `${goods.unit}`];
    doc.text(units, 8, 12);

    const quantity = ["Kiekis", `${goods.quantity}`];
    doc.text(quantity, 12, 12);

    const priceOneUnit = ["Kaina", `${goods.price}`];
    doc.text(priceOneUnit, 16, 12);

    const totalPrice = ["Suma EUR", `${goods.quantity * goods.price}`];
    doc.text(totalPrice, 500, 12);

    //Numbers in words in pdf
    // doc.text("Viso suma žodžiais :", 150, 475);
    // doc.text(" pvz Du šimtai eurų", 300, 475);

    // Proforma issued by, received by
    const sellerWhoIssued = [
      "Sąskaitą išrašė",
      "......................................",
      "(vardas, pavardė)",
    ];
    doc.setLineHeightFactor(2.5);
    doc.text(sellerWhoIssued, 3, 20);

    const buyerWhoReceived = [
      "Sąskaitą priėmė",
      "......................................",
      "(vardas, pavardė)",
    ];
    doc.text(buyerWhoReceived, 14, 20);

    doc.save("proforma.pdf");

    // To get " Gaminti proforma" button to show again
    // Clean inputs for changes to show in PDF doc
    setNumberAndDate(undefined);
    setSeller(undefined);
    setBuyer(undefined);
    setGoods(undefined);
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
      {seller && buyer && goods && numberAndDate && (
        <Button variant="contained" onClick={createPDFDif} type="button">
          Atsisiųsti proformą
        </Button>
      )}
    </Box>
  );
};

export default PdfDocument;
