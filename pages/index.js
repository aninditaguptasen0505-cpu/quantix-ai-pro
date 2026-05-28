export default function Home() {
  return (
    <div
      style={{
        background: "#081120",
        minHeight: "100vh",
        color: "white",
        padding: "20px",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          background: "#111c2e",
          borderRadius: "20px",
          padding: "20px",
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        <h1 style={{ color: "#ff2d75", fontSize: "60px" }}>SELL</h1>
        <h2 style={{ color: "#00e5ff" }}>Confidence 95%</h2>
        <p>AI Predicts Next Candle RED ↓</p>
      </div>

      <div
        style={{
          background: "#111c2e",
          borderRadius: "20px",
          padding: "20px",
        }}
      >
        <h2>QUOTEX LIVE CHART</h2>

        <img
          src="https://i.imgur.com/8QwEC7R.png"
          style={{
            width: "100%",
            borderRadius: "10px",
          }}
        />

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
          }}
        >
          <div>
            <p>Trend</p>
            <h3 style={{ color: "red" }}>Bearish</h3>
          </div>

          <div>
            <p>Volatility</p>
            <h3 style={{ color: "yellow" }}>Medium</h3>
          </div>

          <div>
            <p>Strength</p>
            <h3 style={{ color: "#00e5ff" }}>Strong</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
