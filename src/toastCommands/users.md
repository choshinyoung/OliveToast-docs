# Users

유저 관련 커맨드들입니다.

## users

`users`

해당 서버의 모든 유저 목록입니다.

```js
> users
[OliveToast#8788, choshinyoung#1795]
```

## user

`user`

커맨드를 실행중인 유저입니다.

```js
> user
choshinyoung#1795
```

## addRole

`addRole x y`

유저에게 역할을 추가합니다.

```js
> addRole user "테스트역할"

```

## removeRole

`removeRole x y`

유저에게서 역할을 제거합니다.

```js
> removeRole user "테스트역할"

```

## kick

`kick x`

유저를 추방합니다. 추방 권한이 필요합니다.

```js
> kick "choshinyoung"

```

## ban

`ban x`

유저를 차단합니다. 차단 권한이 필요합니다.

```js
> ban "choshinyoung"

```