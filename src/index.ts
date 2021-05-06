import { addImageFromUrl } from "./images";
import { PluginInfoInterface } from "./types";

export const initKapwing = (pluginInfo: PluginInfoInterface) => {
  const APIWrapper = {
    addImageFromUrl: (imageUrl: string) => {
      addImageFromUrl(imageUrl, pluginInfo);
    },
  };
  return APIWrapper;
};

export const kapwing = {
  initKapwing,
};
