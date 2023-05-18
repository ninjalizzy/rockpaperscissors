# rockpaperscissors

This began as a simple browser console game. Now it has a UI! It's not the prettiest but I'm still learning.

Lessons learned/reviewed:
 - function scope and global vs. local variables
 - when not to use a return value (originally returned score, produced lag in score)
 - what you can do with event listeners
 - arrow functions used to call a function with an argument
 - disabling and unhiding elements

Potential improvements:
 - game is one massive function; break win/lose (lines 62-80) into separate function
 - win/lose function has repeated elements
 - background image has a line on the bottom despite 'cover' attributes
 - better align choices display and eliminate spacing jumpiness (use grid?)
