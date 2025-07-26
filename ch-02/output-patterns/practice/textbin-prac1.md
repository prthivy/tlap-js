## Output Patterns Principle Steps
* System, Iterator, Generator 

### Inverse Pyramid
    
* System: node 
  * print with process.stdout.write()
  * endline with \n
  
* Iterator: row

* Generator: blank1, symbol, blank2
  * blank1 = blank2
  * blank = row
  * symbol = 8 - (2 * row)

### Pyramid

* System: node 
  * print with process.stdout.write()
  * endline with \n
  
* Iterator: row

* Generator: blank1, symbol, blank2
  * blank1 = blank2
  * blank = 3 - row
  * symbol = (2 * row) + 2

### Empty Inverse-Regular-Joined Pyramid

* System: node 
  * print with process.stdout.write()
  * endline with \n
  
* Iterator: row

* Generator: Upper:
  * blank1, symbol1, blank2, symbol2, blank3
  * blank1 = blank3 = row
  * symbol1 = symbol2 = row + 1
  * blank2 = (12 - (4 * row))
* Lower:
  * blank1, symbol1, blank2, symbol2, blank3
  * blank1 = blank3 = 3 - row
  * symbol1 = symbol2 = 4 - row
  * blank2 = 4 * row
