# Kapwing Plugin Helpers

This repo is the NPM package for creating plugins on [Kapwing](https://www.kapwing.com).

## Getting started

To install this package, run `npm install @kapwing/plugin-helpers`.

To get started with building a plugin for Kapwing, please reach out directly to our team. We are prioritizing all plugin requests and will respond and help quickly! Your plugin will need to be whitelisted in order to work properly. You can find our contact information [on this page](https://www.kapwing.com/contact-us).

## Usage

First, import the `initKapwing` function from the plugin:

```javascript
import { initKapwing } from "@kapwing/plugin-helpers";
```

Then, later in your code or component, initialize the plugin with your plugin name. Your plugin name must be approved for this to work properly:

```javascript
const kapwing = initKapwing({ id: "my-plugin-id" });
```

Finally, call the available functions to add images to Kapwing.

```javascript
const url = "https://www.images.com/sample-image.jpg";
kapwing.video.addFromUrl(url);
```

The full api is listed in the sections below. Currently there are two namespaces images and videos.

### Videos

```javascript
kapwing.video.addFrom(url);
```

Adds the video at the given url to the canvas. A response will be sent back via the postMessage api. Response:

```javascript
{
  success: boolean,
  url: string,
}
```

Success will indicate whether the layer was added to the canvas. URL will match the link that was sent originally. This helps to distinguish between layers when added simultaneously.

### Images

```javascript
kapwing.image.addFrom(url);
```

Adds the image at the given url to the canvas. A response will be sent back via the postMessage api. Response:

```javascript
{
  success: boolean,
  url: string,
}
```

Success will indicate whether the layer was added to the canvas. URL will match the link that was sent originally. This helps to distinguish between layers when added simultaneously.
