# Tic-Tac-Toe

### Description

This is a basic Tic Tac Toe game I made for a class project.

### User Stories

* As a user I should be able to start a game.
* As a user I should know whos turn it is.
* As a user I shouldn't be able to click on a tile twice.
* As a user I should see a message if I won, lost, or if there was a draw.
* As a user I should be able to replay wihtout refreshing.


### Technologies

I made this using vanilla html, css, and javascript

## Planning and Development 

- I started by drawing up a basic wireframe, but my design ended up changing part way through development due what I was able to do within the timeframe and my knowledge of coding.
- I made the game board using HTML and CSS. I made a section in HTML and then made 9 divs in the section for the tiles. In CSS I added grid styling to the section so the tiles would appear as a tic tac toe board and used flex on the divs so the content (X and O) would be centered within the tile elements within the grid. I also made the Player One, Two and both buttons in HTML and used CSS to style them and center them in the screen.
- After everything was made and styled, it was time to start writing JavaScript to make the game work. I started off by making all the variables I would need. I then started writing the game logic, it's pretty much just a lot of if statements. If tile has a value then you can't click it, if it doesn't then you can and it updates the board with the current players letter and then changes players. Reset button was next, once clicked it resets the board and changes current player back to X. Then I added the start button, so I had to add a variable for if the game was started or not and make it so you can't click on tiles until you start the game. The winning conditions were last and were the hardest thing for me to figure out. I struggled on them for quite some time, I eventually got pointed in the right direction and was able to figure them out. Right now its just a bunch of if statements I want to eventually condense them down so I don't have such a long code, but for now they work.

### Future Updates

- [ ] I want to add a score system
- [ ] I want to add more styling, e.g. background color/image, styling for the X and O
- [ ] I want to add mobile support
- [ ] I want to try and add an AI opponent