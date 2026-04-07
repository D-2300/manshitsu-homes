import { useState } from "react";
import { M, C } from "../tokens";
import ScrollFadeIn from "./ui/ScrollFadeIn";
import SectionLabel from "./ui/SectionLabel";

export default function ContactForm({ dark = false }: { dark?: boolean }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    // mailto fallback — opens user's email client with pre-filled fields
    const subject = encodeURIComponent(`【満室デザインLABO】${form.name}様からのお問い合わせ`);
    const body = encodeURIComponent(
      `お名前: ${form.name}\nメールアドレス: ${form.email}\n電話番号: ${form.phone || "未入力"}\n\nお問い合わせ内容:\n${form.message}`
    );
    window.location.href = `mailto:info@kiokuso.com?subject=${subject}&body=${body}`;
    setStatus("sent");
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    fontSize: 14,
    padding: "12px 14px",
    borderRadius: 8,
    border: dark ? "1px solid rgba(255,255,255,.15)" : "1px solid #ddd",
    backgroundColor: dark ? "rgba(255,255,255,.08)" : "#fff",
    color: dark ? "#fff" : C.textDark,
    outline: "none",
    fontFamily: "'Noto Sans JP', sans-serif",
  };

  const labelStyle: React.CSSProperties = {
    fontSize: 13,
    fontWeight: 600,
    color: dark ? "rgba(255,255,255,.7)" : C.textDark,
    marginBottom: 6,
    display: "block",
  };

  return (
    <section
      id="contact"
      style={{
        backgroundColor: dark ? M.dark : C.warmWhite,
        padding: "48px 24px",
      }}
    >
      <div style={{ maxWidth: 520, margin: "0 auto" }}>
        <ScrollFadeIn>
          <SectionLabel en="CONTACT" ja="メールでのお問い合わせ" dark={dark} />

          <p
            style={{
              fontSize: "clamp(13px, 2.3vw, 15px)",
              color: dark ? "rgba(255,255,255,.5)" : C.textMid,
              textAlign: "center",
              lineHeight: 1.8,
              marginBottom: 24,
            }}
          >
            LINEが難しい方は、こちらからもお問い合わせいただけます。
          </p>
        </ScrollFadeIn>

        <ScrollFadeIn delay={0.1}>
          <form onSubmit={handleSubmit} style={{ display: "grid", gap: 16 }}>
            <div>
              <label style={labelStyle}>
                お名前 <span style={{ color: C.accentRed, fontSize: 11 }}>*</span>
              </label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="山田 太郎"
                style={inputStyle}
              />
            </div>

            <div>
              <label style={labelStyle}>
                メールアドレス <span style={{ color: C.accentRed, fontSize: 11 }}>*</span>
              </label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="example@email.com"
                style={inputStyle}
              />
            </div>

            <div>
              <label style={labelStyle}>電話番号</label>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="080-0000-0000"
                style={inputStyle}
              />
            </div>

            <div>
              <label style={labelStyle}>
                お問い合わせ内容 <span style={{ color: C.accentRed, fontSize: 11 }}>*</span>
              </label>
              <textarea
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="空室のステージング画像を作ってほしい、施工の見積もりが知りたい、など"
                rows={4}
                style={{ ...inputStyle, resize: "vertical" }}
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              style={{
                width: "100%",
                fontSize: 15,
                fontWeight: 700,
                color: "#fff",
                backgroundColor: M.main,
                border: "none",
                borderRadius: 999,
                padding: "14px 24px",
                cursor: status === "sending" ? "wait" : "pointer",
                opacity: status === "sending" ? 0.7 : 1,
                fontFamily: "'Noto Sans JP', sans-serif",
              }}
            >
              {status === "sending" ? "送信中..." : "送信する"}
            </button>

            {status === "sent" && (
              <p style={{ fontSize: 13, color: C.accentGreen, textAlign: "center", fontWeight: 600 }}>
                メールアプリが開きます。送信ボタンを押してください。
              </p>
            )}
          </form>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
