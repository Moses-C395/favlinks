import React, { useState } from "react";

function AddLinkForm({ onAdd }) {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && url) {
      onAdd({ name, url });
      setName("");
      setUrl("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 space-y-4">
      <input
        type="text"
        placeholder="Website Name"
        className="border p-2 rounded w-full"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="url"
        placeholder="https://example.com"
        className="border p-2 rounded w-full"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button
        type="submit"
        className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded"
      >
        Add Link
      </button>
    </form>
  );
}

export default AddLinkForm;
