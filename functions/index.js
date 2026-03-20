import { onRequest } from "firebase-functions/v2/https";
import { defineString } from "firebase-functions/params";

// เก็บโทเคนแบบ Parameterized Config (ปลอดภัยกว่าไม่ฮาร์ดโค้ด)
export const LINE_NOTIFY_TOKEN = defineString("LINE_NOTIFY_TOKEN");

export const notifyLine = onRequest(
  {
    region: "asia-southeast1",
    // อนุญาตเฉพาะโดเมน GitHub Pages ของคุณ (เปลี่ยนให้ตรง)
    cors: ["https://khanithahn.github.io"],
  },
  async (req, res) => {
    try {
      if (req.method === "OPTIONS") return res.status(204).send("");
      if (req.method !== "POST") return res.status(405).json({ ok:false, error:"Use POST" });

      const token = LINE_NOTIFY_TOKEN.value();
      if (!token) return res.status(500).json({ ok:false, error:"Missing LINE token" });

      const { title = "มีคำตอบแบบสอบถามใหม่ 🧠", answers = [] } = req.body || {};
      const lines = answers.map((it, i) => `${i+1}) ${it.q}
→ ${it.a || "-"}`).join("

");
      const message = `${title}

${lines}`.slice(0, 950);

      const params = new URLSearchParams();
      params.append("message", message);

      const r = await fetch("https://notify-api.line.me/api/notify", {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: params
      });

      const data = await r.json();
      return res.status(200).json({ ok:true, data });
    } catch (e) {
      console.error(e);
      return res.status(500).json({ ok:false, error: e.message });
    }
  }
);
