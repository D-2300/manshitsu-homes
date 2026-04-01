# 満室デザインLABO 独立サイト — GitHub & Netlify デプロイ指示

## 概要
`記憶荘/manshitsu-homes/` に満室デザインLABO（manshitsu.homes）の独立LPプロジェクトを作成済み。
これをGitHubにpushし、Netlifyでmanshitsu.homesにデプロイしてほしい。

## 作業手順

### 1. GitHubリポジトリ作成 & push

```bash
cd C:\Users\inoue\workspace\ClaudeProjects\記憶荘\manshitsu-homes

# git初期化
git init
git add -A
git commit -m "満室デザインLABO 独立LP初期構築"

# GitHub リポジトリ作成（public でOK）
gh repo create manshitsu-homes --public --source=. --push
```

### 2. Netlify 新規サイト作成

- Netlify にログイン（記憶荘と同じアカウントでOK）
- 「Add new site」→「Import an existing project」→ GitHub の `manshitsu-homes` を選択
- ビルド設定：
  - Build command: `npm run build`
  - Publish directory: `dist`
  - Node version: 18以上
- デプロイ実行

### 3. カスタムドメイン設定

- Netlify の Site settings → Domain management → Add custom domain
- `manshitsu.homes` を追加
- ムームードメイン側のDNS設定：
  - Netlify が指定する CNAME or Aレコードを設定
  - 通常: `manshitsu.homes` → Netlifyの指定先（例: xxx.netlify.app）
- SSL証明書: Netlify が自動で Let's Encrypt を設定してくれる

### 4. .gitignore 追加（忘れてたら）

```
node_modules
dist
.DS_Store
```

## プロジェクト構成

```
manshitsu-homes/
├── index.html          ← エントリーポイント
├── package.json        ← 依存: React + Vite + Tailwind
├── vite.config.ts
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
├── src/
│   ├── main.tsx        ← ルート（ManshitsuPage直接レンダリング）
│   ├── index.css       ← Tailwind base
│   ├── ManshitsuPage.tsx
│   ├── tokens.ts       ← カラー定数・連絡先（LINE/TELは暫定で記憶荘共通）
│   └── components/     ← M*.tsx × 17ファイル
└── public/
    └── images/         ← ロゴ4点 + コンテンツ画像4点
```

## 注意点

- React Router不要（シングルページ）
- Supabase不要
- tokens.ts の LINE_URL / TEL は暫定値（記憶荘と同じ）。新LINE・eSIM取得後に差し替え
- index.html の GTMコンテナIDは未設定（TODO コメント入り）
- 記憶荘のkiokuso-hp-lpとは完全に別リポジトリ・別Netlifyサイトとして運用
