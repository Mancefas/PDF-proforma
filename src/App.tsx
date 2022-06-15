import "./App.css";
import ReactDOMServer from "react-dom/server";
import jsPDF from "jspdf";
import ProformaInvoice from "./Components/ProformaInvoice";
const doc = new jsPDF();
const Foo = <b>foo</b>;

function App() {
  const save = () => {
    doc.html(ReactDOMServer.renderToStaticMarkup(Foo), {
      callback: () => {
        doc.save("myDocument.pdf");
      },
    });
  };

  return (
    <>
      <ProformaInvoice />

      <div>
        <button onClick={save}>save</button>
      </div>
    </>
  );
}

export default App;
