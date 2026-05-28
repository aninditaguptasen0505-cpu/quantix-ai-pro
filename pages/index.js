export default function Home() {
  return (
    <div
      style={{
        background: "#0b1220",
        minHeight: "100vh",
        color: "white",
        fontFamily: "Arial",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <h1 style={{ color: "#ff007f" }}>
        SELL
      </h1>

      <p style={{ color: "#00d4ff" }}>
        Confidence 95%
      </p>

      <p>
        AI Predicts Next Candle RED
      </p>

      <h3 style={{ marginTop: "30px" }}>
        QUOTEX LIVE CHART
      </h3>

      <img
        src="https://images.unsplash.com/photo-1642104704074-907c0698cbd9"
        alt="chart"
        style={{
          width: "100%",
          maxWidth: "600px",
          borderRadius: "10px",
          marginTop: "20px",
        }}
      />
    </div>
  );
}
