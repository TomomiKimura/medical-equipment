import { Button } from "ui/shared/Button";
import React from "react";

export default function Web() {
  return (
    <div>
      <h1>Web</h1>
      <Button type="primary" onClick={() => console.log("I got clicked!")}>
        Learn to Buy!
      </Button>
      <i className="bi bi-chevron-double-left"></i>
      <i className="bi bi-chevron-double-right"></i>
    </div>
  );
}
