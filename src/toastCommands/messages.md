# Messages

메시지 관련 커맨드들입니다.

## userMessage

`userMessage`

유저가 커맨드를 실행하기 위해 보낸 메시지입니다.

## botMessage

`botMessage`

봇의 응답 메시지입니다.

## userLastMessage

`userLastMessage`

커맨드 실행 후 해당 채널에서 유저가 마지막으로 보낸 메시지입니다.

## botLastMessage

`botLastMessage`

커맨드 실행 후 해당 채널에서 봇이 마지막으로 보낸 메시지입니다.

## send

`send x`

커맨드를 실행한 채널에 텍스트 x를 보냅니다. x가 임베드라면 임베드를 전송합니다.

```js
> send "hello"

> send embed

```

## sendTo

`sendTo x y`

채널 x에 텍스트 y를 보냅니다.

```js
> send "채팅2" "hello"

```

## reply

`reply x y`

메시지 x에서 텍스트 y를 답장합니다.

```js
> reply userLastMessage "답장 테스트입니다."

```

## dm

`dm x`

커맨드를 실행한 유저에게 메시지를 보냅니다.

```js
> dm "hello"

```

## edit

`edit x y`

올리브토스트가 보낸 메시지 x의 텍스트를 y로 수정합니다.

```js
> edit botMessage "수정된 메시지입니다."

```

## delete

`delete x`

메시지 x를 삭제합니다. 메시지 관리 권한이 필요합니다.

```js
> delete userMessage

```

## react

`react x y`

메시지 x에 반응 y를 추가합니다.

```js
> react userMessage ":thinking:"

```

## embed

`embed`

빈 임베드를 생성합니다. `with` 커맨드로 내용을 추가하고, `send`, `sendTo`, `reply`, `dm` 커맨드를 사용해 전송할 수 있습니다.

## with

`x with y z`

임베드 x의 속성 y를 z로 정하고, 해당 임베드를 리턴합니다.

`<embed> with title <text>`   
`<embed> with description <text>`   
`<embed> with color <text>`   
`<embed> with image <text>`   
`<embed> with author <user>`   
`<embed> with url <text>`   
`<embed> with thumbnail <text>`   
`<embed> with field <list>`

```js
> embed with title "이것은 타이틀입니다." with description "이것은 설명입니다." with url "https://google.com"
Discord.EmbedBuilder

> embed with color "#FF0000" with image "https://t1.daumcdn.net/cfile/tistory/2668164B5880AFD514" with author "OliveToast" with thumbnail "https://t1.daumcdn.net/cfile/tistory/2668164B5880AFD514"

> embed with field ["이것은", "필드입니다."] with field ["이것은", "인라인 필드입니다.", true] with field ["이것도", "인라인 필드입니다.", true] with field ["이것은", "인라인 필드가 아닙니다.", false]
```