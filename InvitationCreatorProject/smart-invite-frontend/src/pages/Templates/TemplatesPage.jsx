import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function TemplatesPage() {
  const navigate = useNavigate();

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

  const handleTemplateClick = (template) => {
    navigate("/new-event", {
      state: { template }
    });
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>Choose Template</h2>

      <div style={{ marginBottom: 20 }}>
        {categories.map(c => (
          <button key={c} onClick={() => setSelected(c)}>
            {c}
          </button>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
        {templates.map(t => (
          <div
            key={t.templateId}
            onClick={() => handleTemplateClick(t)}
            style={{
              cursor: "pointer",
              border: "1px solid #ddd",
              padding: 10,
              borderRadius: 8
            }}
          >
            <img
              src={`http://localhost:8080${t.imageUrl}`}
              alt={t.name}
              width="200"
            />
            <h4>{t.name}</h4>
            {t.isPremium && <b>PREMIUM</b>}
          </div>
        ))}
      </div>
    </div>
  );
}
