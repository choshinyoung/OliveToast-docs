# Strings

문자열 관련 커맨드들입니다.

## split

`split x y`

텍스트 x를 y를 기준으로 분리합니다.

```js
> split "Hello world" " "
["Hello", "world"]
```

## reverse

`reverse x`

텍스트 x를 뒤집습니다.

```js
> reverse "Hello, world!"
!dlrow ,olleH
```

## startsWith

`startsWith x y`

텍스트 x가 y로 시작하는지 확인합니다.

```js
> startsWith "Hello, world!" "Hell"
true
```

## endsWith

`endsWith x y`

텍스트 x가 y로 끝나는지 확인합니다.

```js
> endsWith "Hello, world!" "Hell"
false
```

## contains

`contains x y`

텍스트 x에 y가 포함되는지 확인합니다.

```js
> contains "Hello, world!" "or"
true
```

## trim

`trim x`

텍스트 양쪽 끝의 공백을 제거합니다.

```js
> trim " Hello, world!      "
"Hello, world!"
```

## substring

`substring x y z`

텍스트 x의 y번째 문자부터 시작해 z개의 문자를 가져옵니다.

```js
> substring "Hello, world!" 2 5
"llo, "
```

## join

`x join y`

두 텍스트를 결합합니다. 만약 y가 리스트라면 x를 분리자로 사용해 y의 요소를 결합합니다.

```js
> "Hello " join "world"
Hello world

> ", " join [1, 2, 3]
1, 2, 3
```

## replace

`replace x y z`

텍스트 x의 부분 문자열 y를 모두 z로 대체합니다.

```js
> replace "Hello, world!" "world" "toast"
Hello, toast!
```

## toUpper

`toUpper x`

텍스트를 모두 대문자로 만듭니다.

```js
> toUpper "Hello, world!"
HELLO, WORLD!
```

## toLower

`toLower x`

문자열을 모두 소문자로 만듭니다.

```js
> toLower "Hello, world!"
hello, world!
```