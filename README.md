### How can you create a website that follows Broken Grid's approaches using only css grid? Below you can see such a design of a website, which we want to implement step by step with the help of "css grid layout". 

![finished website](https://github.com/vdemizki/broken-grid-design-with-CSS-grid/blob/master/images/broken-grid-example/finished-website-example.png)

### Step 1: Create a grid
Creating a grid means enclosing the contents of the website with lines. This creates a grid-like structure that can be seen at the bottom of the image. Once the grid has been created, it is good to number the individual lines from left to right and top to bottom, as this is important for the placement of the content later on. 

![make-grid-1](https://github.com/vdemizki/broken-grid-design-with-CSS-grid/blob/master/images/broken-grid-example/make-grid-1.png)

### Step 2: Define the distance between lines
The space that is defined can serve both for the content and for the individual distances between them. CSS grid layout uses the unit "fr" (fractional unit) for this. "1 fr" denotes part of the available space. For example, if you define it as "1fr 1fr 1fr" you get three parts that share the space equally. So each part gets 1/3 of the available space. But how do you use this unit properly? The figure below reveals it. As you can see, it is smart to look for the smallest distance and define it as "1fr". This distance then serves as a fixed guide for all others. With websites that are asymmetrical, it can quickly happen that the smallest unit does not always fit completely into other distances. You can of course use comma numbers to make the design exact, but in our case it's not so important, which is why I sometimes rounded it up or down.

![make-grid-2](https://github.com/vdemizki/broken-grid-design-with-CSS-grid/blob/master/images/broken-grid-example/make-grid-2.png)

If the whole thing has been done for all distances, the result will look like this:

![make-grid-3](https://github.com/vdemizki/broken-grid-design-with-CSS-grid/blob/master/images/broken-grid-example/make-grid-3.png)

### Step 3: Implementation
The implementation is super easy thanks to css grid layout. The order in which we have to place the elements in the HTML document doesn't matter, since we use css grid layout to control the placement of the content. However, clear classes or ID names are important to access them. This is how the visible content of the HTML document can look like:

     <div class="container">

       <div class="logo"></div>
       <div class="headerNav">Home</div>

       <div class="burgerMenu">
         <div class="bar1"></div>
         <div class="bar2"></div>
         <div class="bar3"></div>
       </div>

       <div class="img1"></div>
       <div class="img2"></div>
       <div class="img3"></div>
       <div class="mainText aTextPart">Broken</div>
       <div class="mainText bTextPart">Grid</div>
       <div class="topicNav topic1" ">Broken Grid</div>
       <div class="topicNav topic2" ">Design</div>
       <div class="topicNav topic3" ">Project 2019</div>

     </div>

Now let's get to the important part. The CSS file. `<div class="container">` contains all contents. On it we want to apply our grid. The instruction for this is: `display: grid`. Next the grid is defined. With `grid-template-columns` and `grid-template-rows` we create the columns and rows and thus the exact grid we want. After all this, the following should be in the css document:

    .container {

      display: grid;
      grid-template-columns: 1fr 2fr 10fr 3fr 3fr 3fr 3fr 3fr 3fr 6fr 6fr 3fr 3fr;
      grid-template-rows: 1fr 1fr 1fr 1fr 5fr 1fr 2fr 3fr 1fr 5fr 1fr 1fr 5fr;

    }

Now we just have to place the desired content with the previously numbered lines. The content we can place includes all elements within the `<div class="container">`. These elements are also called grid items. The functions `grid-column` and `grid-row` allow you to exactly define the position of the item on the website based on the number of the lines. For example the statements `grid-column: 1/3;` and `grid-row: 1/2;` mean that the desired item is placed between column line 2 and 3 and row line 1 and 2. And this is what it would look like:

![grid-item](https://github.com/vdemizki/broken-grid-design-with-CSS-grid/blob/master/images/broken-grid-example/grid-item.png)

And how it looks in the our css file:

    .logo {
      grid-column: 2/3;
      grid-row: 2/4;
    }

If you have done this with all items we are at the end of the placement process. Of course, we're not all done. The fine sleeping is still missing. The pictures have to be integrated into the `<div>` as background and the texts may have to be aligned. These are all just small things that can be controlled with Basis CSS. That's why I don't go into this here. If the result doesn't look as intended, a look into the source code is advisable.

The functions of the css grid layout used here are fundemental but only cover a small part of the functionality. CSS grid layout is much bigger and more versatile. If you are interested I recommend the following websites to extend and consolidate your knowledge.

### Here are some helpful websites
* [CSS Grid - information](https://www.w3schools.com/css/css_grid.asp)
* [CSS Grid - complete guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
* [CSS Grid - usage examples](https://gridbyexample.com/examples/)
* [CSS Grid - learning game](https://cssgridgarden.com/#de)
* [CSS Grid - grid generator](http://griddy.io/)

