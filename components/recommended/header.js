import React from "react";

export default function RecomHeader({ title, color }) {
  return (
    <div className={`${color} p-3 rounded-t-lg text-xl text-white uppercase`}>
      {title}
    </div>
  );
}
