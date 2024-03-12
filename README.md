Description
---
This is a small library / project to allow web novels to spoiler text to allow for a more inclusive and accessible experience. Initially made for [Neokosmos](https://neokosmos.space), I am releasing this to public so more people can use it.  
The work only comes with very basic styling and interface, to allow people to style it to their own work, you can see how it is styled in Neokosmos in this image:  
![An example of styling the spoilers](/styling-example.png)

Usage
---

To use dynamic spoilers, you need to include the css and js in your header, along with Cookies: 
```html
<link rel="stylesheet" href="./spoiler.css">
<script src="./js.cookie.min.js"></script>
<script src="./spoiler.js"></script>
```

Once you have done so, you can add the attribute "data-spoiler" to mostly any element to turn it into a spoiler.
```html
<p data-spoiler="Example">
  This Paragraph is a spoiler!
</p>
```
The element will only be hidden if the user has toggled the relevant box in settings, which can be added to the `fieldset` on the settings page like so:
```html
<input type="checkbox" id="spoiler-test" value="Example"><label for="spoiler-test">Example</label>
```

License
---
This code is distributed under the GNU AGPLv3, which allows all uses of the code as long as users have access to the source code for this project and changes to said code are stated.  
js-cookies is distributed under an MIT License, it's text can be found in the `LICENCE-JS-COOKIES` file.


Dependencies
---
[js-cookies](https://github.com/js-cookie/js-cookie)

Contributions
---
Thanks to CodeDraken for their [helpful resource](https://dev.to/learn2dev/css-shorts-spoilers-and-hidden-content-3621) of which i borrowed parts of to make this accessible to screen readers.
