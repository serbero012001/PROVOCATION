export default function Paginacion({
  page,
  total,
  setPage,
}: any) {
  return (
    <div style={{ textAlign: "center", margin: "20px 0" }}>
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          onClick={() => setPage(i + 1)}
          style={{
            margin: 4,
            padding: "6px 10px",
            borderRadius: 6,
            border: "1px solid #ccc",
            background: page === i + 1 ? "#231f20" : "#fff",
            color: page === i + 1 ? "#fff" : "#000",
          }}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
}
