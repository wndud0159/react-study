// hrml2pdf padding bottom 4 required
import * as html2pdf from "html2pdf.js";
import axios from "axios";

export default function Result() {
  const ClickPDFDownloadHandler = () => {
    const data = document.getElementById("capture") as HTMLDivElement;
    const options = {
      filename: `test.pdf`,
      margin: [0, 10, 0, 10],
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: {
        scale: 2,
        letterRendering: true,
      },
      jsPDF: {
        unit: "mm",
        format: "a4",
        orientation: "portrait",
        // compressPDF: true,
      },
    };
    try {
      html2pdf()
        .set(options)
        .from(data)
        .toPdf()
        .output("bloburl")
        .then(async (result: any) => {
          const pdf = await fetch(result)
            .then((r) => r.blob())
            .then(
              (blobFile) =>
                new File([blobFile], "pdffile", {
                  type: "application/pdf",
                })
            );
          const blobUrl = window.URL.createObjectURL(pdf);
          axios({
            url: blobUrl,
            method: "GET",
            responseType: "blob",
            headers: {
              "Content-Type": "application/pdf",
            },
          })
            .then((response) => {
              const url = window.URL.createObjectURL(new Blob([response.data]));
              const link = document.createElement("a");
              link.href = url;
              link.setAttribute("download", `realfilename.pdf`);
              document.body.appendChild(link);
              link.click();
            })
            .catch((error) => {
              console.log("fail", error.message);
            });
        });
    } catch (error) {
      alert("html2pdf error");
    }
  };

  return (
    <div>
      <div id="capture"></div>
    </div>
  );
}
