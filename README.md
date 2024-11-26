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

| Date | Title     | URL    | Domain | Headline   | Like | Audio | Keep | Delete | Review | Tag    |
| ---- | --------- | ------ | ------ | ---------- | ---- | ----- | ---- | ------ | ------ | ------ |
| date | fn[title] | string | string | fn[domain] | bool | bool  | bool | bool   | number | select |

- fn[title] `=REGEXREPLACE($C2, "https?:\/\/(?:www\.)?(._?)\.._", "$1")`
- fn[domain] `=HYPERLINK($C2, $B2)`
