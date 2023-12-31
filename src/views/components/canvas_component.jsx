import React, { forwardRef, useEffect, useRef, useState } from 'react';
import './canvas_style.scss';

const DrawingCanvas = forwardRef((props, ref) => {
    const render = (content) => {
        console.log(content);
        content.paragraphs.forEach(paragraph => {
            drawRoundedRect(
                paragraph.container.position.x,
                paragraph.container.position.y,
                paragraph.container.dimension.width,
                paragraph.container.dimension.height,
                paragraph.container.shape / 10,
                paragraph.container.color);

            paragraph.elements.forEach(element => {
                if (element.type == 'text') {
                    drawTextWithLineBreaks(
                        element.text,
                        paragraph.container.position.x + element.position.x,
                        paragraph.container.position.y + element.position.y + element.fontSize,
                        paragraph.container.dimension.width - 2 * element.position.x,
                        element.fontSize);
                } else {

                }
            });
        })
    };

    React.useImperativeHandle(ref, () => ({
        render
    }));

    const width = '100%';
    const standardWidth = 1000;
    const relativeHeight = 1.5;

    const [dimension, setDimension] = useState({ width: width, height: '500px' });

    const canvasRef = useRef(null);
    const contextRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        contextRef.current = context;
        canvas.width = canvas.parentElement.clientWidth;
        canvas.height = canvas.parentElement.clientWidth * relativeHeight;
        setDimension({ width: canvas.width, height: canvas.height })
        console.log(canvas.width, canvas.height);
    }, []);

    const drawImage = (x, y, size, width, borderRadiusPercentage) => {
        if (!contextRef.current) return;
        if (borderRadiusPercentage > 1 || borderRadiusPercentage < 0) return;
        const image = new Image();
        image.src = process.env.PUBLIC_URL + '/images/ar.jpg';
        x = convert(x);
        y = convert(y);
        width = convert(width);
        const ratio = image.height / image.width;
        const imageWidth = width * size;
        const imageHieght = width * ratio * size;

        // const borderRadius = borderRadiusPercentage * Math.min(imageWidth, imageHieght) / 2;

        // Ensure the image is loaded before attempting to draw it
        image.onload = () => {
            // contextRef.current.beginPath();
            // contextRef.current.moveTo(x + borderRadius, y);
            // contextRef.current.arcTo(x + imageWidth, y, x + imageWidth, y + imageHieght, borderRadius); // Top-left corner
            // contextRef.current.arcTo(x + imageWidth, y + imageHieght, x, y + imageHieght, borderRadius); // Top-right corner
            // contextRef.current.arcTo(x, y + imageHieght, x, y, borderRadius); // Bottom-right corner
            // contextRef.current.arcTo(x, y, x + imageWidth, y, borderRadius); // Bottom-left corner
            // contextRef.current.closePath();
            // contextRef.current.clip();
            contextRef.current.drawImage(image, x, y, imageWidth, imageHieght);
            // contextRef.current.restore();
        };
    }

    const drawTextWithLineBreaks = (text, x, y, maxWidth, fontSize) => {
        if (!contextRef.current) return;
        // Desired font properties
        const fontFamily = 'Arial';

        // Set the font property
        contextRef.current.font = `${convert(fontSize)}px ${fontFamily}`;
        contextRef.current.fillStyle = 'black';

        const words = text.split(' ');
        let currentLine = '';
        let currentY = convert(y);

        for (let i = 0; i < words.length; i++) {
            const word = words[i];
            const testLine = currentLine + (currentLine ? ' ' : '') + word;
            const { width } = contextRef.current.measureText(testLine);

            if (width <= convert(maxWidth)) {
                // If the current line width is within the limit, continue adding words to the line
                currentLine = testLine;
            } else {
                // If the current line width exceeds the limit, draw the current line and start a new line
                contextRef.current.fillText(currentLine, convert(x), currentY);
                currentLine = word;
                currentY += parseInt(contextRef.current.font, 10); // Move to the next line
            }
        }

        // Draw the last line (or the only line if it fits within the width)
        contextRef.current.fillText(currentLine, convert(x), currentY);
    };

    const drawRoundedRect = (x, y, width, height, borderRadiusPercentage, color) => {
        if (!contextRef.current) return;
        if (borderRadiusPercentage > 1 || borderRadiusPercentage < 0) return;
        x = convert(x);
        y = convert(y);
        width = convert(width);
        height = convert(height);
        const borderRadius = borderRadiusPercentage * Math.min(width, height) / 2;
        contextRef.current.fillStyle = color;
        contextRef.current.beginPath();
        contextRef.current.moveTo(x + borderRadius, y); // Top-left corner
        contextRef.current.arcTo(x + width, y, x + width, y + height, borderRadius); // Top-right corner 
        contextRef.current.arcTo(x + width, y + height, x, y + height, borderRadius);
        contextRef.current.arcTo(x, y + height, x, y, borderRadius); // Bottom-right corner
        contextRef.current.arcTo(x, y, x + width, y, borderRadius); // Bottom-left corner
        contextRef.current.closePath();
        contextRef.current.fill();
    };

    const convert = (digit) => digit * dimension.width / standardWidth;

    return (
        <div className='drawing-canvas-root' style={{ height: dimension.height }}>
            <canvas
                ref={canvasRef}
                style={{ border: '1px solid #000' }}
            />
        </div >
    );
})

export default DrawingCanvas;
