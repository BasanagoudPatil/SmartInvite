import React, { useState } from "react";
import "./NewEventPage.css";
import { useNavigate } from "react-router-dom";

export default function NewEventPage() {
  const navigate = useNavigate();

  const eventTypes = [
    "Birthday",
    "Wedding",
    "Anniversary",
    "Baby Shower",
    "Graduation",
  ];

  const [eventType, setEventType] = useState("Birthday");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dressCode, setDressCode] = useState("Formal");
  const [rsvpBy, setRsvpBy] = useState("");
  const [guestLimit, setGuestLimit] = useState(150);
  const [colorTheme, setColorTheme] = useState("#ff99bb");

  return (
    <div className="new-event-container">
      
      {/* SIDEBAR */}
      <aside className="sidebar">
        <h2 className="app-title">SmartInvite</h2>
        <p className="app-subtitle">Create magical invitations</p>

        <ul className="menu">
          <li className="menu-item" onClick={() => navigate("/dashboard")}>🏠 Dashboard</li>
          <li className="menu-item" onClick={() => navigate("/templates")}>🎨 Templates</li>
          <li className="menu-item active">➕ New Event</li>

          <hr />

          <li className="menu-item" onClick={() => navigate("/profile")}>👤 Profile</li>
          <li className="menu-item" onClick={() => navigate("/settings")}>⚙ Settings</li>
          <li className="menu-item logout" onClick={() => navigate("/login")}>🚪 Logout</li>
        </ul>
      </aside>


      {/* MAIN CONTENT */}
      <main className="event-main">

        {/* PAGE HEADER */}
        <h1>Create New Event</h1>
        <p className="subtitle">Design your perfect invitation</p>

        {/* AI GENERATION BOX */}
        <div className="ai-box">
          <h2>✨ AI-Powered Generation</h2>
          <p>Let AI create a stunning invitation for you</p>

          <div className="ai-style-options">
            <button>✨ Elegant</button>
            <button>🎨 Modern</button>
            <button>📜 Vintage</button>
            <button>🌸 Floral</button>
            <button>⚪ Minimalist</button>
            <button>🎉 Festive</button>
          </div>

          <div className="ai-input">
            <input placeholder="Describe your event... (optional)" />
            <button className="ai-generate-btn">⚡ Generate with AI</button>
            <button className="content-btn">Content Only</button>
          </div>
        </div>


        {/* EVENT FORM + PREVIEW */}
        <div className="event-layout">

          {/* EVENT DETAILS */}
          <div className="event-form">
            <h2>Event Details</h2>

            {/* Type */}
            <label>Event Type</label>
            <select value={eventType} onChange={(e) => setEventType(e.target.value)}>
              {eventTypes.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>

            {/* Title */}
            <label>Event Title</label>
            <input 
              placeholder="e.g., Sarah's 30th Birthday"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            {/* Description */}
            <label>Description</label>
            <textarea 
              rows={3}
              placeholder="Write a short message..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>


            {/* Additional Details */}
            <h2>Additional Details</h2>

            <label>Dress Code</label>
            <input 
              value={dressCode}
              onChange={(e) => setDressCode(e.target.value)}
            />

            <label>RSVP By</label>
            <input 
              type="date"
              value={rsvpBy}
              onChange={(e) => setRsvpBy(e.target.value)}
            />

            <label>Guest Limit</label>
            <input 
              type="number"
              value={guestLimit}
              onChange={(e) => setGuestLimit(e.target.value)}
            />

            {/* CUSTOMIZATION */}
            <h2>Customize Design</h2>

            <label>Color Theme</label>
            <div className="color-options">
              {["#ff99bb", "#b388ff", "#8cc4ff", "#8fff9f", "#ffd76b", "#ff6b6b"].map((c) => (
                <div 
                  key={c}
                  className="color-circle"
                  style={{ background: c }}
                  onClick={() => setColorTheme(c)}
                />
              ))}
            </div>

            {/* BUTTONS */}
            <div className="event-buttons">
              <button className="generate-btn">Generate Invitation</button>
              <button className="save-btn">Save Draft</button>
            </div>
          </div>


          {/* LIVE PREVIEW */}
          <div className="preview-box">
            <h2>Live Preview</h2>

            <div className="preview-card" style={{ background: colorTheme }}>
              <h3>{title || "Your Event Title"}</h3>
              <p>{eventType} Celebration</p>

              <div className="preview-details">
                <p>📅 {rsvpBy || "Event Date"}</p>
                <p>👗 Dress Code: {dressCode}</p>
                <p>👥 Guest Limit: {guestLimit}</p>
              </div>
            </div>

            <div className="preview-actions">
              <button className="download-btn">⬇ Download Preview</button>
              <button className="share-btn">🔗 Share Preview</button>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
