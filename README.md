# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./docs/assets/Frontend%20Mentor%20Newsletter%20sign-up%20form%20with%20success%20message.png)

### Links

- Solution URL: [Github Repo](https://github.com/WDWaleed/Newsletter-Sign-Up-With-Success-Message)
- Live Site URL: [WDWaleed](https://wdwaleed.github.io/Newsletter-Sign-Up-With-Success-Message/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

I learned a alot about how not specifying explicit dimensions can negatively affect page performance.

I also learned how to use JavaScript to activate functions on key events. In this project, pressing the "Enter" key will also submit the form.

### Continued development

I had alot of trouble in the two things and although I managed to get by in the end by using some "hacks", I have to admit, I'm not proud of how I got by nor do I like how the results. I couldn't achieve what I wanted to and I would appreciate help.

The things I struggled with are the following:

### 1. Transitioning the background to a linear-gradient

I specified a color for a button's normal background and linear-gradient for the hover state. But I could not get it to transition to the hover state. I wanted it to be smooth but it didn't work. Then I found out that linear-gradients work on image related properties a background-color will not transition to background-image. I still haven't found the correct way to transition to the hover state linear-gradient although I came up with a "hack" for the time being.

### 2. Custom markers for list items

I got the result I was looking for by adding the tick svg using the ::before pseudo-element on the list item but I think this is not the correct and efficient way to do this because we've got the ::marker pseudo-element for this job. Can someone please tell me how I can achieve the same result by using the ::marker element?
### Useful resources

- [CSS Gradient.io](https://www.cssgradient.io) - Easily generate gradients for CSS.

- [Omatsuri](https://www.omatsuri.app) - For generating key combinations to be used in JS. It also has many other useful generators and resources. Definitely worth checking out.

## Author

- Frontend Mentor - [@WDWaleed](https://www.frontendmentor.io/profile/WDWaleed)
- Twitter - [@MWA_WebDev](https://twitter.com/MWA_WebDev)
- Github - [WDWaleed](https://github.com/WDWaleed)
