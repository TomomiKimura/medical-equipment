import { Button } from "ui/shared/Button";
import React from "react";

export default function Web() {
  return (
    <div>
      <h1>Web</h1>
      <Button type="primary" onClick={() => console.log("I got clicked!")}>
        Learn to Buy!
      </Button>
    </div>
  );
}
