import { Button } from "ui/shared/Button";

export default function Docs() {
  return (
    <div>
      <h1>Docs</h1>
      <Button type="primary" onClick={() => console.log("I also got clicked!")}>
        Buy!
      </Button>
    </div>
  );
}
