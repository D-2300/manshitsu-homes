# V2 デザイン刷新セッション引き継ぎ書

- **日付**: 2026-04-21
- **対象**: 満室デザインLABO（manshitsu-homes）
- **このセッションでやったこと**: LP / HP / About に V2 デザイン体系を適用、楔＋堀＋Poacher-turned-gamekeeper の物語構造を視覚化
- **次セッション最初に読む順**: §1 → §2（現状構成）→ §4（残タスク）→ 必要あれば §3（デザイン仕様）

---

## §1. このセッションの変更サマリー（時系列・コミット単位）

| コミット | 内容 |
|---|---|
| `4d6d31c` | **BukkenHero を V2 5セクション構造に差し替え**（楔→物件ちら見せ→パターン・インタラプト→三角形→物件本体+CTA） |
| `1902dca` | 非公開物件数を 30〜45件 → **18〜25件** レンジに現実化 + `/mock/lp-phase2` 追加 |
| `3c51c98` | **LP を Phase 2 トリム版に本番化**（14→9セクション、CTA 5→3箇所） + Before/After 画像ペア修正（`m-before-3`×`m-after-green`） |
| `f7061ca` | **HP Hero を V2 化**（`HPHeroV2.tsx` 新設、`HPTop.tsx` 差し替え）+ HPPropertyTeaser の物件数を `getWeeklyPropertyCount()` 化 |
| `d2e8559` | **HP 全体トーン統一**（`SectionHeading` 両翼ヘアライン刷新、TrustTestimonials/V3FloatingCTA 削除、HPVoice/HPWhatWeDo 豪華化） |
| `acc81e7` | **About 全面刷新**（顔写真96px+KAI/KEN物語セクション新設+V3FloatingCTA削除） |
| `12a98b9` | About 顔写真拡大（96→140px）+ **KAI's Timeline** + **Business Model 比較図** 追加 |

---

## §2. 現在の本番構成

### LP `/lp/bukken`（9 セクション）

```
1. BukkenHero V2  — 楔+物件ちら見せ+インタラプト+三角形+CTA（5内部セクション）
2. BukkenSteps    — 相談→診断→施工→客付け の流れ
3. BukkenGuide    — ガイド配布（LINE誘導の強い理由）
4. BukkenBeforeAfterCTA — 施工実績（m-before-3 × m-after-green）
5. BukkenProfiles — KAI & KEN 詳細プロフィール
6. BukkenFAQ      — 反論処理
7. BukkenBottomCTA — 最終CTA
8. BukkenMailForm — メール問い合わせ
9. BukkenFooter
```

**削除されたセクション**: BukkenYourSide / BukkenMidCTA / BukkenFairEval / HPTrustTestimonials / V3FloatingCTA / BukkenExitPopup

### HP `/`（7 セクション）

```
1. ManshitsuNav
2. HPHero V2      — LP と同一視覚言語
3. HPWhatWeDo     — 料金プラーク（◆コーナー+Cormorant数字）
4. HPPropertyTeaser — 非公開物件数は getWeeklyPropertyCount() 経由
5. HPVoice        — ◆OUR VOICE◆ + 金リング顔写真
6. HPWorksPreview — SectionHeading 両翼ヘアライン自動反映
7. HPArticlesPreview — 同上
8. ManshitsuFooter
```

**削除されたセクション**: HPTrustTestimonials / V3FloatingCTA

### About `/about`（7 セクション）

```
1. About Hero     — 140px金リング顔+H1+数字プラーク+40年行
2. KAI's Story    — タイムライン（20年の転身を3ポイントで可視化）付
3. KEN's Story
4. Business Model — 一般構造 vs 満室構造の比較図
5. Philosophy     — ダーク背景・金強調
6. Our Approach   — 3 Q&A カード（左3px金線）
7. Service Area + CTA
```

---

## §3. デザイン仕様（最新）

### カラー
- **紫**: `#6B4066` (main), `#442940` (dark), `#9A6E8E` (mid), `#C09AB5` (light)
- **ゴールド**: `#C9A84C` (base), `#F5D68A` (light), `#E6C56A` (mid)
- **Hero背景**: `linear-gradient(180deg, #2a1f2a 0%, #231a28 60%, #1d1625 100%)`

### タイポグラフィ
- 本文: `Noto Sans JP`
- 数字強調: `Cormorant Garamond` (セリフ体、年数・件数に使う)
- セクションEN: `letterSpacing: .3em, uppercase`

### 装飾の決めパーツ
- **◆ ダイヤモンド**: セクション上部中央、ディバイダー両端、注目コーナー
- **金ヘアライン**: `linear-gradient(90deg, transparent, rgba(201,168,76,.7), transparent)`
- **✓ SVGチェックマーク**: `strokeWidth: 1.4, stroke: #F5D68A, path "M1.5 5.5 L4 8 L8.5 2.5"`
- **金リング**: `border: 2-3px solid #C9A84C, padding: 2-4px, 内側に画像`

