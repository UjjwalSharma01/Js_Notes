
# Practicing DOM Manipulation with Embedded JavaScript and Comments

DOM is known as Document Object Model. It is a programming interface for web documents. It represents the structure of a document as a tree of objects. The DOM is used to interact with the HTML elements of a web page dynamically using JavaScript.

## HTML Structure with Embedded JavaScript

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chai aur code</title>
</head>
<body style="background-color: #212121; color: #fff;">

    <script>
        // JavaScript code for DOM manipulation

        // Create a new <div> element
        const div = document.createElement('div');

        // Set class name and ID dynamically
        div.className = "main";
        div.id = Math.round(Math.random() * 10 + 1);

        // Set attribute for the <div>
        div.setAttribute("title", "generated title");

        // Apply inline styles to the <div>
        div.style.backgroundColor = "green";
        div.style.padding = "12px";
        
        // Create a text node with content
        const textNode = document.createTextNode("Chai aur code");

        // Append the text node to the <div>
        div.appendChild(textNode);
        
        // Append the <div> to the <body> of the HTML document
        document.body.appendChild(div);
    </script>

</body>
</html>
```

### Explanation

- **HTML Structure:**
  - The HTML document includes `<head>` and `<body>` sections.
  - The `<body>` contains inline styles (`background-color` and `color`) to set the background and text color.
  - The `<script>` tag is used to embed JavaScript directly within the `<body>` section.

- **JavaScript Code with Comments:**
  - **`document.createElement('div')`:** Creates a new `<div>` element.
  - **Setting Properties:**
    - **`div.className` and `div.id`:** Assigns a class name and a randomly generated ID to the `<div>` element.
    - **`div.setAttribute("title", "generated title")`:** Sets the `title` attribute of the `<div>` element.
    - **Inline Styles (`backgroundColor` and `padding`):** Sets CSS styles for the `<div>` element.
  - **Creating Text Node:**
    - **`document.createTextNode("Chai aur code")`:** Creates a text node containing the specified text content.
    - **`div.appendChild(textNode)`:** Appends the text node to the `<div>` element.
  - **Appending to the Document:**
    - **`document.body.appendChild(div)`:** Inserts the `<div>` element as a child of the `<body>` element in the document.

### Result

When you open this HTML file in a web browser, the embedded JavaScript code will execute, creating a styled `<div>` element with text content dynamically inserted into the `<body>`. You can modify and experiment with the JavaScript code to practice various DOM manipulation techniques.

