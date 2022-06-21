import { jsPDF } from "jspdf";

const PdfDocument = () => {
  const createPDF = async () => {
    const pdf = new jsPDF("portrait", "pt", "a4");
    const element = (await document.querySelector("#pdf")) as HTMLElement;
    pdf.html(element).then(() => {
      pdf.save("proforma_invoice.pdf");
    });
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
      <button onClick={createPDF} type="button">
        Atsisiųsti
      </button>
    </div>
  );
};

export default PdfDocument;
