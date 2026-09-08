import { useState, useEffect } from 'react';
import './Preloader.css';

const DIGITS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const duration = 2200; // 2.2s smooth duration
    const startTime = performance.now();

    const update = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progressRatio = Math.min(elapsed / duration, 1);

      // Smooth custom easing curve
      const eased =
        progressRatio < 0.5
          ? 2 * progressRatio * progressRatio
          : 1 - Math.pow(-2 * progressRatio + 2, 2) / 2;

      const currentVal = Math.min(100, Math.round(eased * 100));
      setProgress(currentVal);

      if (progressRatio < 1) {
        requestAnimationFrame(update);
      } else {
        setProgress(100);
        setTimeout(() => {
          setIsExiting(true);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 750);
        }, 350);
      }
    };

    const frameId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frameId);
  }, [onComplete]);

  // Mathematical digit extraction
  const dHundreds = Math.floor(progress / 100); // 0 or 1
  const dTens = Math.floor((progress % 100) / 10); // 0..9
  const dUnits = progress % 10; // 0..9

  return (
    <div className={`kinetic-preloader ${isExiting ? 'is-exiting' : ''}`}>
      {/* Background Lighting & Texture */}
      <div className="kinetic-aura" />
      <div className="kinetic-noise-layer" />

      {/* Exit Curtain */}
      <div className="curtain-slice slice-top" />
      <div className="curtain-slice slice-bottom" />

      <div className="odometer-stage">
        <div className="odometer-display">
          {/* Hundreds Column (smoothly expands when hitting 100) */}
          <div
            className={`digit-window hundreds-window ${
              progress >= 100 ? 'is-active' : ''
            }`}
          >
            <div
              className="digit-strip"
              style={{ transform: `translateY(-${dHundreds * 10}%)` }}
            >
              {DIGITS.map((n) => (
                <div key={n} className="odometer-num">
                  {n}
                </div>
              ))}
            </div>
          </div>

          {/* Tens Column */}
          <div className="digit-window">
            <div
              className="digit-strip"
              style={{ transform: `translateY(-${dTens * 10}%)` }}
            >
              {DIGITS.map((n) => (
                <div key={n} className="odometer-num">
                  {n}
                </div>
              ))}
            </div>
          </div>

          {/* Units Column */}
          <div className="digit-window">
            <div
              className="digit-strip"
              style={{ transform: `translateY(-${dUnits * 10}%)` }}
            >
              {DIGITS.map((n) => (
                <div key={n} className="odometer-num">
                  {n}
                </div>
              ))}
            </div>
          </div>

          {/* Percentage Symbol */}
          <span className="odometer-symbol">%</span>
        </div>

        {/* Minimal Precision Progress Track */}
        <div className="kinetic-track-wrapper">
          <div
            className="kinetic-track-fill"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default Preloader;
