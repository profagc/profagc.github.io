# Alex Chakarov Website

> Developed by Gregory Bell and Audrey Haas in Fall 2025 as part of Ethan and Rob's UI/UX course (CSCI598G).


## Updating Content

In general content can be edited by changing the `<page>-content.json` files.

### Textual Content

Generally, the pattern is to update the relevent `content` tag inside of the content json.
Titles can be updated by changing the `title` tag.

### Image Content

You can either upload the images to the `/assets` folder and set the image source in the json, or you can base64 encode the image and display it like that.

Currently all of the images are base64 encoded.


## Client Feedback

After addressing most of the feedback given on the initial figma, we didn't have many required changes.

1. Doesn't like current color scheme.
> We addressed this by using a color scheme that was inspired by the one Alex sent us.
2. Wants a page to display current research.
> We addressed this by designing and implementing a page to showcase both Alex's current research and her overall research interests.
3. Wants a seperate home and about page.
> We addressed this by creating a home page that contains quick information like email, office hours, and courses.
