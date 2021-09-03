# Statements

선택문, 반복문 커맨드들입니다.

## if

`if x y`

x가 true라면 함수 y를 실행합니다.

```js
> if true () {
    send "it is true"
}

it is true
```

## else

`if x y else z`

if 뒤에 사용하여, x가 true면 y를 false면 z를 실행합니다.

```js
> if false () {
    send "it is true"
}
else () {
    send "it is false"
}

it is false
```

## while

`while x y`

x가 true인동안 함수 y를 실행합니다.

```js
> var i is 0
> while i less 10 (){
    send i;
    var i add 1
}

0
1
2
3
4
```

## for

`for x y`

리스트 x의 각 요소를 함수 y의 파라미터로 사용해 실행합니다.

```js
> for [1, 2, 3] (x) {
    send y
}

1
2
3
```