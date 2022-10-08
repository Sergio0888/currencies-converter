import { nanoid } from "nanoid";

const items = [
    {
        id: nanoid(),
        text: "Exchange",
        to: "/"
    },
    {
        id: nanoid(),
        text: "Rates",
        to: "/rates"
    }
];

export default items;