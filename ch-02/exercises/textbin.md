## number-conversion-a

tracex:
120
rem = 120

while 120 != 0
rem = 120
if(120 - 256 < 1) true
binary = 0
power = 128

rem = 120
if(120 - 128 <1) true
binary = 0
power = 64

rem = 120
if (120 - 64 < 1) false
binary = 1
rem = 120 - 64 = 56
power = 32

rem = 56 
if(56 - 32 < 1) false
binary = 1


9
rem = 9

if(9 - 16 < 1) true
binary = 0
power = 8

rem = 9
if(9 - 8 < 1) false
binary = 1
rem = 1
power = 4

rem = 1
if(1 - 4 < 1) true
binary = 0
power = 2
rem = 1
power = 1

rem = 1
if(1 - 1 < 1) true
binary = 

## number conversion-a2

1011010
pos 1 -> pos 7

if(pos 1 === 1)
decimal = 0
decimal = 0 + (2, 7 - 1)

else (pos 1 === 1)
decimal = 0
decimal = 0 + 0 = 0


tracex:
1011010

pos 1
decimal = 0
decimal = 0 + 2^(7-1)
decimal = 0 + 64 = 64 

pos 2
decimal = 64 + 0 = 64

pos 3
decimal = 64 
decimal = 64 + 2^(7-3)
decimal = 64 + 16 = 80

pos 4
decimal = 80
decimal = 80 + 2^(7-4)
decimal = 80 + 8 = 88

pos 5
decimal = 80
decimal = 80 + 0 = 88

pos 6 
decimal = 88 
decimal = 88 + 2^(7-6)
decimal = 88 + 2 = 90

pos 7
decimal = 90
decimal = 90 + 0 = 90

