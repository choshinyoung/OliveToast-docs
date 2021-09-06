# Lists

리스트 관련 커맨드들입니다.

## member

`member x y`

배열 y에서 x번째 인덱스의 요소를 가져옵니다.

```js
> member 1 [1, 2, 3]
2
```

## len

`len x`

배열의 길이입니다.

```js
> len [1, 2, 3]
3
```

## indexOf

`indexOf x y`

배열 x에서 요소 y의 위치를 찾습니다.

```js
> indexOf [1, 2, 3] 2
1
```

## filter

`filter x y`

배열 x의 각 요소를 파라미터로 하는 함수 y를 실행해 리턴값이 true인 모든 요소를 골라 리턴합니다.

```js
> filter [1, 2, 3, 4, 5] (x) {
    x less 3
}
[1, 2]
```

## map

`map x y`

배열 x의 각 요소를 파라미터로 하는 함수 y를 실행해 그 리턴값의 리스트를 리턴합니다.

```js
> map [1, 2, 3, 4, 5] (x) {
    x mul 2
}
[2, 4, 6, 8, 10]
```

## combine

`combine x y`

두 리스트를 결합합니다.

```js
> combine [1, 2, 3] [4, 5]
[1, 2, 3, 4, 5]
```

## append

`append x y`
리스트 x에 요소 y를 추가합니다.

```js
> append [1, 2, 3] 4
[1, 2, 3, 4]
```

## remove

`remove x y`

리스트 y에서 x를 제거합니다.

```js
> remove 1 [1, 2, 3]
[2, 3]
```

## sort

`sort x`

리스트 x를 정렬합니다.

```js
> sort [2, 3, 1]
[1, 2, 3]
```

## sortAs

`sortAs x y`

리스트 x를 x의 각 요소를 파라미터로 하는 함수 y의 리턴값을 기준으로 정렬합니다.

```js
> sortAs [2, 3, 1] (x) {
    x mul -1
}
[3, 2, 1]
```

## shuffle

`shuffle x`

리스트를 랜덤으로 섞습니다.

```js
> shuffle [1, 2, 3]
[2, 3, 1]
```

## range

`range x y`

x부터 시작해 y개의 수를 리스트로 만듭니다.

```js
> range 3 5
[3, 4, 5, 6, 7]
```