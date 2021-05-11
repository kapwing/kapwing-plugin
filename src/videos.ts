import { PluginInfoInterface } from "./types";

export const addVideoFromUrl = (
  videoUrl: string,
  pluginInfo: PluginInfoInterface
) => {
  window.parent.postMessage(
    { message: "video-add-from-url", value: { url: videoUrl, pluginInfo } },
    "*"
  );
};
