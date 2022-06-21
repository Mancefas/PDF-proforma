import { jsPDF } from "jspdf";

const PdfDocument = ({ formInputs = () => {} }: any) => {
  const createPDFDif = () => {
    const doc = new jsPDF("portrait", "pt", "a4");
    doc.text("Proforma invoice", 250, 20);

    // Seller Component in pdf
    doc.text("Pardavėjas", 50, 75);
    const seller = [
      `${formInputs.seller.sellerCompany}`,
      `${formInputs.seller.sellerAddress}`,
      `${formInputs.seller.sellerCompanyCode}`,
      `${formInputs.seller.sellerBankCode}`,
      `${formInputs.seller.sellerBankCode}`,
      `${formInputs.seller.sellerBankName}`,
    ];
    doc.text(seller, 50, 100);

    // Buyer component in pdf
    doc.text("Pirkėjas", 400, 75);
    const buyer = [
      `${formInputs.buyer.company}`,
      `${formInputs.buyer.adresas}`,
      `${formInputs.buyer.code}`,
    ];
    doc.text(buyer, 400, 100);

    doc.save("demo.pdf");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "2rem",
        marginTop: "2rem",
        width: "100%",
        height: "100%",
      }}
    >
      <h2>Proforma</h2>
      <p>Nihil quam soluta sed enim aut omnis voluptatem reprehenderit.</p>
      {/* only div with id='pdf' is exported to pdf document */}
      <div
        id="pdf"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h3>Proforma invoice</h3>
        </div>
        <p>Pardavejo imone</p>
        <p>Pardavejo adresas</p>
        <p>Imones kodas</p>
      </div>
      <button onClick={createPDFDif} type="button">
        Atsisiųsti
      </button>
    </div>
  );
};

export default PdfDocument;
