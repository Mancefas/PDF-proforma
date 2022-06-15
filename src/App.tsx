import "./App.css";
import ReactDOMServer from "react-dom/server";
import jsPDF from "jspdf";
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
    <div>
      <button onClick={save}>save</button>
    </div>
  );
}

export default App;
