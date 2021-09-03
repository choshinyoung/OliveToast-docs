# Others

## var

`var x is y`

변수 x를 선언하고 y를 저장합니다

`var x add y`

변수 x의 값과 y를 더하고 그 값을 x에 저장합니다.

`var x sub y`   
`var x mul y`   
`var x div y`   
`var x mod y`   
`var x exp y`   
`var x floorDiv y`   
`var x bitAnd y`   
`var x bitOr y`   
`var x bitXor y`   
`var x bitNot y`   
`var x lShift y`   
`var x rShift y`

```js
> var a is 1

> a
1

> var a add 1

> a
2

> var a mul 10

> a
20
```

## as

`x as y`

x의 타입을 y로 변환합니다.

타입의 목록에는 `number`, `float`, `text`, `bool`, `list`, `user`, `role`, `channel`이 있습니다.

```js
> 495209098929766400 as user
OliveToast#8788
```

## execute

`execute x y`

함수 x를 실행합니다. y는 파라미터 값들의 리스트입니다.

```js
> execute (x) {
    send x
} ["hello"]
hello
```

## random

`random x y`

x 이상 y 미만의 수 중 하나를 랜덤으로 선택합니다.

```js
> random 1 10
5
```

## randomChoice

`randomChoice x`

리스트 x의 값 중 하나를 랜덤으로 선택합니다.

```js
> randomChoice [1, 2, 3]
2
```