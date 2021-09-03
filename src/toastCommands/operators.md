# Operators

연산자 커맨드들입니다.

### add

`x add y`

두 수를 더합니다.

```js
> 1 add 2
3
```

### sub

`x sub y`

x에서 y를 뺍니다.

```js
> 3 sub 2
1
```

### mul

`x mul y`

두 수를 곱합니다.

```js
> 2 mul 3
6
```

### div

`x div y`

x에서 y를 나눕니다.

```js
> 6 div 3
2
> 5 div 2
2.5
```

### mod

`x mod y`

x에서 y를 나눈 나머지를 구합니다.

```js
> 5 mod 2
1
```

### floorDiv

`x floorDiv y`

정수 나눗셈 연산자입니다.

```cs
Func("floorDiv", (int, ToastContext, int) => int)
```
```js
> 5 floorDiv 2
2
```

### exp

`x exp y`

x의 y제곱입니다.

```js
> 2 exp 10
1024
```

### is

`x is y`

두 객체가 같은지 확인합니다.

```js
> "hello" is "world"
false
> 1 is 1
true
```

### greater

`x greater y`

x가 y보다 큰지 확인합니다.

```js
> 3 greater 2
true
```

### less

`x less y`

x가 y보다 작은지 확인합니다.

```js
> 3 less 2
false
```

### greaterEqual

`x greaterEqual y`

x가 y보다 크거나 같은지 확인힙니다.

```js
> 3 greaterEqual 2
true
```

### lessEqual

`x lessEqual y`

x가 y보다 작거나 같은지 확인합니다.

```js
> 3 lessEqual 2
false
```

### and

`x and y`

x와 y 모두 true인지 확인합니다.

```js
> true and true
true
> false and true
false
```

### or

`x or y`

x와 y 중 하나 이상이 true인지 확인합니다.

```js
> true or true
true
> false or true
true
> false or false
false
```

### not

`not x`

x가 true라면 false를, false라면 true를 리턴합니다.

```js
> not true
false
> not false
true
```

### bitAnd

`x bitAnd y`

비트 and 연산자입니다.

```js
> 2 bitAnd 3
2
```

### bitOr

`x bitOr y`

비트 or 연산자입니다.

```js
> 2 bitOr 3
3
```

### bitXor

`x bitXor y`

비트 xor 연산자입니다.

```js
> 2 bitXor 3
1
```

### bitNot

`bitNot x`

비트 not 연산자입니다.

```js
> bitNot 3
-4
```

### lShift

`x lShift y`

왼쪽 쉬프트 연산자입니다.

```js
> 2 lShift 5
64
```

### rShift

`x rShift y`

오른쪽 쉬프트 연산자입니다.

```js
> 64 rShift 2
16
```