### 定型コンポーネント
| コンポーネント | 配置箇所 | 核要素 |
|---|---|---|
| ターゲットバッジ | Hero最上部 | ◆ + 金テキスト + ピル型 |
| 職歴ラベル | Hero | 「元不動産仲介20年 × 大工20年」 |
| 顔写真セット | Hero, About, Voice | 金リング + 名前 + 役職 |
| 数字プラーク | Hero, About | ◆コーナー + Cormorant数字 + 金ヘアライン + ラベル |
| 40年行 | 数字プラーク下 | ──◆ 2人で40年の現場 ◆── |
| コミットピル | Hero | ✓ + テキスト（5個） |
| H1 言い切り | Hero | 「◯◯にいた人間が、裏側を教えます。」 |
| 左金線カード | Approach Q&A など | `borderLeft: 3px solid gold` |

---

## §4. 残タスク（優先度順）

### 優先度高
1. **デッドコード削除**（コードの見通しを悪化させている）
   - `src/components/bukken/BukkenHero.tsx` (旧・未参照)
   - `src/components/hp/HPHero.tsx` (旧・未参照)
   - `src/components/hp/HPTrustTestimonials.tsx` (未参照)
   - `src/components/bukken/BukkenYourSide.tsx` (未参照)
   - `src/components/bukken/BukkenMidCTA.tsx` (未参照)
   - `src/components/bukken/BukkenFairEval.tsx` (未参照)
   - `src/components/bukken/BukkenExitPopup.tsx` (未参照)
   - `src/components/v3/V3FloatingCTA.tsx` (未参照)
   - `src/BukkenLPPageV2Phase2.tsx` (本番と同等・重複)

2. **モックルート整理**
   - `/mock/hero-v2` 削除可（本番と同じ）
   - `/mock/lp-phase2` 削除可（本番と同じ）
   - `/mock/hp-hero-v2` 削除可（本番と同じ）

3. **`hp-lp` リポジトリの `launch.json` からの `manshitsu` 追加エントリ削除**（プレビュー用に追加したもの）

### 優先度中
4. **Works 詳細ページ・Articles 詳細ページ** のトーン確認
   - SectionHeading は自動的に V2 スタイルになったので、本文側のチェック
5. **Pricing ページ** の V2 適用
6. **Guide ページ**（`/guide/bukken`）の V2 適用（現状は旧スタイル）
7. **prerender.mjs** の STATIC_META を新 Hero 構造に合わせて再確認

### 優先度低
8. **Nav / Footer** の V2 トーン微調整
9. **ManshitsuNav** のフォント・間隔調整

---

## §5. 既知の制約・トラブル

- **preview_screenshot のタイムアウト**: Phase 2 LP など長いページで稀にタイムアウト。DOM検証で代替確認した履歴あり。
- **prerender の `<head>` 注入**: §18 継承ルール、`STATIC_META` に手書き定義が必要。V2 への差し替えで影響なし（BukkenLPPage 経由なので動的抽出ルートが変わっていない）。
- **非公開物件数の定義**: `getWeeklyPropertyCount()` は 18〜25 の範囲で週固定。実態と乖離し過ぎない現実的な数字。

---

## §6. 重要なファイル一覧

### 新規作成
- `src/components/bukken/BukkenHeroV2.tsx` — LP の新 Hero（5内部セクション）
- `src/components/hp/HPHeroV2.tsx` — HP の新 Hero
- `src/BukkenLPPageV2Phase2.tsx` — Phase 2 モック（本番差し替え済・削除候補）

### 刷新
- `src/BukkenLPPage.tsx` — Phase 2 9セクション構成
- `src/pages/HPTop.tsx` — V3FloatingCTA/TrustTestimonials 削除版
- `src/pages/AboutPage.tsx` — Hero + 2 Stories + Timeline + BusinessModel 比較図
- `src/shared/SectionHeading.tsx` — 両翼ヘアライン+金グラデ下線
- `src/components/hp/HPVoice.tsx` — ◆OUR VOICE◆ + 金リング顔
- `src/components/hp/HPWhatWeDo.tsx` — 料金プラーク◆コーナー
- `src/components/hp/HPPropertyTeaser.tsx` — 物件数を動的化
- `src/components/bukken/BukkenBeforeAfterCTA.tsx` — 画像ペア修正
- `src/components/bukken/weeklyCount.ts` — 18〜25件レンジ

### ルート
- `src/AppRoutes.tsx` — /mock/hero-v2, /mock/lp-phase2, /mock/hp-hero-v2 追加

---

## §7. 次セッションの始め方

1. このファイルを読む（`docs/V2_DESIGN_SESSION_HANDOFF_2026-04-21.md`）
2. `docs/V2_DESIGN_PATTERN_PLAYBOOK.md` を読む（デザイン仕様書）
3. `git log --oneline -10` で最新コミット確認
4. ユーザーの指示を待つ。指示がなければ残タスク §4 優先度高から着手

---

## §8. デザイン体系を他プロジェクトに移植する場合

`docs/V2_DESIGN_PATTERN_PLAYBOOK.md` を参照。店舗内装サイト（kiokuso.jp）への移植ガイドが含まれる。

---

*— 2026-04-21 セッション終了時、Claude Opus 4.7 より*
