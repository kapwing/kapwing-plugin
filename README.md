# Kapwing Plugin Helpers

This repo is the NPM package for creating plugins on [Kapwing](https://www.kapwing.com).

## Getting started

To install this package, run `npm install @kapwing/plugin-helpers`.

To get started with building a plugin for Kapwing, please reach out directly to our team. We are prioritizing all plugin requests and will respond and help quickly! Your plugin will need to be whitelisted in order to work properly. You can find our contact information [on this page](https://www.kapwing.com/contact-us).

## Usage

First, import the `initKapwing` function from the plugin:

```
import { initKapwing } from "@kapwing/plugin-helpers";
```

Then, later in your code or component, initialize the plugin with your plugin name. Your plugin name must be approved for this to work properly:

```
const kapwing = initKapwing({ id: "my-plugin-id" });
```

Finally, call the available functions to add images to Kapwing.

```
const url = "https://www.images.com/sample-image.jpg"
kapwing.addImageFromUrl(url);
```
