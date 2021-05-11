import { PluginInfoInterface } from "./types";

export const addImageFromUrl = (
  imageUrl: string,
  pluginInfo: PluginInfoInterface
) => {
  // we post the url to the parent
  window.parent.postMessage(
    { message: "image-add-from-url", value: { url: imageUrl, pluginInfo } },
    "*"
  );
};
