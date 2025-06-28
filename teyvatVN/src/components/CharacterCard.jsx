// src/components/CharacterCard.jsx
import React from "react";

export default function CharacterCard({ name, image, description }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden flex flex-col dark:bg-gray-800 dark:border-gray-700">
      {/* Icon / Image */}
      <div className="w-full h-24 bg-gray-100 flex items-center justify-center p-2">
        <img src={image} alt={name} className="h-full object-contain" />
      </div>

      {/* Info */}
      <div className="p-3 flex flex-col justify-between h-full text-center">
        <h5 className="text-sm font-bold text-gray-900 dark:text-white mb-1">
          {name}
        </h5>
        <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-3 mb-2">
          {description || "No description."}
        </p>
        <button className="mt-auto w-full inline-flex items-center justify-center px-3 py-1 text-xs font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition">
          Select
          <svg
            className="w-3.5 h-3.5 ml-1"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
