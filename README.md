# Exercise 3 Web Client Development

## Description
In this exercise, I will customize and enhance the appearance of a website that initially lacks CSS, making it more visually appealing and interactive by adding styles using CSS and additional functionality using JavaScript.

## Preparation
Here are some necessary preparations:
1. Website files, including `index.html`, `style.css`, and a collection of supporting images, which can be found in [this repository](https://www.figma.com/design/CAawvDkcG4AIoMWvHwrQvo/workoutaja?node-id=0-1&t=VVSwhmOTNgDBqpNP-1).
2. The final website appearance should refer to the design available at [this link](https://www.figma.com/design/CAawvDkcG4AIoMWvHwrQvo/workoutaja?node-id=0-1&t=VVSwhmOTNgDBqpNP-1) . Here is a preview of the design:
    <p align="center">
    <img src="https://github.com/user-attachments/assets/9e854b2e-d49b-495f-98cc-05e2bd05c42f">
    </p>

3. A text editor such as VSCode, Sublime Text, or others.
4. Git for cloning the repository and pushing code to GitHub.

## Folder Structure

Here is the folder structure of this project along with explanations:
```
..
├── images/ # Directory to store images and icons used in the website 
    ├── balls.svg 
    ├── logo.svg
    ├── whatsapp-icon.svg
    ├── woman.svg
├── index.html # Main HTML file containing the web page structure 
├── style.css # Stylesheet file that controls the appearance and layout of the page 
├── script.js # JavaScript file that handles page interactivity 
├── README.md # Project documentation containing usage guidelines and important information
```

## Modifications Made
In this exercise, I will make the following modifications:

1. Adding CSS to enhance the appearance.
2. Implementing JavaScript to increase interactivity.
3. Adjusting the layout to be more responsive across different devices.
4. Refining the HTML structure for better organization. 

## Website Features
The final website will include the following features:
1. **Interactive Navigation**. A responsive menu that adapts to different screen sizes.
2. **Visually Appealing Design**. A modern design with comfortable color combinations and smooth animations.
3. **Smooth Transition Effects**. Elements such as text and images fade in when the page loads.
4. **Interactive Buttons**. Buttons change color when clicked or hovered over for better visual feedback.
5. **Responsive Design**. A flexible layout ensuring an optimal display across different devices.


## Steps Taken to Complete the Exercise
Below are the steps to customize the website appearance using CSS:

### Clone the Repository to Local Machine
The first step is to clone the repository to the local computer using the following command:
```
git clone git@github.com:cakrawala-university/web-client-development.git
```

Once cloning is complete, move the entire website folder to the appropriate directory with the following command:
```
cd workoutaja
mv * ../website_folder_name/
```

### Customizing the Website Appearance with CSS
When accessed for the first time, the website does not yet use a CSS file, making its appearance very basic, as shown below:
<p align="center">
    <img src="https://github.com/user-attachments/assets/14f56487-c001-4bf2-a78a-df4fde32890b">

</p>

To improve the design, I made the following adjustments in `style.css` and `index.html`:
- Added `box-sizing: border-box;` to the `*` selector to ensure padding and borders do not affect the total element size.
- Set `max-width: 1680px;` and `width: 85%;` to ensure responsiveness across various screen sizes.
- Removed bullet points from the menu using `list-style: none;` in `nav ul`.
- Removed underline from navigation links using `text-decoration: none;` in `nav ul li a`.
- Adjusted font sizes and text colors to match the reference design.
- Added hover effects to links and buttons for better visual appeal.
- Ensured buttons have appropriate padding, colors, and border-radius to align with the design.
- Optimized `<button>` elements without using `alt` (_*since alt is only for images_).
- Added `cursor: pointer` to buttons to enhance user interaction.
- Removed duplicate `<a href="#">` elements in the logo section.
- Added a `.hero-image`class to control image size for better adaptability across screens.

After applying these changes, the website appears more refined, as shown below:
<p align="center">
  <img src="https://github.com/user-attachments/assets/e61831e5-0f39-48e6-a146-b15f7d78d5fc" alt="Setelah Penyesuaian CSS">
</p>

Additionally, I ensured the layout adapts better to different screen sizes:
<p align="center">
    <img src="https://github.com/user-attachments/assets/9c9be7d6-5656-46a9-8f75-4ff70b03971b" alt="Setelah penambahan script CSS agar lebih responsif">
</p>

### Adding Interactivity with JavaScript
To enhance user experience, I added a `script.js` file containing various interactive features such as button animations, navigation effects, and smoother page transitions. Here’s how it was implemented:

1. **Selecting Essential Elements**
   
   First, I used `document.querySelector` to retrieve key elements for interaction:
    ```
    document.addEventListener("DOMContentLoaded", function () {
        const startButton = document.querySelector(".text button");
        const navLinks = document.querySelectorAll("nav ul li a");
        const pageContent = document.querySelector("main");
        const heroImage = document.querySelector(".hero-image");
    ```

2. **Start Button Animation**
  
   To give visual feedback when the **Start** button is clicked, I added a color-changing animation:
    ```
    let isClicked = false; 
  
    startButton.addEventListener("click", function () {
        isClicked = true; 
        startButton.style.backgroundColor = "#3d6655"; 
        setTimeout(() => {
            startButton.style.backgroundColor = "#69B99D"; 
        }, 300);
    });
    ```
   **Explanation**:
   - When clicked, the button background changes to a darker shade (`#3d6655`) for a **pressed** effect.
   - After **300ms**, the button returns to its original color (`#69B99D`), creating a smooth transition effect.

3. **Hover Effect After Click**
   
   To enhance user experience, I added a hover effect that changes after the button is clicked:
     ```
    startButton.addEventListener("mouseenter", function () {
        if (isClicked) {
            startButton.style.backgroundColor = "#4a8a77";
        }
    });
  
    startButton.addEventListener("mouseleave", function () {
        if (isClicked) {
            startButton.style.backgroundColor = "#69B99D";
        }
    });
     ```
   **Explanation**:
   - If the button has been clicked, its hover color changes to `#4a8a77`.
   - When the cursor moves away, the color resets to `#69B99D`.

4. **Navigation Click Effect**
  
   To make navigation more intuitive, I added an effect that changes the transparency of menu items when clicked:
     ```
    navLinks.forEach(link => {
      link.addEventListener("click", function () {
        navLinks.forEach(nav => nav.style.opacity = "0.5");
        this.style.opacity = "1";
      });
    });
     ```
   **Explanation**:
   - When a navigation link is clicked, the opacity of all other links reduces to `0.5`, highlighting the active link.
   - This helps users identify which page they are on.

5. **Fade-in Effect on Page Load**
   
   To make the website more dynamic, I added a fade-in effect to main elements when the page loads:
     ```
    setTimeout(() => {
        pageContent.classList.add("visible");
        heroImage.classList.add("visible");
        document.body.classList.add("loaded");
    }, 200);
     ```
   **Explanation**:
   - `setTimeout()` delays the animation by **200ms**, creating a smoother transition.
   - The `.visible` class is added to the main content and hero image, making them appear gradually.
   - The `.loaded` class is added to the body to activate additional animations if needed.



https://github.com/user-attachments/assets/ae539a77-0dd8-4e7f-9445-7162e9cc0b1f


