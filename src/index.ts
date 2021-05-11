import { addImageFromUrl } from "./images";
import { PluginInfoInterface } from "./types";
import { addVideoFromUrl } from "./videos";

export const initKapwing = (pluginInfo: PluginInfoInterface) => {
  const APIWrapper = {
    videos: {
      addFromUrl: (videoUrl: string) => {
        addVideoFromUrl(videoUrl, pluginInfo);
      },
    },
    images: {
      addFromUrl: (imageUrl: string) => {
        addImageFromUrl(imageUrl, pluginInfo);
      },
    },
  };
  return APIWrapper;
};
