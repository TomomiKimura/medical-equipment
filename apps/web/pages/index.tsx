import { Button } from "ui/shared/Button";

export default function Web() {
    return (
        <div>
            <h1>Web</h1>
            <Button
                type="primary"
                onClick={() => console.log("I also got clicked!")}
            >
                Contact us
            </Button>

            <Button
                type="secondary"
                onClick={() => console.log("I also got clicked!")}
            >
                resources, videos & tools
            </Button>

            <Button
                type="tertiary"
                onClick={() => console.log("I also got clicked!")}
            >
                request info
            </Button>

            <Button
                type="destructive"
                onClick={() => console.log("I also got clicked!")}
            >
                investigate service agreement options
            </Button>
        </div>
    );
}
