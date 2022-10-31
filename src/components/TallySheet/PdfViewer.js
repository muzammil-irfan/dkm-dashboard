import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { useParams } from "react-router-dom";
import { awsPdfHost } from "../../utils/backendHost";
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

export default function PdfViewer() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  const { id } = useParams();
  return (
    <div className="">
      <Document file={awsPdfHost + id} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <div className="flex items-center justify-between">
        <p>
          Page {pageNumber} of {numPages}
        </p>
        <div className="flex gap-2 items-center">
          <button
            className="btn btn-sm bg-slate-900"
            onClick={() => setPageNumber(pageNumber - 1)}
            disabled={pageNumber === 1}
          >
            Prev
          </button>
          <button
            className="btn btn-sm bg-slate-900"
            onClick={() => setPageNumber(pageNumber + 1)}
            disabled={pageNumber === numPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
