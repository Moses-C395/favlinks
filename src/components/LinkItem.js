import React from "react";

function LinkItem({ link, onDelete }) {
  return (
    <div className="flex justify-between items-center border p-4 rounded shadow">
      <a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        {link.name}
      </a>
      <button
        onClick={onDelete}
        className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
      >
        Delete
      </button>
    </div>
  );
}

export default LinkItem;
