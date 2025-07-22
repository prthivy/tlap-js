## Half Square

- I like to think of every output pattern as a combination of an iterator and generators (with some language, paradigm, domain specific supplements). 

- Language specific supplements (like line-termination or not) are considered first.

- Next, for example in the half square problem, we use 'row' as the iterator. It goes over n = 4 iterations. 

- Then for each iterator, a generator prints a certain number of symbols. This is the key part of the program: Discovering the relationship, developing the logic and implementing it into the generator. 

- Let trace this process for the case of half-square in js node:

  1. Js node implementation means line termination will be needed:
    - `process.stdout.write('#')` will print the symbols 
    - and `process.stdout.write('\n')` will handle the line termination. 
  
  2. First, the iterator row will be written: 
    - It runs for 4 rows. 
    - So, a for loop from 0 till 4. 
  
  3. Then, the generator(s) (in our case, 1) will be written:
    - Discovering the relationship: this is best done by forming and studying a relationship discovery table. 
    - When row = 0, symbol = 4. When row = 1, symbol = 3. When row = 2, symbol = 2. When row = 3, symbol = 1. This is the relationship.
    - Developing the logic: From the table, it's clear that when row = 0, symbol = 4 - row. This is the logic.
    - Implementing into the generator: Iterator goes from 0 to 4, and generator goes from 0 to 4 - row. After each iteration, the line is terminated.

## Sideways Triangle Tracex
