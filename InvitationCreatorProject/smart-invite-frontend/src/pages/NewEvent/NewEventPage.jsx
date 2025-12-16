import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./NewEventPage.css";

export default function NewEventPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const template = location.state?.template;

  const [form, setForm] = useState({
    eventTitle: "",
    eventDate: "",
    eventTime: "",
    venue: "",
    description: ""
  });

  if (!template) {
    return (
      <div className="error">
        No template selected.
        <button onClick={() => navigate("/templates")}>Go Back</button>
      </div>
    );
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const user = JSON.parse(localStorage.getItem("user"));

  const payload = {
    templateId: template.templateId,
    userId: user.userId,
    eventType: template.category,
    eventTitle: form.eventTitle,
    eventDate: form.eventDate,
    eventTime: form.eventTime,
    venueName: form.venue,
    venueAddress: "",
    eventDescription: form.description
  };

  const res = await fetch("http://localhost:8080/api/invitations", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });

  const data = await res.json();
  console.log("Invitation saved:", data);

  alert("Invitation saved as draft!");
};


  return (
    <div className="new-event-container">

      {/* LEFT: TEMPLATE PREVIEW */}
      <div className="template-preview">
        <img
          src={`http://localhost:8080${template.imageUrl}`}
          alt={template.name}
        />
        <h3>{template.name}</h3>
        <p>{template.category}</p>
      </div>

      {/* RIGHT: EVENT FORM */}
      <div className="event-form">
        <h2>Create New Event</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="eventTitle"
            placeholder="Event Title"
            value={form.eventTitle}
            onChange={handleChange}
            required
          />

          <input
            type="date"
            name="eventDate"
            value={form.eventDate}
            onChange={handleChange}
            required
          />

          <input
            type="time"
            name="eventTime"
            value={form.eventTime}
            onChange={handleChange}
          />

          <input
            type="text"
            name="venue"
            placeholder="Venue"
            value={form.venue}
            onChange={handleChange}
          />

          <textarea
            name="description"
            placeholder="Event Description"
            value={form.description}
            onChange={handleChange}
          />

          <button type="submit">Continue</button>
        </form>
      </div>
    </div>
  );
}
