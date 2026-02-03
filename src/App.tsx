import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import linger from "./linger.mp3";
import photo from "./photo.jpg";

export default function ValentineWebsite() {
  const [unlocked, setUnlocked] = useState(false);
  const [code, setCode] = useState("");
  const [page, setPage] = useState("ask");
  const [noCount, setNoCount] = useState(0);
  const [showSignature, setShowSignature] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const fadeRef = useRef<NodeJS.Timer | null>(null);

  // ✏️ EDIT THESE ONLY
  const customMessage =
    "I'm so happy and thankful that I had the chance to meet and get to know you. I never would've thought that I could ever click with someone this fast. I don't know if you notice that I fall for you each and every single day-- even though sometimes you're nonchalant lol, but it really is unnatural for me to feel this way. This whole thing does scare me, because what if you slip between my fingers and I would live my whole life knowing a girl like you exists. You're truly one of a kind, Cindy; You really are.";

  const favoriteMemory = "Thanking the Cow Shit.";

  const noTexts = [
    "NO",
    "get that yam off yo face 😭",
    "be serious rn 🤨",
    "on god I would greet you if you was over here",
    "FEEEEEL MEEEE",
    "i dont wanna live there no mo 😔",
    "you acc hate me fr",
    "NIIIIIIIGAH 😭",
    "dudu pls im begging",
    "okay last chance fr 🥺",
  ];

  // 🔒 LOCK SCREEN
  if (!unlocked) {
    return (
      <div
        style={{
          minHeight: "100vh",
          backgroundColor: "#cddfd0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Comic Neue, Quicksand, cursive",
        }}
      >
        <div
          style={{
            background: "rgba(255,255,255,0.9)",
            padding: "3.5rem",
            borderRadius: "28px",
            width: "90%",
            maxWidth: "520px",
            textAlign: "center",
            boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
          }}
        >
          <div style={{ fontSize: "3.2rem", marginBottom: "1rem" }}>🔒</div>
          <h2 style={{ color: "#6b8f71" }}>Enter The Code</h2>
          <p style={{ color: "#555", marginBottom: "1.5rem" }}>
            The day we met (MM/DD)
          </p>
          <input
            type="password"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            maxLength={4}
            placeholder="••••"
            style={{
              width: "100%",
              padding: "0.8rem",
              fontSize: "1.6rem",
              letterSpacing: "0.4rem",
              textAlign: "center",
              borderRadius: "14px",
              border: "2px solid #6b8f71",
              marginBottom: "1.2rem",
            }}
          />
          <button
            onClick={() => code === "1230" && setUnlocked(true)}
            style={{
              width: "100%",
              padding: "0.75rem",
              borderRadius: "999px",
              backgroundColor: "#6b8f71",
              color: "white",
              fontWeight: 900,
              border: "none",
              cursor: "pointer",
            }}
          >
            Unlock ♡
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#cddfd0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        fontFamily: "Comic Neue, Quicksand, cursive",
      }}
    >
      <audio ref={audioRef} src={linger} preload="auto" />

      {/* FLOATING HEARTS */}
      {[...Array(24)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: "absolute",
            left: `${Math.random() * 100}vw`,
            top: `${Math.random() * 100}vh`,
            color: "#6b8f71",
            opacity: 0.25,
            fontSize: "19px",
          }}
          animate={{ y: [-20, 20] }}
          transition={{ duration: 8 + Math.random() * 5, repeat: Infinity }}
        >
          ♡
        </motion.div>
      ))}

      <AnimatePresence mode="wait">
        {/* ASK PAGE */}
        {page === "ask" && (
          <motion.div
            key="ask"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <div
              style={{
                background: "rgba(255,255,255,0.9)",
                padding: "3.5rem",
                borderRadius: "28px",
                maxWidth: "520px",
                textAlign: "center",
              }}
            >
              <h1 style={{ color: "#6b8f71", fontSize: "2.7rem" }}>
                May I Be Your Valentine?
              </h1>
              <p style={{ fontSize: "1.5rem" }}>
                See what happens when you choose NO 😡
              </p>

              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  justifyContent: "center",
                  marginTop: "1.5rem",
                }}
              >
                <motion.button
                  onClick={() => setNoCount(noCount + 1)}
                  whileHover={{
                    x: (Math.random() - 0.5) * 300,
                    y: (Math.random() - 0.5) * 200,
                  }}
                  style={{
                    padding: "0.7rem 1.6rem",
                    borderRadius: "999px",
                    border: "2px solid #6b8f71",
                    background: "transparent",
                    color: "#6b8f71",
                    fontWeight: 900,
                  }}
                >
                  {noTexts[Math.min(noCount, noTexts.length - 1)]}
                </motion.button>

                <button
                  onClick={() => {
                    setPage("yes");
                    if (audioRef.current) {
                      audioRef.current.volume = 0;
                      audioRef.current.play();
                      fadeRef.current = setInterval(() => {
                        if (audioRef.current!.volume < 0.7) {
                          audioRef.current!.volume += 0.02;
                        } else {
                          clearInterval(fadeRef.current!);
                        }
                      }, 200);
                    }
                  }}
                  style={{
                    padding: "0.7rem 1.6rem",
                    borderRadius: "999px",
                    backgroundColor: "#6b8f71",
                    color: "white",
                    fontWeight: 900,
                    border: "none",
                  }}
                >
                  Yes ♡
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* YES PAGE */}
        {page === "yes" && (
          <motion.div
            key="yes"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <div
              style={{
                background: "rgba(255,255,255,0.9)",
                padding: "3.5rem",
                borderRadius: "28px",
                textAlign: "center",
                maxWidth: "520px",
              }}
            >
              <h2 style={{ color: "#6b8f71" }}>I Miss You ♡</h2>
              <p>and I can't wait to celebrate Valentine's with my boo</p>

              <img
                src={photo}
                alt="Our photo"
                style={{
                  width: "100%",
                  maxWidth: "380px",
                  borderRadius: "22px",
                  margin: "1.5rem auto",
                  boxShadow: "0 18px 35px rgba(0,0,0,0.18)",
                }}
              />

              <p style={{ fontSize: "1.2rem", color: "#666" }}>
                You've never seen this pic :)) BTW our song ♡
              </p>

              <button
                onClick={() => setPage("letter")}
                style={{
                  marginTop: "1rem",
                  padding: "0.7rem 1.6rem",
                  borderRadius: "999px",
                  backgroundColor: "#6b8f71",
                  color: "white",
                  fontWeight: 900,
                  border: "none",
                }}
              >
                My Letter ♡
              </button>
            </div>
          </motion.div>
        )}

        {/* LETTER PAGE */}
        {page === "letter" && (
          <motion.div
            key="letter"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <div
              style={{
                background: "rgba(255,255,255,0.9)",
                padding: "3.5rem",
                borderRadius: "28px",
                maxWidth: "520px",
                textAlign: "center",
              }}
            >
              <h3 style={{ color: "#6b8f71" }}>Dear Cindy ♡</h3>

              <p
                style={{
                  fontSize: "clamp(1.2rem, 2.1vw, 1.5rem)",
                  lineHeight: "1.7",
                  marginTop: "1.2rem",
                  marginBottom: "1.5rem",
                }}
              >
                {customMessage}
              </p>

              <p style={{ fontStyle: "italic", color: "#666" }}>
                {favoriteMemory}
              </p>

              <div style={{ marginTop: "3rem" }}>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  style={{
                    fontSize: "clamp(1.2rem, 2vw, 1.4rem)",
                    fontStyle: "italic",
                    color: "#444",
                    marginBottom: "1.2rem",
                  }}
                >
                  Always and Forever,
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2, duration: 1.2 }}
                  style={{
                    fontFamily: "'Dancing Script', cursive",
                    fontSize: "clamp(2rem, 4vw, 2.8rem)",
                    color: "#6b8f71",
                    marginBottom: "2rem",
                  }}
                >
                  Renzo
                </motion.p>

                {!showSignature && (
                  <button
                    onClick={() => setShowSignature(true)}
                    style={{
                      padding: "0.6rem 1.4rem",
                      borderRadius: "999px",
                      border: "2px solid #6b8f71",
                      background: "transparent",
                      color: "#6b8f71",
                      fontWeight: 700,
                    }}
                  >
                    Click for signature HERE ♡
                  </button>
                )}

                <AnimatePresence>
                  {showSignature && (
                    <motion.p
                      initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
                      animate={{
                        opacity: 1,
                        clipPath: "inset(0 0% 0 0)",
                      }}
                      transition={{ duration: 2, ease: "easeInOut" }}
                      style={{
                        marginTop: "2rem",
                        fontFamily: "'Dancing Script', cursive",
                        fontSize: "clamp(2rem, 4.5vw, 3rem)",
                        color: "#6b8f71",
                      }}
                    >
                      Cindy
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
