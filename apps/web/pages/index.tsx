import { Button } from "ui/shared/Button/Button";

export default function Web() {
  return (
    <div>
      <h1>Web</h1>
      <Button type="primary" onClick={() => console.log("I also got clicked!")}>
        Contact us
      </Button>
    </div>
  );
}
