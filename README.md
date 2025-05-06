# Vue I18n デモプロジェクト

Vue 3とVue I18nを使用した国際化のデモプロジェクトです。このプロジェクトは、Vueアプリケーションで多言語サポートを実装するためのシンプルかつ包括的な例を提供します。

## 機能

- Composition APIを使用した **Vue 3**
- **TypeScript** サポート
- 国際化のための **Vue I18n**
- 複数言語のサポート：
  - 英語 (en)
  - 日本語 (ja)
  - 中国語 (zh)
  - フランス語 (fr)
- 言語切替UIコンポーネント
- 整理された翻訳構造
- フォールバックロケール設定

## プロジェクト構造

```
src/
├── components/
│   ├── HelloWorld.vue       # i18nテキストを含むメインコンポーネント
│   └── LanguageSwitcher.vue # 言語選択ドロップダウン
├── locales/
│   ├── base/                # 基本UIテキスト翻訳
│   │   ├── en.json
│   │   ├── ja.json
│   │   ├── zh.json
│   │   └── fr.json
│   ├── links/               # リンクテキスト翻訳
│   │   ├── en.json
│   │   ├── ja.json
│   │   ├── zh.json
│   │   └── fr.json
│   ├── en.ts                # 英語ロケールのエクスポート
│   ├── ja.ts                # 日本語ロケールのエクスポート
│   ├── zh.ts                # 中国語ロケールのエクスポート
│   ├── fr.ts                # フランス語ロケールのエクスポート
│   └── index.ts             # すべてのロケールをエクスポート
└── i18n.ts                  # Vue I18n設定
```

## 国際化設定

このプロジェクトは以下の設定でVue I18nを使用しています：

- **Composition APIモード** (`legacy: false`)
- **デフォルトロケール**：英語 ('en')
- **フォールバックロケール**：
  - 中国語は日本語にフォールバック
  - その他はすべて英語、次に日本語にフォールバック
- 日本語ロケール構造に基づいた **メッセージスキーマ**
- すべてのi18nキーが定義されていることを確認するための **ESLintルール**：`'@intlify/vue-i18n/no-missing-keys': 'error'`

## プロジェクトのセットアップ

```sh
npm install
```

### 開発用のコンパイルとホットリロード

```sh
npm run dev
```

### 本番用のタイプチェック、コンパイル、ミニファイ

```sh
npm run build
```

### [Vitest](https://vitest.dev/)を使用したユニットテスト

```sh
npm run test:unit
```

### [ESLint](https://eslint.org/)を使用したリント

```sh
npm run lint
```

### [Prettier](https://prettier.io/)を使用したフォーマット

```sh
npm run format
```

## 推奨されるIDE設定

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (Veturを無効にしてください)。

## TSでの`.vue`インポートのタイプサポート

TypeScriptはデフォルトで`.vue`インポートの型情報を処理できないため、型チェックのために`tsc` CLIを`vue-tsc`に置き換えています。エディタでは、`.vue`型をTypeScript言語サービスに認識させるために[Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)が必要です。

## 設定のカスタマイズ

[Vite設定リファレンス](https://vite.dev/config/)を参照してください。
