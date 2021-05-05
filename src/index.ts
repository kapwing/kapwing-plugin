import { addImageFromUrl } from "./images";

export const Greeter = (name: string) => `Hello ${name}`;

export const printMsg = () => {
  console.info("This is a message from the demo Kapwing package");
};

export const kapwing = {
  addImageFromUrl,
};
