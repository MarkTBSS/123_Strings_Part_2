Working with Strings - Part 2

16.1 Write a function called normalizeAuthorName that takes an author's name (string) as an argument, and returns the same string, but the first name and last name are capitalized, and the "(Contributor)" part is removed (if exists).

You can be sure that the author's name always consists of two words separated by a space, and possibly ends with "(Contributor)". The string may also contain trailing spaces.

Code:

```
normalizeAuthorName('  JuliE sussMan (Contributor)')
```

Expected output: "Julie Sussman"

16.2 Take the title of the second book (books[1]) from the books array, and replace the word "Programs" with "Software". Assign the new string to the newBookTitle variable.

16.3 Write a function called logBookTheme that takes book's title (string), and logs to the console:

"This book is about computers" if the title starts with the word "computer",

"This book is about algorithms and data structures" if the title includes both the "algorithms" and "structures" words,

and, "This book is about some systems, but definitely not about operating systems" if the title ends with the word "system" or "systems", but doesn't include the word "operating".

The title may contain both small and capital letters.

# Run

```
node script.js
node assignment.js
```
