# Default

기본 올리브 토스트 커맨드들입니다.

## wait

`wait x`

x초만큼 대기합니다.

```js
> wait 5

```

## exit

`exit`

실행중인 커맨드를 종료합니다.

```js
> exit

```


## group

`group x`

정규식 그룹의 x번째 값을 가져옵니다.

```js
> group 1

```


## of

`x of y`

`user`, `channel`, `role` 값의 속성을 가져옵니다.

`name of <user>`   
`id of <user>`   
`tag of <user>`   
`nickname of <user>`   
`isBot of <user>`   
`mention of <user>`

`name of <channel>`   
`id of <channel>`   
`category of <channel>`   
`isNsfw of <channel>`   
`mention of <channel>`   
`slowMode of <channel>`

`name of <role>`   
`id of <role>`   
`isHoisted of <role>`   
`isMentionable of <role>`   
`mention of <role>`

```js
> name of user
choshinyoung

> isNsfw of "#채팅"
false
```


## addEventListener

`addEventListener x y`

이벤트 x가 발생했을 때 함수 y를 실행합니다.   
커맨드를 실행한 유저가 메시지를 보냈을 때 실행되는 `messageReceive` 이벤트와 메시지에 반응이 추가됐을 때 실행되는`reactionAdd` 이벤트가 있습니다.

이벤트 리스너를 추가한 후 커맨드가 바로 종료되면 이벤트가 실행되지 않습니다. `wait` 커맨드를 사용하세요.

```js
> addEventListener "messageReceive" (message) {
    send "유저가 `{message}` 라고 말했습니다."
}

> addEventListener "reactionAdd" (message, _user, reaction) {
    send "{name of _user}님이 메시지 `{message}`에 반응 {reaction}을 추가했습니다."
}

```

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