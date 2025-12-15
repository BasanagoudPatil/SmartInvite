import { useEffect, useState } from "react";

export default function TemplatesPage() {

  const categories = ["All","Birthday","Wedding","Corporate","Engagement","Housewarming","Other"];
  const [selected, setSelected] = useState("All");
  const [templates, setTemplates] = useState([]);

  useEffect(() => {
    let url = "http://localhost:8080/api/templates";
    if (selected !== "All") {
      url += `?category=${selected.toUpperCase()}`;
    }

    fetch(url)
      .then(res => res.json())
      .then(data => setTemplates(data));
  }, [selected]);

  return (
    <div style={{ padding: 40 }}>
      <h2>Choose Template</h2>

      <div>
        {categories.map(c => (
          <button key={c} onClick={() => setSelected(c)}>
            {c}
          </button>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
        {templates.map(t => (
          <div key={t.templateId}>
            <img
              src={`http://localhost:8080${t.imageUrl}`}
              alt={t.name}
              width="200"
            />
            <h4>{t.name}</h4>
            {t.premium && <b>PREMIUM</b>}
          </div>
        ))}
      </div>
    </div>
  );
}
