import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ForgiveMe() {
  const [showPopup, setShowPopup] = useState(false);
  const [noPos, setNoPos] = useState({ x: 0, y: 0 }); // Start at 0,0 (no offset)
  const noBtnRef = useRef(null);
  const containerRef = useRef(null);
  const [hasMoved, setHasMoved] = useState(false);

  const moveNoButton = () => {
    if (!noBtnRef.current || !containerRef.current) return;

    const btnWidth = noBtnRef.current.offsetWidth;
    const btnHeight = noBtnRef.current.offsetHeight;

    const containerWidth = containerRef.current.offsetWidth;
    const containerHeight = containerRef.current.offsetHeight;

    const maxX = containerWidth - btnWidth;
    const maxY = containerHeight - btnHeight;

    let randomX = Math.random() * maxX;
    let randomY = Math.random() * maxY;

    const distance = (x, y) =>
      Math.sqrt((x - noPos.x) ** 2 + (y - noPos.y) ** 2);

    let tries = 0;
    while (distance(randomX, randomY) < 100 && tries < 10) {
      randomX = Math.random() * maxX;
      randomY = Math.random() * maxY;
      tries++;
    }

    setNoPos({ x: randomX, y: randomY });
    setHasMoved(true);
  };

  return (
    <div className="relative flex flex-col items-center justify-center margin-top-[40px] py-5">
      {" "}
      <h2 className="text-3xl font-love-script mb-6 text-purple-700 drop-shadow-lg">
        Will you forgive me? 💌
      </h2>
      <div
        ref={containerRef}
        className="relative flex w-80 h-32 p-4 items-center justify-center"
      >
        {/* Yes Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          onClick={() => setShowPopup(true)}
          className="bg-pink-400 hover:bg-pink-500 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-colors"
        >
          Yes
        </motion.button>

        {/* No Button */}
        <motion.button
          ref={noBtnRef}
          animate={hasMoved ? { x: noPos.x, y: noPos.y } : {}}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          onClick={moveNoButton}
          className={`bg-purple-400 hover:bg-purple-500 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-colors ${
            hasMoved ? "absolute" : "ml-4"
          }`}
          style={{ position: hasMoved ? "absolute" : "relative" }}
        >
          No
        </motion.button>
      </div>
      {/* Popup message after clicking Yes */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ y: -50 }}
              animate={{ y: 0 }}
              exit={{ y: 50 }}
              className="bg-white rounded-3xl max-w-md p-8 text-center shadow-2xl text-purple-700 font-love-script"
            >
              <h3 className="text-3xl mb-4 text-pink-500">Thank you! 💖</h3>
              <p className="mb-6 text-lg">
                Your forgiveness means the world to me. I promise to cherish you
                forever.
              </p>
              <button
                onClick={() => setShowPopup(false)}
                className="bg-pink-400 hover:bg-pink-500 text-white font-bold py-2 px-6 rounded-full shadow transition-colors"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
