import { useState } from "react";
import { M, C } from "../tokens";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export default function MContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
      });
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: "form_submit_manshitsu" });
      setSubmitted(true);
    } catch {
      setSubmitting(false);
    }
  };

  const inputStyle: React.CSSProperties = {
    border: `1px solid rgba(107,64,102,0.2)`,
    borderRadius: "4px",
    padding: "13px 16px",
    fontSize: "15px",
    color: C.textDark,
    backgroundColor: C.white,
    transition: "border-color 0.2s, box-shadow 0.2s",
    boxSizing: "border-box",
    width: "100%",
    fontFamily: "'Noto Sans JP', sans-serif",
  };

  return (
    <section
      id="manshitsu-form"
      style={{
        backgroundColor: M.bg,
        padding: "48px 20px",
      }}
    >
      <style>{`
        .m-form-input:focus {
          outline: none;
          border-color: ${C.gold} !important;
          box-shadow: 0 0 0 3px rgba(201,168,76,0.12);
        }
        .m-form-submit:hover {
          opacity: 0.9 !important;
        }
      `}</style>

      <div style={{ maxWidth: "480px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "28px" }}>
          <div style={{ width: "40px", height: "1px", backgroundColor: C.gold, opacity: 0.5, margin: "0 auto 12px" }} />
          <p
            style={{
              margin: "0 0 10px",
              fontSize: "12px",
              fontWeight: 400,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: M.light,
            }}
          >
            CONTACT
          </p>
          <h2
            style={{
              margin: "0 0 8px",
              fontFamily: "'Noto Serif JP', serif",
              fontSize: "clamp(18px, 4.5vw, 22px)",
              fontWeight: 600,
              color: C.textDark,
              lineHeight: 1.5,
            }}
          >
            無料見積もり・お問い合わせ
          </h2>
          <p style={{ margin: 0, fontSize: "14px", color: C.textMid }}>
            翌営業日までにご返信いたします。
          </p>
        </div>

        {submitted ? (
          <div
            style={{
              textAlign: "center",
              padding: "48px 24px",
              border: `1px solid rgba(107,64,102,0.12)`,
              borderRadius: "4px",
              backgroundColor: C.white,
            }}
          >
            <p
              style={{
                margin: "0 0 8px",
                fontSize: "16px",
                fontWeight: 600,
                color: C.textDark,
              }}
            >
              送信しました。
            </p>
            <p style={{ margin: 0, fontSize: "14px", color: C.textMid, lineHeight: 1.7 }}>
              翌営業日までにご連絡いたします。
            </p>
          </div>
        ) : (
          <form
            name="manshitsu-contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <input type="hidden" name="form-name" value="manshitsu-contact" />
            <p style={{ display: "none" }}>
              <label>
                Don't fill this out: <input name="bot-field" />
              </label>
            </p>

            {/* Name */}
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <label
                htmlFor="mf-name"
                style={{ fontSize: "13px", fontWeight: 500, color: C.textDark }}
              >
                お名前
                <span style={{ marginLeft: "6px", fontSize: "11px", color: C.gold, fontWeight: 400 }}>必須</span>
              </label>
              <input
                id="mf-name"
                name="name"
                type="text"
                required
                placeholder="山田 太郎"
                className="m-form-input"
                style={inputStyle}
              />
            </div>

            {/* Contact info */}
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <label
                htmlFor="mf-contact"
                style={{ fontSize: "13px", fontWeight: 500, color: C.textDark }}
              >
                メールアドレスまたは電話番号
                <span style={{ marginLeft: "6px", fontSize: "11px", color: C.gold, fontWeight: 400 }}>必須</span>
              </label>
              <input
                id="mf-contact"
                name="contact"
                type="text"
                required
                placeholder="example@email.com または 080-0000-0000"
                className="m-form-input"
                style={inputStyle}
              />
            </div>

            {/* Property info */}
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <label
                htmlFor="mf-property"
                style={{ fontSize: "13px", fontWeight: 500, color: C.textDark }}
              >
                物件情報
                <span style={{ marginLeft: "6px", fontSize: "11px", color: C.warmGray, fontWeight: 400 }}>任意</span>
              </label>
              <input
                id="mf-property"
                name="property"
                type="text"
                placeholder="仙台市◯◯区・1K・築◯年 など"
                className="m-form-input"
                style={inputStyle}
              />
            </div>

            {/* Message */}
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <label
                htmlFor="mf-message"
                style={{ fontSize: "13px", fontWeight: 500, color: C.textDark }}
              >
                ご相談内容
                <span style={{ marginLeft: "6px", fontSize: "11px", color: C.warmGray, fontWeight: 400 }}>任意</span>
              </label>
              <textarea
                id="mf-message"
                name="message"
                rows={4}
                placeholder="管理会社の見積もりと比較したい、退去が出たので相談したい、など"
                className="m-form-input"
                style={{
                  ...inputStyle,
                  resize: "vertical",
                  lineHeight: 1.6,
                }}
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={submitting}
              className="m-form-submit"
              style={{
                backgroundColor: M.main,
                color: C.white,
                borderRadius: "4px",
                padding: "15px",
                width: "100%",
                fontSize: "15px",
                fontWeight: 700,
                border: "none",
                cursor: submitting ? "not-allowed" : "pointer",
                letterSpacing: "0.04em",
                transition: "opacity 0.2s",
                opacity: submitting ? 0.6 : 1,
                fontFamily: "'Noto Sans JP', sans-serif",
              }}
            >
              {submitting ? "送信中..." : "無料で見積もりを依頼する"}
            </button>

            <p style={{ margin: 0, fontSize: "11px", color: C.warmGray, textAlign: "center", lineHeight: 1.7 }}>
              お見積もりは無料です。お気軽にお問い合わせください。
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
