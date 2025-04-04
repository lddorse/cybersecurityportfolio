// WeatherCanvas.jsx
import { useRef, useEffect, useState } from 'react';

const WeatherCanvas = () => {
  const canvasRef = useRef(null);
  const [weather, setWeather] = useState(null);
  const shapesRef = useRef([]);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=Chicago&units=metric&appid=9aeabd3de4a2f0f734a0a9d15a6313b8`
        );
        const data = await response.json();
        setWeather(data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeather();
  }, []);

  useEffect(() => {
    if (!weather || !weather.weather || !Array.isArray(weather.weather)) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const { main, wind, weather: conditions } = weather;
    const condition = conditions[0]?.main?.toLowerCase() || 'default';
    const temp = main.temp;
    const windSpeed = wind.speed;

    // Initialize shapes only once
    if (shapesRef.current.length === 0) {
      const numShapes = Math.floor(temp * 2);
      shapesRef.current = Array.from({ length: numShapes }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 10 + 5,
        speedX: (Math.random() - 0.5) * windSpeed,
        speedY: (Math.random() - 0.5) * windSpeed,
        opacity: Math.random(),
      }));
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      switch (condition) {
        case 'clear':
          ctx.fillStyle = '#fde68a';
          break;
        case 'clouds':
          ctx.fillStyle = '#d1d5db';
          break;
        case 'rain':
        case 'drizzle':
          ctx.fillStyle = '#93c5fd';
          break;
        case 'snow':
          ctx.fillStyle = '#e0f2fe';
          break;
        default:
          ctx.fillStyle = '#cbd5e1';
      }

      ctx.fillRect(0, 0, canvas.width, canvas.height);

      shapesRef.current.forEach((shape) => {
        shape.x += shape.speedX;
        shape.y += shape.speedY;

        if (shape.x <= 0 || shape.x >= canvas.width) shape.speedX *= -1;
        if (shape.y <= 0 || shape.y >= canvas.height) shape.speedY *= -1;

        ctx.beginPath();
        ctx.arc(shape.x, shape.y, shape.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${shape.opacity})`;
        ctx.fill();
      });

      ctx.font = '16px sans-serif';
      ctx.fillStyle = 'rgba(0,0,0,0.4)';
      ctx.fillText(`Weather: ${condition}`, 10, 25);
      ctx.fillText(`Temp: ${temp}°C`, 10, 45);

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(animationFrameId);
  }, [weather]);

  return (
    <div className="my-8 text-center">
      <canvas
        ref={canvasRef}
        width={window.innerWidth < 640 ? 300 : 600}
        height={400}
        className="border border-gray-300 rounded mx-auto"
      />
      {!weather && <p className="mt-2 text-gray-500 text-sm">Loading weather data...</p>}
    </div>
  );
};

export default WeatherCanvas;