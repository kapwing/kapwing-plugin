import { addImageFromUrl } from "./images";
import { PluginInfoInterface } from "./types";
import { addVideoFromUrl } from "./videos";

export const initKapwing = (pluginInfo: PluginInfoInterface) => {
  const APIWrapper = {
    addImageFromUrl: (imageUrl: string) => {
      addImageFromUrl(imageUrl, pluginInfo);
    },
    addVideoFromUrl: (videoUrl: string) => {
      addVideoFromUrl(videoUrl, pluginInfo);
    },
  };
  return APIWrapper;
};
