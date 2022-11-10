// import { Button } from "ui/shared/Button";

import { IconTile } from "ui/shared/IconTile/IconTile";

export default function Web() {
  return (
    <div>
      <h1>Web</h1>
      <IconTile title="title" description="description" onClick={() => console.log("I got clicked!")}>
        Learn to Buy!
      </IconTile>
    </div>
  );
}
