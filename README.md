# Stunner YPP coding exam

## 01 - Carousel

### Answer to the question

`If you were to use third-party tools to complete this challenge, what would you use? Write a sentence or two describing your reasoning.`

Maybe I will a UI library depending on the design of the carousel. I recently explored mantine and I was amazed by the beautiful UI examples they have and available source code for easy implementation. I also like to improve my skills to do this carousels using only tailwindcss in reactjs. I honestly don't mind the cluttered utility classes tailwindcss provides because I really find it easy and flexible to use.

### Solution

The approach is a bit long and it uses only basic operations. There's is also a bit delay in initial loading. To improve this, it is good to make sure that the slide 1 will render first upon loading but here, it first load slide 2.<br>

## 02 - Modal

### Solution

The first approach is to add a `div` in index.html file with `modal` as id. From the main modal div, additional div will be inserted thru innerHTML inside modal.js to control it's appearance when an event happened in the cancel button.The new created element will also have yes and no button id to get selected and apply another event listener to set the need behavior based on which button is clicked. These buttons will follow the desired output which is to close the modal when no-button is clicked and display a different message when yes-button is clicked. Finally, the modal will be automatically close after 2s thru the setTimeout function. Additionally at the end, the modal will also close when users click outside the modal.
