import React from "react";
import LinkItem from "./LinkItem";

function LinkList({ links, onDelete }) {
  return (
    <div className="space-y-4">
      {links.map((link, index) => (
        <LinkItem key={index} link={link} onDelete={() => onDelete(index)} />
      ))}
    </div>
  );
}

export default LinkList;
