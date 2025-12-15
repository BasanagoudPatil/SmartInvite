import { useState } from "react";

export default function TemplateAdminPage() {

  const [form, setForm] = useState({
    name: "",
    category: "BIRTHDAY",
    imageUrl: "",
    premium: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

     try {
    const res = await fetch("http://localhost:8080/api/templates/admin/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (!res.ok) {
      throw new Error("API failed with status " + res.status);
    }

    const data = await res.json();
    console.log("Saved template:", data);

    alert("✅ Template added");
  } catch (err) {
    console.error("Template save failed:", err);
    alert("❌ Backend not reachable");
  }
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>Template Admin</h2>

      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Template Name" onChange={handleChange} />
        
        <select name="category" onChange={handleChange}>
          <option value="BIRTHDAY">Birthday</option>
          <option value="WEDDING">Wedding</option>
          <option value="CORPORATE">Corporate</option>
          <option value="ENGAGEMENT">Engagement</option>
          <option value="HOUSEWARMING">Housewarming</option>
          <option value="OTHER">Other</option>
        </select>

        <input
          name="imageUrl"
          placeholder="/templates/Birthday/birthday1.jpg"
          onChange={handleChange}
        />

        <label>
          <input type="checkbox" name="premium" onChange={handleChange} />
          Premium
        </label>

        <button>Add Template</button>
      </form>
    </div>
  );
}
