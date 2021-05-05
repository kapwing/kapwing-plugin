export const addImageFromUrl = (imageUrl: string) => {
  // we post the url to the parent
  window.parent.postMessage(
    { message: "plugin-helpers-add-image-from-url", value: { url: imageUrl } },
    "*"
  );
};
