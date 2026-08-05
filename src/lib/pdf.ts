import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

/**
 * Rasterises the on-screen invoice document and writes it into an A4 PDF.
 * Multi-page safe: tall documents are sliced across pages.
 */
export async function exportInvoicePdf(element: HTMLElement, fileName: string) {
  const canvas = await html2canvas(element, {
    scale: 2,
    backgroundColor: "#ffffff",
    useCORS: true,
    logging: false,
  });

  const pdf = new jsPDF({ unit: "pt", format: "a4", compress: true });
  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();

  const imgWidth = pageWidth;
  const imgHeight = (canvas.height * imgWidth) / canvas.width;

  if (imgHeight <= pageHeight) {
    pdf.addImage(canvas.toDataURL("image/jpeg", 0.95), "JPEG", 0, 0, imgWidth, imgHeight);
  } else {
    const pageCanvasHeight = Math.floor((canvas.width * pageHeight) / pageWidth);
    let offset = 0;
    let first = true;
    while (offset < canvas.height) {
      const slice = document.createElement("canvas");
      slice.width = canvas.width;
      slice.height = Math.min(pageCanvasHeight, canvas.height - offset);
      const ctx = slice.getContext("2d");
      if (!ctx) break;
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, slice.width, slice.height);
      ctx.drawImage(canvas, 0, -offset);
      if (!first) pdf.addPage();
      pdf.addImage(
        slice.toDataURL("image/jpeg", 0.95),
        "JPEG",
        0,
        0,
        imgWidth,
        (slice.height * imgWidth) / slice.width,
      );
      first = false;
      offset += slice.height;
    }
  }

  pdf.save(fileName.endsWith(".pdf") ? fileName : `${fileName}.pdf`);
}

export function safeFileName(invoiceNumber: string, client: string) {
  const clean = (v: string) => v.trim().replace(/[^a-z0-9-_]+/gi, "-").replace(/^-|-$/g, "");
  return `invoice-${clean(invoiceNumber) || "draft"}${client ? `-${clean(client)}` : ""}.pdf`.toLowerCase();
}
