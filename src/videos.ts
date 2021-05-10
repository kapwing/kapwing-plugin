import { PluginInfoInterface } from "./types";

export const addVideoFromUrl = (
  videoUrl: string,
  pluginInfo: PluginInfoInterface
) => {
  window.parent.postMessage(
    { message: "add-video-from-url", value: { url: videoUrl, pluginInfo } },
    "*"
  );
};
