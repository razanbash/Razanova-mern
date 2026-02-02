export default function FeatureCard({ title, desc, buttonText }) {
  return (
    <div
      style={{
        border: "1px solid #eee",
        borderRadius: 12,
        padding: 16,
        background: "#fff",
        marginBottom: 14,
      }}
    >
      <h3 style={{ margin: 0 }}>{title}</h3>
      <p style={{ margin: "8px 0 12px", color: "#666" }}>{desc}</p>

      {buttonText ? (
        <button
          style={{
            padding: "10px 14px",
            borderRadius: 10,
            border: "1px solid #ddd",
            background: "#f7f7f7",
            cursor: "pointer",
          }}
        >
          {buttonText}
        </button>
      ) : null}
    </div>
  );
}

//NO