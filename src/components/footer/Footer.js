import React from "react";
import "./footer.css";

function AppFooter() {
  return (
    <div className="footer">
      <p>
        &copy;{new Date().getFullYear()} College Project | All rights reserved |
        Terms Of Service | Privacy
      </p>
    </div>
  );
}

export default AppFooter;
