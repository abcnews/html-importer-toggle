# Required steps

## HTML manipulation

Some manipulation of the ai2html scripts html is required.

Ensure that the a and b images are present for all different screens sizes

- You will need to add in the b images manually
- Just copy the existing image which should have been created when running the ai2html script
  - update its src to be the name of the image
  - add the class "b-image"

Note: The order of the images is important. Image b needs to be below image a in the html

Example:

```html
...
<img
  id="g-gazathermal-Artboard_1-img"
  class="g-gazathermal-Artboard_1-img g-aiImg"
  alt=""
  src="ColourDesktop-2-100.jpg"
/>
<img
  id="g-gazathermal-Artboard_1-img"
  class="g-gazathermal-Artboard_1-img g-aiImg b-image"
  alt=""
  src="gazathermal-Artboard_1.jpg"
/>
...
```

## Core instructions

Mount name: #htmlimportertoggle
Core asset name: [DSI] HTML Importer Toggle

Usage example: #htmlimportertoggleFOLDERNAMEgazathermalHTMLNAMEgazathermal

### Mount Parameters

| Parameter  | Explanation                                                      |
| ---------- | ---------------------------------------------------------------- |
| FOLDERNAME | Folder with html files in /dat/news/interactives/htmls directory |
| HTMLNAME   | Name of html file to be imported.                                |

FOLDERNAME and HTMLNAME must be lower case and must not contain any special characters.

# Optional steps

## Make full width

Set `responsiveness: dynamic` when running the ai2html script

## Change toggle settings

You can change the labels in the two buttons aswell as which one is initially toggle on
All settings are set on the main html element (**this has to have the class ai2html**) as data parameters (e.g. data-\*)

| Option                                 | data paramter | data type | default |
| -------------------------------------- | ------------- | --------- | ------- |
| Label in button A                      | data-a-label  | string    | Before  |
| Label in button B                      | data-b-label  | string    | After   |
| Set button B to be toggle on initially | data-start-b  | boolean   | false   |

Example

```html
<div id="g-gazathermal-box" class="ai2html" data-a-label="Colour" data-b-label="Thermal" data-start-b="true">...</div>
```

## Set the alt text

Manually edit the alt text for the images in the html

# TODO

- It may be possible to set the data attributes (etc.) via the ai2html illustrator script
