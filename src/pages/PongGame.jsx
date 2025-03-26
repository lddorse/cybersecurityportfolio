// PongGame.jsx
import { useRef, useEffect, useState } from 'react';

const PongGame = () => {
  const canvasRef = useRef(null);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let paddleX = canvas.width / 2 - 40;
    const paddleWidth = 80;
    const paddleHeight = 10;
    const paddleY = canvas.height - 20;

    let ballX = canvas.width / 2;
    let ballY = canvas.height / 2;
    let ballDX = 2;
    let ballDY = -2;
    let score = 0;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Paddle
      ctx.fillStyle = '#333';
      ctx.fillRect(paddleX, paddleY, paddleWidth, paddleHeight);

      // Ball
      ctx.beginPath();
      ctx.arc(ballX, ballY, 8, 0, Math.PI * 2);
      ctx.fillStyle = '#dc2626';
      ctx.fill();
      ctx.closePath();

      // Score
      ctx.font = '16px Arial';
      ctx.fillText(`Score: ${score}`, 20, 30);

      // Ball Movement
      ballX += ballDX;
      ballY += ballDY;

      // Bounce off left/right
      if (ballX + ballDX < 0 || ballX + ballDX > canvas.width) ballDX = -ballDX;

      // Bounce off top
      if (ballY + ballDY < 0) ballDY = -ballDY;

      // Paddle collision
      if (
        ballY + 8 >= paddleY &&
        ballX > paddleX &&
        ballX < paddleX + paddleWidth
      ) {
        ballDY = -ballDY;
        score++;
      }

      // Miss (ball hits bottom)
      if (ballY > canvas.height) {
        score = Math.max(0, score - 5);
        ballX = canvas.width / 2;
        ballY = canvas.height / 2;
        ballDY = -2;
      }

      requestAnimationFrame(draw);
    };

    const movePaddle = (e) => {
      if (e.key === 'ArrowLeft') paddleX = Math.max(paddleX - 20, 0);
      if (e.key === 'ArrowRight') paddleX = Math.min(paddleX + 20, canvas.width - paddleWidth);
    };

    const handleTouchMove = (e) => {
      const touchX = e.touches[0].clientX - canvas.getBoundingClientRect().left;
      paddleX = Math.min(Math.max(touchX - paddleWidth / 2, 0), canvas.width - paddleWidth);
    };

    document.addEventListener('keydown', movePaddle);
    canvas.addEventListener('touchmove', handleTouchMove);
    draw();

    return () => {
      document.removeEventListener('keydown', movePaddle);
      canvas.removeEventListener('touchmove', handleTouchMove);
    };
  }, [running]);

  return (
    <div className="my-8 text-center">
      <button
        onClick={() => setRunning(!running)}
        className="mb-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        {running ? 'Stop Game' : 'Start Pong Game'}
      </button>
      {running && (
        <div className="w-full overflow-auto">
          <canvas
            ref={canvasRef}
            width={window.innerWidth < 640 ? 300 : 600}
            height={400}
            className="border border-gray-300 rounded mx-auto"
          />
        </div>
      )}
    </div>
  );
};

export default PongGame;