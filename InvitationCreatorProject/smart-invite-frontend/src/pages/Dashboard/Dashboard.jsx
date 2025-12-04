import React from "react";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">

      {/* SIDEBAR */}
      <aside className="sidebar">
        <h2 className="app-title">SmartInvite</h2>
        <p className="app-subtitle">Create magical invitations</p>

        <ul className="menu">
          <li className="menu-item active" onClick={() => navigate("/dashboard")}>
            🏠 Dashboard
          </li>

          <li className="menu-item" onClick={() => navigate("/templates")}>
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
      <main className="content">
        <h1>My Events</h1>
        <p className="subtitle">Manage and track your invitations</p>

        {/* STATS CARDS */}
        <div className="stats-row">
          <div className="stats-card">
            <h3>Total Events</h3>
            <p className="number">12</p>
            <span className="note">+3 this month</span>
          </div>

          <div className="stats-card">
            <h3>Published</h3>
            <p className="number">8</p>
            <span className="note">2 drafts pending</span>
          </div>

          <div className="stats-card">
            <h3>AI Generated</h3>
            <p className="number">5</p>
            <span className="note purple">Powered by AI ✨</span>
          </div>
        </div>

        {/* EVENT LIST */}
        <div className="event-card">
          <div className="event-left">
            <div className="preview-box birthday">
              Birthday <br /> Preview
            </div>
          </div>

          <div className="event-right">
            <h2>Sarah's 30th Birthday</h2>
            <span className="tag">Birthday</span>

            <div className="event-details">
              <span>📅 March 15, 2025</span>
              <span>⏰ 6:00 PM</span>
              <span>📍 Grand Hotel</span>
            </div>

            <div className="event-actions">
              <button className="btn edit">✏️ Edit</button>
              <button className="btn preview">👁 Preview</button>
              <button className="btn download">⬇ Download</button>
              <button className="btn share">🔗 Share</button>
              <button className="btn delete">🗑 Delete</button>
            </div>

            <div className="status published">Published</div>
          </div>
        </div>

      </main>

    </div>
  );
}
