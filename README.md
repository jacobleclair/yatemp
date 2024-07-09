# yatemp
Yet another HTML templating utility.
- Extremely lightweight, at 0.2kb compressed.
- Uses HTML comments, making it work with any HTML editor.
- Extremely simple and fast
# Install
```
npm install yatemp
```
# Usage
```
const Template = require("yatemp");
const t = new Template({first: "John", last: "Doe"});
t.parse("My name is <!--$first--> <!--$last-->"); // My name is John Doe
```
