import { Link } from "react-router-dom";

export default function BukkenFooter() {
  return (
    <footer style={{ background: "#141018", padding: "24px", textAlign: "center" }}>
      <p style={{ fontSize: "10px", color: "rgba(255,255,255,.2)", marginBottom: "4px" }}>
        &copy; 2026 KAI &amp; KEN ／{" "}
        <Link
          to="/"
          style={{ color: "rgba(255,255,255,.2)", textDecoration: "none" }}
          onMouseEnter={(e) => (e.currentTarget.style.textDecoration = "underline")}
          onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}
        >
          満室デザインLABO
        </Link>
      </p>
      <p style={{ fontSize: "10px", color: "rgba(255,255,255,.2)" }}>
        宮城の収益物件情報・改修・客付け支援
      </p>
    </footer>
  );
}
