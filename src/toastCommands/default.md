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

## currentTime

`currentTime`

현재 시간을 타임스탬프 형식으로 리턴합니다.

```js
> currentTime
1632815803
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
`createdAt of <user>`

`name of <channel>`   
`id of <channel>`   
`category of <channel>`   
`isNsfw of <channel>`   
`mention of <channel>`   
`slowMode of <channel>`   
`createdAt of <channel>`

`name of <role>`   
`id of <role>`   
`isHoisted of <role>`   
`isMentionable of <role>`   
`mention of <role>`   
`createdAt of <role>`

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