import { useState, useEffect } from "react";

const Mode = () => {
  const [dark, setDark] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("darkMode") === "true";
    }
    return false; // alap világos mód
  });

  useEffect(() => {
    const body = document.body;
    if (dark) {
      body.style.backgroundColor = "#1a1a1a"; // sötét szín
      body.style.color = "#ffffff";           // szöveg fehér
    } else {
      body.style.backgroundColor = "#ffffff"; // világos szín
      body.style.color = "#000000";           // szöveg fekete
    }

    localStorage.setItem("darkMode", dark ? "true" : "false");
  }, [dark]);

  return (
    <button
      onClick={() => setDark(prev => !prev)}
      style={{
        padding: "8px 16px",
        borderRadius: "6px",
        backgroundColor: dark ? "#333" : "#ddd",
        color: dark ? "#fff" : "#000",
        border: "none",
        cursor: "pointer",
      }}
    >
      {dark ? "Világos mód" : "Sötét mód"}
    </button>
  );
};

export default Mode;
