# Channels & Roles

채널과 역할 관련 커맨드들입니다.

## channels

`channels`

서버의 모든 텍스트 채널의 리스트입니다.

```js
> channels
["채팅1", "채팅2"]
```

## channel

`channel`

커맨드가 실행되고 있는 채널입니다.

```js
> channel
채팅1
```

## roles

`roles`

서버의 모든 역할의 리스트입니다.

```js
> roles
["@everyone", "OliveToast"]
```

## rolesOf

`rolesOf x`

유저가 가지고 있는 역할의 목록입니다.

```js
> rolesOf "OliveToast"
["@everyone", "OliveToast"]
```