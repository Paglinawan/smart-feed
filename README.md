![SmartFeed](https://github.com/user-attachments/assets/223e7297-5b82-436e-8e49-ac3b35a600ac)

## ❑ How to Clone

1. クローン
2. `yarn install`
3. `yarn clasp login`
4. `yarn clasp create` > sheets を選択
5. `rm appsscript.json`
6. `.clasp.json`ファイルの`rootDir`の値を調整

```
{
  "scriptId":"xxxxxxxxxxxxx",
  "parentId": ["xxxxxxxxxxxxx"],
  "rootDir": "./dist" // 👈　here
}
```

7. `yarn push`

<br>

## ❑ Spreadsheet Sample

| Date | Title  | URL    | Domain     | Headline     | Like | Audio | Keep | Delete | Review | Tag    |
| ---- | ------ | ------ | ---------- | ------------ | ---- | ----- | ---- | ------ | ------ | ------ |
| date | string | string | fn[domain] | fn[headline] | bool | bool  | bool | bool   | number | select |

- fn[domain] `=REGEXREPLACE($C2, "https?:\/\/(?:www\.)?(._?)\.._", "$1")`
- fn[headline] `=HYPERLINK($C2, $B2)`
