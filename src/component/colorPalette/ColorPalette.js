import React, { useState } from "react";
import "./colorPalette.css";

const colors = ["#238AC5", "#fbbc04", "#FFF475", "#CCFF90", "#A7FFEB"];

const ColorPalette = ({ note, setNote }) => {
  const [showPalette, setShowPalette] = useState(false);
  return (
    <>
      <div className="color-palette-wrapper">
        <i
          className="fas fa-palette"
          onClick={() => setShowPalette((prev) => !prev)}
        ></i>
        {showPalette && (
          <div className="color-palette">
            {colors.map((color) => {
              return (
                <div
                  key={color}
                  className="palette-color"
                  style={{
                    backgroundColor: color,
                  }}
                  onClick={() => {
                    setNote({
                      ...note,
                      color: color,
                    });
                    setShowPalette((prev) => !prev);
                  }}
                ></div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export { ColorPalette };
