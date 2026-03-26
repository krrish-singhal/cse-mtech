import React from "react";

/**
 * FilterButton Component
 *
 * A reusable filter button with active/inactive states and count display
 *
 * @param {string} filterId - Unique identifier for this filter
 * @param {string} label - Display text for the button
 * @param {number} count - Number of items in this category (optional)
 * @param {boolean} isActive - Whether this filter is currently active
 * @param {string} color - Color for active state (hex code)
 * @param {function} onClick - Click handler function
 */
const FilterButton = ({
  filterId,
  label,
  count,
  isActive,
  color = "#F26520",
  onClick,
}) => {
  const themeNavy = "#164265";

  return (
    <button
      type="button"
      onClick={() => onClick(filterId)}
      className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold whitespace-nowrap transition-all duration-200
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
        ${isActive ? "shadow-md" : "shadow-sm hover:shadow-md"}
      `}
      style={(() => {
        if (isActive) {
          return {
            backgroundColor: color,
            borderColor: color,
            color: "#FFFFFF",
            boxShadow: "0 10px 20px rgba(0,0,0,0.08)",
          };
        }

        return {
          backgroundColor: "#FFFFFF",
          borderColor: `${themeNavy}33`,
          color: themeNavy,
        };
      })()}
      aria-pressed={isActive}
      aria-label={`Filter by ${label}${count !== undefined ? `, ${count} items` : ""}`}
    >
      <span
        className="transition-colors duration-200"
        style={
          isActive
            ? {}
            : {
                color: themeNavy,
              }
        }
      >
        {label}
      </span>

      {count !== undefined ? (
        <span
          className="inline-flex items-center justify-center rounded-full px-2 py-0.5 text-xs font-bold"
          style={
            isActive
              ? { backgroundColor: "rgba(255,255,255,0.22)", color: "#FFFFFF" }
              : { backgroundColor: `${themeNavy}14`, color: themeNavy }
          }
        >
          {count}
        </span>
      ) : null}
    </button>
  );
};

export default FilterButton;
