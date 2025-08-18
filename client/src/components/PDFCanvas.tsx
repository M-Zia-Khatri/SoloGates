import { useEffect, useRef } from "react";
import * as pdfjsLib from "pdfjs-dist";

// Set the PDF.js worker
pdfjsLib.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.js";

type PDFCanvasProps = {
    fileUrl: string;
    page?: number;
    scale?: number;
    className?: string;
};

const PDFCanvas = ({
    fileUrl,
    page = 1,
    scale = 1.5,
    className = "",
}: PDFCanvasProps) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        let isMounted = true;
        let renderTask: pdfjsLib.RenderTask | null = null;

        const renderPDF = async () => {
            try {
                const loadingTask = pdfjsLib.getDocument(fileUrl);
                const pdf = await loadingTask.promise;
                const pdfPage = await pdf.getPage(page);

                const viewport = pdfPage.getViewport({ scale });
                const canvas = canvasRef.current;
                if (!canvas || !isMounted) return;

                const context = canvas.getContext("2d");
                if (!context) return;

                canvas.height = viewport.height;
                canvas.width = viewport.width;

                renderTask = pdfPage.render({
                    canvasContext: context,
                    viewport,
                    canvas
                });
                await renderTask.promise;
            } catch (error) {
                console.error("Failed to render PDF:", error);
            }
        };

        renderPDF();

        return () => {
            isMounted = false;
            if (renderTask) {
                renderTask.cancel();
            }
        };
    }, [fileUrl, page, scale]);

    return (
        <canvas
            ref={canvasRef}
            className={className}
            role="img"
            aria-label={`PDF page ${page}`}
            style={{ width: "100%", height: "100", display: "block" }}
        />
    );
};

export default PDFCanvas;
