# Db

서버 db 관련 커맨드들입니다.

## set

`set x y`

서버 db에 키 x를 사용해서 y를 저장합니다. x는 텍스트입니다. 이 db는 같은 서버에서 사용하는 다른 커맨드에서 `get` 커맨드를 사용해 접근할 수 있습니다.

```js
set "hello" 1

```

## get

`get x`

서버 db에서 키 x에 저장된 값을 가져옵니다.

```js
> get "hello"
1
```

## dbKeys

`dbKeys`

서버 db의 전체 키 목록을 가져옵니다.

```js
> dbKeys
[hello]
```

## deleteKey

`deleteKey x`

서버 db에서 키 x와 그 키에 저장된 값을 삭제합니다.

```js
> deleteKey "hello"
```