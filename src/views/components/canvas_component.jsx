import React, { useRef, useEffect } from 'react';

const DrawingCanvas = () => {
    const canvasRef = useRef(null);
    const contextRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.width = '100%';
        canvas.height = '100%';
        const context = canvas.getContext('2d');
        contextRef.current = context;
        contextRef.current.fillStyle = 'red';

        // Draw a filled rectangle at (50, 50) with a width and height of 100
        contextRef.current.fillRect(0, 0, 100, 100);
    }, []);

    const drawFilledRectangle = () => {
        if (!contextRef.current) return;

        // Set the fill color to red
        contextRef.current.fillStyle = 'red';

        // Draw a filled rectangle at (50, 50) with a width and height of 100
        contextRef.current.fillRect(200, 200, 100, 100);
    };

    return (
        <div style={{ width: '100%', height: '100%', border: '1px solid #000' }}>
            <canvas
                ref={canvasRef}
                style={{ width: '100%', height: '100%', border: '1px solid #000' }}
            />
            <button onClick={drawFilledRectangle}>Draw Filled Rectangle</button>
        </div>
    );
};

export default DrawingCanvas;
