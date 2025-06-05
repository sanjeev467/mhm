import { Parallax } from "react-scroll-parallax";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { FaHeart } from "react-icons/fa";
import Lottie from "lottie-react";
import animationData from "./assets/Animation1.json";
import animationData2 from "./assets/Animation2.json";
import ForgiveMe from "./ForgiveMe";

// Falling petals (as emojis, can be replaced with images if needed)
// Add this smaller petals component scoped for letter area
const LetterPetals = () => {
  const petals = Array.from({ length: 8 });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {petals.map((_, i) => {
        const left = Math.random() * 100;
        const duration = Math.random() * 8 + 6;
        const delay = Math.random() * 5;
        const size = Math.random() * 20 + 12;
        const petal = ["🌸", "💮", "🌺"][Math.floor(Math.random() * 3)];
        return (
          <motion.div
            key={i}
            className="absolute text-pink-400"
            style={{
              left: `${left}%`,
              fontSize: `${size}px`,
              top: "-15%",
            }}
            animate={{
              y: ["-15%", "115%"],
              rotate: [0, 360],
              opacity: [1, 0.5, 1],
            }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {petal}
          </motion.div>
        );
      })}
    </div>
  );
};

export default function App() {
  return (
    <div className="relative bg-gradient-to-b from-yellow-50 via-purple-50 to-yellow-100 text-gray-800">
      {/* <FloatingPetals /> */}

      {/* Hero */}
      <section className="h-screen relative w-full flex items-center justify-center overflow-hidden bg-black">
        {/* Fullscreen animated background */}
        <Lottie
          animationData={animationData}
          loop
          className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none rotate-90 origin-center"
        />

        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="z-10 text-center text-yellow-300 px-4"
        >
          <h1 className="text-6xl love-script drop-shadow-lg mb-6">
            I'm So Sorry, <span className="text-pink-400">My Love</span>
          </h1>
          <p className="text-xl max-w-xl mx-auto text-yellow-200">
            I wrote you something... scroll down and feel my heart.
          </p>
        </motion.div>
      </section>

      {/* Letter */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="min-h-screen px-6 py-20 flex items-center justify-center bg-gradient-to-br from-purple-100 via-yellow-50 to-purple-200"
      >
        <motion.div className="max-w-2xl p-10 bg-white/90 rounded-3xl shadow-xl border-2 border-purple-300 text-purple-800 font-serif text-lg tracking-wide leading-relaxed space-y-6">
          <p>My dearest love,</p>
          <Typewriter
            options={{
              strings: [
                "I know I hurt you deeply...",
                "I wish I could take it all back.",
                "You're everything to me.",
                "Please give me a chance to make things right.",
              ],
              autoStart: true,
              loop: true,
              delay: 50,
              deleteSpeed: 30,
            }}
          />
          <p>
            I’ll wait for you — to heal, to speak, to feel ready again.
            <br />
            With all my love,
            <br />
            <span className="italic text-pink-400 text-xl">Me 💖</span>
          </p>
        </motion.div>
      </motion.section>

      {/* Chat */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="min-h-screen px-4 py-[40px] flex items-center justify-center bg-gradient-to-b from-yellow-100 via-purple-50 to-yellow-100"
      >
        <div className="max-w-md w-full space-y-4">
          {[
            { text: "Hey, can we talk for a sec?", me: true },
            { text: "I don’t know if I even deserve your reply...", me: true },
            { text: "You really hurt me.", me: false },
            { text: "I know... and I hate myself for it.", me: true },
            { text: "Why did you do that?", me: false },
            { text: "I didn’t think. I was careless. 😞", me: true },
            { text: "But I never meant to hurt you.", me: true },
            { text: "I'm really sorry...", me: true },
          ].map((msg, i) => (
            <div
              key={i}
              className={`flex items-end gap-3 ${
                msg.me ? "justify-end flex-row-reverse" : "justify-start"
              }`}
            >
              {/* Avatar */}
              <img
                src={msg.me ? "/boy.png" : "/girl.png"}
                alt="avatar"
                className="w-10 h-10 rounded-full border-2 border-purple-300 shadow"
              />

              {/* Message bubble */}
              <div
                className={`rounded-xl px-4 py-3 max-w-[70%] ${
                  msg.me
                    ? "bg-purple-100 text-right"
                    : "bg-yellow-100 text-left"
                } shadow`}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Gallery */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="min-h-screen px-6 py-20 bg-gradient-to-br from-pink-50 via-white to-yellow-50"
      >
        <h2 className="text-4xl font-love-script text-center text-purple-600 mb-10">
          Our Memories 💫
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {["/photo1.jpg", "/photo2.jpeg", "/photo3.jpeg"].map((src, i) => (
            <motion.div
              key={i}
              className="relative p-2 bg-white rounded-xl border shadow-lg hover:scale-105 transition-transform"
            >
              <img
                src={src}
                alt={`memory-${i}`}
                className="rounded-lg object-cover w-full h-64"
              />
              <div className="absolute top-2 left-2 bg-yellow-300 text-purple-700 px-2 py-1 rounded text-xs font-bold shadow">
                Memory #{i + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Forgive Me Section */}
      <motion.section
        className="min-h-screen px-6 py-20 flex items-center justify-center bg-gradient-to-br from-black via-purple-900 to-black text-yellow-100"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-3xl w-full p-10 bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl border border-purple-400 relative z-10">
          <h2 className="text-4xl love-script text-center text-pink-300 mb-8 drop-shadow">
            My Heartfelt Apology
          </h2>

          <p className="text-lg leading-relaxed space-y-4 text-purple-100">
            <span className="block mb-4">
              My love, I know I’ve made mistakes — ones that hurt you and cast
              shadows where there should’ve been only light.
            </span>
            <span className="block mb-4">
              I replay every word, every silence, wishing I could take it
              back... or better, replace it with something that made you feel
              safe, loved, and seen.
            </span>
            <span className="block mb-4">
              You are my peace, my home, my light. The world feels dim without
              your warmth. I miss your voice, your laughter, your everything.
            </span>
            <span className="block mb-4">
              I am sorry — from the deepest corners of my soul. I don’t expect
              forgiveness... but I hope for it.
            </span>
            <span className="block">
              I’ll wait. I’ll grow. I’ll prove that my love for you isn’t just a
              feeling — it’s a promise.
            </span>
          </p>

          <div className="mt-10 text-center">
            <p className="italic text-pink-200 text-xl">
              Always yours,
              <br />
              <span className="font-love-script text-2xl">Me 💖</span>
            </p>
          </div>
        </div>
      </motion.section>

      <ForgiveMe />
    </div>
  );
}
