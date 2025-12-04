import React, { useState } from "react";
import "./TemplatesPage.css";
import { useNavigate } from "react-router-dom";

export default function TemplatesPage() {
  const navigate = useNavigate();

  const categories = [
    "All",
    "Birthday",
    "Wedding",
    "Anniversary",
    "Baby Shower",
    "Graduation",
  ];

  const [selected, setSelected] = useState("All");

  const templates = [
    {
      name: "Elegant Gold",
      category: "Birthday",
      premium: true,
      color: "linear-gradient(180deg, #ffea76, #ffd84d)",
    },
    {
      name: "Floral Spring",
      category: "Wedding",
      premium: false,
      color: "linear-gradient(180deg, #ffb6c1, #ffd1dc)",
    },
    {
      name: "Modern Blue",
      category: "Birthday",
      premium: false,
      color: "linear-gradient(180deg, #8ec5fc, #6a93ff)",
    },
    {
      name: "Soft Pink",
      category: "Anniversary",
      premium: true,
      color: "linear-gradient(180deg, #ffb3d9, #ffcee0)",
    },
  ];

  const filteredTemplates =
    selected === "All"
      ? templates
      : templates.filter((t) => t.category === selected);

  return (
    <div className="templates-container">

      {/* SIDEBAR */}
      <aside className="sidebar">
        <h2 className="app-title">SmartInvite</h2>
        <p className="app-subtitle">Create magical invitations</p>

        <ul className="menu">
          <li className="menu-item" onClick={() => navigate("/dashboard")}>
            🏠 Dashboard
          </li>

          <li className="menu-item active">
            🎨 Templates
          </li>

          <li className="menu-item new-event" onClick={() => navigate("/new-event")}>
            ➕ New Event
          </li>

          <hr />

          <li className="menu-item" onClick={() => navigate("/profile")}>
            👤 Profile
          </li>

          <li className="menu-item" onClick={() => navigate("/settings")}>
            ⚙️ Settings
          </li>

          <li className="menu-item logout" onClick={() => navigate("/login")}>
            🚪 Logout
          </li>
        </ul>
      </aside>

      {/* MAIN CONTENT */}
      <main className="templates-content">
        <h1>Choose a Template</h1>
        <p className="subtitle">Start with a beautiful pre-designed template</p>

        {/* CATEGORY FILTER TABS */}
        <div className="categories">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`cat-btn ${selected === cat ? "active" : ""}`}
              onClick={() => setSelected(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* TEMPLATE GRID */}
        <div className="template-grid">
          {filteredTemplates.map((temp, i) => (
            <div key={i} className="template-card">
              <div
                className="template-preview"
                style={{ background: temp.color }}
              >
                {temp.premium && (
                  <span className="premium-tag">PREMIUM</span>
                )}
              </div>

              <div className="template-info">
                <h3>{temp.name}</h3>
                <span className="category">{temp.category}</span>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
