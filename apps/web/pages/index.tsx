import { Button } from "ui/shared/Button";

export default function Web() {
  return (
    <div>
      <h1>Web</h1>
      <Button onClick={()=> console.log("I also got clicked!")}>Learn to Buy!</Button>
    </div>
  );
}
