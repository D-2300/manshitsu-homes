import { useEffect } from "react";
import { Link } from "react-router-dom";
import { LINE_URL } from "../tokens";
import { JsonLd, breadcrumbSchema } from "../utils/jsonLd";

const guideSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "宮城のアパート投資 攻略ガイド",
  description: "宮城県の収益物件・中古アパート投資の攻略ガイド。相場データ・築古見極め3ポイント・指値交渉術・改修費単価・失敗事例10選まで内装屋視点で体系化。",
  image: "https://manshitsu.homes/images/hero-bg.webp",
  datePublished: "2026-04-17",
  dateModified: "2026-04-17",
  author: { "@type": "Organization", name: "満室デザインLABO", url: "https://manshitsu.homes/" },
  publisher: {
    "@type": "Organization",
    name: "満室デザインLABO",
    logo: { "@type": "ImageObject", url: "https://manshitsu.homes/images/logo-manshitsu-h-gold.webp" },
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://manshitsu.homes/guide/bukken" },
};

/**
 * 宮城のアパート投資 攻略ガイド HTML版
 *
 * 原稿: docs/guide-bukken-manuscript.md
 * 配布: /guide/bukken
 * 印刷: Ctrl+P → PDFで保存 → 画面と同じデザインでダウンロード可
 */
export default function GuidePage() {
  useEffect(() => {
    document.title = "宮城のアパート投資 攻略ガイド｜満室デザインLABO";
    const description = "宮城県の収益物件・中古アパート投資の攻略ガイド。相場データ・築古見極め3ポイント・指値交渉術・改修費単価・失敗事例10選まで内装屋視点で体系化。";
    const ogImage = "https://manshitsu.homes/images/og-guide.png";

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", description);

    const setMeta = (selector: string, value: string) => {
      const el = document.querySelector(selector);
      if (el) el.setAttribute("content", value);
    };
    setMeta('meta[property="og:title"]', "宮城のアパート投資 攻略ガイド｜満室デザインLABO");
    setMeta('meta[property="og:description"]', description);
    setMeta('meta[property="og:image"]', ogImage);
    setMeta('meta[name="twitter:title"]', "宮城のアパート投資 攻略ガイド｜満室デザインLABO");
    setMeta('meta[name="twitter:description"]', description);
    setMeta('meta[name="twitter:image"]', ogImage);
  }, []);

  return (
    <div className="guide-root">
      <JsonLd data={guideSchema} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Top", url: "/" },
          { name: "無料ガイド", url: "/guide/bukken" },
        ])}
      />
      <style>{styles}</style>

      {/* スクリーン用ヘッダー（印刷時非表示） */}
      <nav className="guide-nav screen-only">
        <Link to="/" className="guide-nav-brand">満室デザインLABO</Link>
        <div className="guide-nav-actions">
          <button onClick={() => window.print()} className="guide-nav-print">
            🖨️ 印刷・PDF保存
          </button>
          <a href={LINE_URL} target="_blank" rel="noopener noreferrer" className="guide-nav-line">
            LINE相談
          </a>
        </div>
      </nav>

      {/* ===== 表紙ページ ===== */}
      <article className="guide-cover page">
        <div className="cover-accent-top" />
        <p className="cover-category">FREE GUIDE</p>
        <hr className="cover-hr" />
        <h1 className="cover-title">
          <span className="cover-title-l1">宮城の</span>
          <span className="cover-title-l2">アパート投資</span>
          <span className="cover-title-l3">攻略ガイド</span>
        </h1>
        <p className="cover-subtitle">— 内装屋だから見えている、物件選びの勝ち筋 —</p>

        <ul className="cover-chapters">
          <li>◆ 宮城の収益物件 相場データ</li>
          <li>◆ 築古アパートの見極め3ポイント</li>
          <li>◆ 指値交渉の実践テクニック</li>
          <li>◆ 改修費の相場早見表</li>
          <li>◆ 客付けの基礎</li>
          <li>◆ 失敗事例10選</li>
        </ul>

        <div className="cover-footer">
          <hr className="cover-footer-hr" />
          <p className="cover-brand">満室デザインLABO</p>
          <p className="cover-team">KAI &amp; KEN</p>
          <p className="cover-url">manshitsu.homes</p>
        </div>
        <div className="cover-accent-bottom" />
      </article>

      {/* ===== 目次 ===== */}
      <article className="page guide-toc">
        <div className="page-header"><span>CONTENTS</span></div>
        <h2 className="chapter-heading-toc">目次</h2>
        <ol className="toc-list">
          <li><span className="toc-num">Ch.1</span><span>はじめに — なぜ今、宮城のアパート投資なのか</span></li>
          <li><span className="toc-num">Ch.1-4</span><span>誰が書いているのか — 仲介業20年で気づいた構造の限界</span></li>
          <li><span className="toc-num">Ch.2</span><span>宮城の収益物件相場 — エリア別・築年別の実データ</span></li>
          <li><span className="toc-num">Ch.3</span><span>築古アパートの見極め方 — 3つの必須チェック</span></li>
          <li><span className="toc-num">Ch.4</span><span>指値交渉の実践テクニック — 想定問答と事例</span></li>
          <li><span className="toc-num">Ch.5</span><span>改修費の相場早見表 — 部屋タイプ別・単価公開</span></li>
          <li><span className="toc-num">Ch.6</span><span>客付けの基礎 — バーチャルステージング活用</span></li>
          <li><span className="toc-num">Ch.7</span><span>失敗事例10選 — よくある落とし穴と回避策</span></li>
          <li><span className="toc-num">Ch.8</span><span>まとめ — 次の1歩</span></li>
          <li><span className="toc-num">付録A</span><span>市町村別 平均利回りデータ</span></li>
          <li><span className="toc-num">付録B</span><span>用語集</span></li>
        </ol>
      </article>

      {/* ===== Ch.1 ===== */}
      <article className="page">
        <div className="page-header"><span>Ch.1 はじめに</span></div>
        <h2 className="chapter-heading"><span className="chapter-no">Ch.1</span>はじめに — なぜ今、宮城のアパート投資なのか</h2>

        {/* Photo: hero */}
        <div className="photo-block">
          <img src="/images/m-hero-color.webp" alt="改修された部屋のイメージ" />
          <p className="photo-caption">改修された部屋 — 物件を選ぶところから、一緒に。</p>
        </div>

        <h3 className="section-heading">1-1. このガイドで伝えたいこと</h3>
        <p>私たちは「満室デザインLABO」という、宮城県の内装工事チームです。物件を売ってお金をもらう立場にいません。物件を直して満室にして、その対価で生きています。</p>
        <p>この立場から、次のことをお伝えしたい：</p>
        <blockquote className="quote">「物件選びで失敗すれば、どんなに良い内装をしても回らない」</blockquote>
        <p>これは、20年以上現場で見てきた実感です。どんなに塗装を綺麗にしても、立地が間違っていれば入居者は来ない。どんなに利回りが高い物件でも、躯体がダメなら改修費で利回りが消える。このガイドでは、<strong>物件を買う前に知っておくべきこと</strong>を、内装側から見た視点で体系化しました。</p>

        <h3 className="section-heading">1-2. なぜ「宮城」なのか</h3>
        <p>宮城県、特に仙台圏は以下の理由で<strong>個人アパート投資の好適地</strong>です：</p>
        <ol className="ordered">
          <li><strong>人口密度と賃貸需要</strong>：仙台市は人口109万人、東北唯一の100万都市</li>
          <li><strong>物件価格の妥当性</strong>：東京・大阪と比べ1棟物件が1/3〜1/2の価格</li>
          <li><strong>地方特有の"非公開物件"が流通</strong>：地元ネットワーク経由の情報が多い</li>
          <li><strong>首都圏からの距離感</strong>：新幹線で90分。月1管理が可能</li>
        </ol>
        <p>一方、注意すべきは：</p>
        <ul>
          <li><strong>人口減少局面</strong>：仙台市中心部は安定だが、沿岸部や県北は減少傾向</li>
          <li><strong>雪・寒冷地リスク</strong>：屋根・配管・外壁の傷みが西日本より早い</li>
          <li><strong>地震リスク</strong>：1978年以前の旧耐震物件は避ける or 大幅指値</li>
        </ul>

        <h3 className="section-heading">1-3. いま動くべきタイミングか</h3>
        <p>2026年時点で、全国のアパート投資系キーワード検索量は前年比 <strong>-18〜-33%</strong> で減少中。これは「新規参入する投資家が減っている」ことを意味します。参入者が減る＝競合が減る＝良い物件を<strong>相対的に取りやすくなる</strong>タイミング。金利上昇で売り急ぎ案件も出やすいフェーズです。</p>
        <blockquote className="quote">「市場が縮む前にポジションを取る」<br />— これが、長期で勝つアパートオーナーの共通行動です。</blockquote>
      </article>

      {/* ===== Ch.1-4 誰がやるか（新規追加・独立ページ） ===== */}
      <article className="page">
        <div className="page-header"><span>Ch.1 - WHO WE ARE</span></div>
        <h2 className="chapter-heading"><span className="chapter-no">Ch.1-4</span>誰が書いているのか — 仲介業20年で気づいた"構造の限界"</h2>

        <p>この章は、このガイドを書いている<strong>「私たちは誰か」</strong>という話です。ここに納得できなければ、以降のノウハウも机上の空論に読めてしまう。だから先にお伝えします。</p>

        {/* Photo: 2人打ち合わせ */}
        <div className="photo-block">
          <img src="/images/guide/g-conversation.webp" alt="物件の相談風景" />
          <p className="photo-caption">大家さんと一緒に物件を見極める</p>
        </div>

        <h3 className="section-heading">元・不動産仲介業20年</h3>
        <p>満室デザインLABOのメンバーの一人（<strong>KAI</strong>）は、宮城県内で<strong>不動産仲介業を約20年</strong>やってきました。住宅・テナント・収益物件、ひと通り扱ってきました。</p>
        <p>その中で、ずっと抱えていた違和感があります。</p>
        <blockquote className="quote">「仲介業では、本当の意味でお客様の立場に立ちきれない」</blockquote>

        <h3 className="section-heading">なぜ仲介業では"買主の味方"になれないのか</h3>
        <p>仲介業には構造的な矛盾があります。</p>

        <div className="structure">
          <div className="structure-item">
            <p className="structure-title">① 営業ノルマの圧力</p>
            <p className="structure-body">月ごとの成約目標があると、「物件を決めなければいけない」という強い営業心が先に立つ。「本当はこの物件は勧めない方がいい」と思っても、他に候補がなければ推してしまう。</p>
          </div>
          <div className="structure-item">
            <p className="structure-title">② 売主の立場にならざるを得ない</p>
            <p className="structure-body">独立開業して自分で売物件を預かっても、結局「売主から預かった物件を売り切る」ことが仕事になる。買主の代わりに指値を強く入れるほど、売主との関係が悪くなる。</p>
          </div>
          <div className="structure-item">
            <p className="structure-title">③ 仲介手数料は物件単価に比例</p>
            <p className="structure-body">高い物件を売るほど自分の取り分も増える。客のためには安い物件の方が良くても、自分の利益とは一致しない。</p>
          </div>
        </div>

        <p>この3つの構造は、<strong>どこの不動産屋に行っても変わりません</strong>。会社の方針や担当者の人柄の問題ではなく、仲介というビジネスモデル自体が内包する矛盾です。</p>

        <h3 className="section-heading">だから仲介業を"辞めた"</h3>
        <p>20年続けた仲介業を辞めるのは、簡単な決断ではありませんでした。でも「このまま続けても、お客様の本当の味方にはなれない」という実感が、ある時から消えなくなった。</p>
        <p>辞めた後、どうやって大家さんの役に立てるかを考えた結論が、<strong>内装業の立場から関わる</strong>という道でした。</p>

        <div className="benefit-list">
          <div className="benefit-item">
            <span className="benefit-icon">◆</span>
            <p><strong>物件売買では儲けない</strong>：どの物件を選んでもらっても構わない</p>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">◆</span>
            <p><strong>内装工事で対価をいただく</strong>：物件を「良くする」ことにインセンティブがある</p>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">◆</span>
            <p><strong>仲介手数料ゼロ</strong>：大家さんの手取りを減らさない</p>
          </div>
        </div>

        <p>この立場なら、20年の仲介経験を活かして「この物件は買うべきではない」と本音で言える。今までできなかったことが、ようやくできるようになりました。</p>

        <h3 className="section-heading">大工KENとの出会い、職人チームへ</h3>
        <p>その後、大工歴20年超の<strong>KEN</strong>と意気投合し、内装業としての会社を立ち上げました。</p>
        <div className="profile-cards">
          <div className="profile-card">
            <img src="/images/about-kai-sm.webp" alt="KAI" className="profile-photo" />
            <p className="profile-name">KAI</p>
            <p className="profile-role">元・不動産業20年</p>
            <p className="profile-desc">物件の見極め・交渉・客付けの実務</p>
          </div>
          <div className="profile-card">
            <img src="/images/about-ken-sm.webp" alt="KEN" className="profile-photo" />
            <p className="profile-name">KEN</p>
            <p className="profile-role">大工歴20年超</p>
            <p className="profile-desc">設計から施工まで現場を動かす技術</p>
          </div>
        </div>
        <p>二人で<strong>職人集団として満室デザインLABO</strong>を作ったのが今の形です。不動産の目と職人の手、どちらも揃って初めて、物件探しから内装改修・客付けまで一気通貫で伴走できます。</p>

        <div className="sidebar">
          <p className="sidebar-label">このガイドで伝える"視点"</p>
          <p>このガイドの内容は、20年の仲介現場で<strong>「本当はお客様にこう伝えたかった」内容の集大成</strong>です。売主側にいると言えなかったこと、仲介手数料を取る立場では言えなかったこと。全部、<strong>買主・大家側の視点</strong>でまとめました。</p>
        </div>
      </article>

      {/* ===== Ch.2 ===== */}
      <article className="page">
        <div className="page-header"><span>Ch.2 宮城の収益物件相場</span></div>
        <h2 className="chapter-heading"><span className="chapter-no">Ch.2</span>宮城の収益物件相場 — エリア別・築年別の実データ</h2>

        {/* Photo: エリアマップ */}
        <div className="photo-block">
          <img src="/images/guide/g-map.webp" alt="宮城県エリアイメージ" />
          <p className="photo-caption">宮城県 — エリアごとの利回り・価格帯は大きく異なる</p>
        </div>

        <h3 className="section-heading">2-1. エリア別の相場感（2026年4月時点）</h3>
        <table className="data-table">
          <thead>
            <tr><th>エリア</th><th>一棟平均価格</th><th>平均利回り</th><th>特徴</th></tr>
          </thead>
          <tbody>
            <tr><td>仙台市青葉区</td><td>800〜1,500万円</td><td>8〜11%</td><td>中心部。流動性◎</td></tr>
            <tr><td>仙台市若林区</td><td>600〜1,100万円</td><td>10〜13%</td><td>中心部近郊。コスパ良</td></tr>
            <tr><td>仙台市宮城野区</td><td>500〜900万円</td><td>12〜15%</td><td>駅東・荒井が伸び</td></tr>
            <tr><td>仙台市泉区</td><td>600〜1,000万円</td><td>11〜13%</td><td>北部住宅街</td></tr>
            <tr><td>仙台市太白区</td><td>500〜1,100万円</td><td>10〜14%</td><td>長町再開発</td></tr>
            <tr><td>名取市・多賀城市</td><td>400〜700万円</td><td>12〜16%</td><td>仙台隣接</td></tr>
            <tr><td>石巻市</td><td>300〜700万円</td><td>13〜18%</td><td>沿岸部</td></tr>
            <tr><td>大崎市・古川</td><td>250〜500万円</td><td>15〜20%</td><td>県北</td></tr>
            <tr><td>気仙沼・登米</td><td>200〜400万円</td><td>16〜22%</td><td>上級者向け</td></tr>
          </tbody>
        </table>

        <div className="sidebar">
          <p className="sidebar-label">内装屋視点</p>
          <p>「利回り20%」の物件が県北に転がっていますが、<strong>改修費で利回りが半減するケース</strong>が多い。後述のCh.3・Ch.5で見極め方を。</p>
        </div>

        <h3 className="section-heading">2-2. 築年数別の戦略</h3>
        <table className="data-table">
          <thead>
            <tr><th>築年数</th><th>平均利回り</th><th>推奨戦略</th></tr>
          </thead>
          <tbody>
            <tr><td>築〜15年</td><td>7〜9%</td><td>安全運用型。融資通りやすい</td></tr>
            <tr><td>築15〜25年</td><td>10〜13%</td><td><strong>個人投資家の本命ゾーン</strong></td></tr>
            <tr><td>築25〜35年</td><td>13〜18%</td><td>上級者向け。設備点検必須</td></tr>
            <tr><td>築35年超</td><td>18%〜</td><td>出口戦略を明確に</td></tr>
          </tbody>
        </table>
        <p className="note"><strong>新耐震基準（1981年6月以降建築）</strong>かどうかは必ず確認。旧耐震物件は融資が付きにくく、売却時も苦戦します。</p>

        <h3 className="section-heading">2-3. "非公開物件"の正体</h3>
        <p>このガイドを読んでいる方に、最初にお伝えしておきたいことがあります。</p>
        <blockquote className="quote">「非公開物件＝超お得な物件」ではありません。</blockquote>
        <p>巷で「非公開物件を紹介します」という営業トークをよく見かけますが、実態は違います。非公開物件が世の中にある理由は、大きく3つです。</p>

        <div className="structure">
          <div className="structure-item">
            <p className="structure-title">① 売主が"相場観のつく広告"を避けたい</p>
            <p className="structure-body">相場感のある買い手に「高すぎる」と見抜かれないよう、露出を絞っているケース。</p>
          </div>
          <div className="structure-item">
            <p className="structure-title">② 物件に表に出しにくい事情がある</p>
            <p className="structure-body">瑕疵・近隣トラブル・管理の問題など、ネット掲載で顕在化すると困る情報があるケース。</p>
          </div>
          <div className="structure-item">
            <p className="structure-title">③ 業者関係の義理で限定的に流通</p>
            <p className="structure-body">売主と特定業者のしがらみで、一部にだけ情報が流れるケース。</p>
          </div>
        </div>

        <p>つまり、<strong>非公開物件には高条件のものばかりが転がっているわけではありません</strong>。むしろ、普通に公開されている物件の方が条件が良いケースも多い。</p>

        <h3 className="section-heading">弊社が扱う非公開物件の方針</h3>
        <p>弊社には宮城県内で「市場に出ていない物件情報」が継続的に入ってきます。ただし、これらを誰にでも紹介しているわけではありません。</p>
        <p><strong>紹介するのは、お客様の属性・資金力・投資方針にフィットした時だけ</strong>です。「非公開物件があります！」と煽って登録を誘うような運用はしません。</p>

        <ul>
          <li>予算500万円の方に3,000万円の物件を紹介しても意味がない</li>
          <li>初心者の方に築40年の再生物件を渡しても事故が起きる</li>
          <li>地元在住の方にしか管理できないエリアを首都圏投資家に勧めない</li>
        </ul>

        <p>条件のフィットしない物件を「ご紹介しました」という形式だけ作っても、お客様のためにならない。この方針のため、<strong>ご相談いただいてから、お客様の状況に合うものがあればお送りする</strong>という順序です。</p>

        <div className="sidebar">
          <p className="sidebar-label">まずは条件をお聞かせください</p>
          <p>LINEで「物件リクエスト」と送っていただく際に、以下をお伝えください：</p>
          <p style={{ marginTop: 8 }}>
            ・<strong>予算の上限</strong>（自己資金と融資想定）<br />
            ・<strong>エリア希望</strong>（仙台中心部 / 郊外 / 地方都市）<br />
            ・<strong>物件タイプ</strong>（一棟アパート / 区分 / 戸建て）<br />
            ・<strong>築年数の許容範囲</strong><br />
            ・<strong>投資経験</strong>（初めて / 2棟目以降 / ベテラン）
          </p>
          <p style={{ marginTop: 8 }}>フィットする物件があれば数日〜数週間以内にお送りします。無ければ<strong>「今はありません」とはっきりお伝えします</strong>。下手な営業で無理に紹介するくらいなら、黙って待つ方が誠実だと思っています。</p>
        </div>
      </article>

      {/* ===== Ch.3 ===== */}
      <article className="page">
        <div className="page-header"><span>Ch.3 築古アパートの見極め方</span></div>
        <h2 className="chapter-heading"><span className="chapter-no">Ch.3</span>築古アパートの見極め方 — 3つの必須チェック</h2>

        {/* Photo: チェックリスト */}
        <div className="photo-block">
          <img src="/images/guide/g-checklist.webp" alt="現地チェック" />
          <p className="photo-caption">現地で3つのポイントを見るだけで、失敗の8割は防げる</p>
        </div>

        {/* Before / After ペア写真 */}
        <div className="photo-pair">
          <div className="photo-pair-item">
            <img src="/images/m-before-3-sm.webp" alt="改修前の状態" />
            <span className="photo-pair-label">Before</span>
          </div>
          <div className="photo-pair-item">
            <img src="/images/m-after-green-sm.webp" alt="改修後の状態" />
            <span className="photo-pair-label after">After</span>
          </div>
        </div>

        <h3 className="section-heading">3-1. チェックポイント① 給排水設備</h3>
        <p><strong>なぜ最重要か</strong>：配管の一斉更新は <strong>200〜400万円</strong>。利回り15%の物件でも、購入後すぐ更新が必要なら実質利回りは半減します。</p>
        <p className="subhead">現地で確認する3点：</p>
        <ol className="ordered">
          <li><strong>給水圧</strong>：最上階の蛇口を全開にして水圧を見る</li>
          <li><strong>排水音</strong>：キッチン・洗面の水を流した時、ゴボゴボ音は排水管の勾配不良</li>
          <li><strong>水道メーターの型式</strong>：アナログ式で古い → 配管も古い可能性が高い</li>
        </ol>

        <div className="sidebar">
          <p className="sidebar-label">内装屋視点</p>
          <p>外から見ても分からないのが配管。築25年超えで「一度も更新していない」と言われたら、即<strong>改修費200万円上乗せ</strong>で利回り再計算を。</p>
        </div>

        <h3 className="section-heading">3-2. チェックポイント② 屋根と外壁の塗膜</h3>
        <p>塗り替え周期は10〜15年。過ぎていれば <strong>100〜200万円</strong>の追加工事が見込まれます。雨漏りが始まっていれば<strong>数百万円単位</strong>の補修になることも。</p>
        <p className="subhead">現地で確認する3点：</p>
        <ol className="ordered">
          <li><strong>外壁のチョーキング</strong>：手で触って白い粉が付く → 塗膜劣化</li>
          <li><strong>屋根の色褪せ</strong>：遠景で瓦・スレートの色がまだら → 張替え検討</li>
          <li><strong>ベランダ防水</strong>：共用部のベランダ床がひび割れ → 防水工事必要</li>
        </ol>

        <h3 className="section-heading">3-3. チェックポイント③ 共用部と管理状態</h3>
        <p>共用部の状態は<strong>既存入居者の質</strong>と<strong>管理のしやすさ</strong>を物語ります。荒れた物件は入居者も荒れている可能性が高く、修繕費が嵩みやすい。</p>
        <ol className="ordered">
          <li><strong>ゴミ置き場</strong>：分別されている／掃除されている → 管理会社が機能</li>
          <li><strong>階段・廊下の汚れ</strong>：落ち葉・タバコの吸い殻放置 → 管理が抜けている</li>
          <li><strong>ポストの状態</strong>：チラシがあふれている → 空室率が高い可能性</li>
        </ol>

        <div className="checklist">
          <p className="checklist-title">✅ 現地確認チェックリスト（印刷用）</p>
          <div className="checklist-grid">
            <div>
              <p className="checklist-group">【給排水】</p>
              <p>□ 最上階の給水圧<br />□ 排水音<br />□ 水道メーター型式<br />□ 給湯器の設置年月<br />□ 最終更新時期（書類）</p>
            </div>
            <div>
              <p className="checklist-group">【屋根外壁】</p>
              <p>□ 外壁チョーキング<br />□ 屋根の色褪せ<br />□ ベランダ防水<br />□ 塗装履歴（書類）<br />□ 雨漏り修繕履歴</p>
            </div>
            <div>
              <p className="checklist-group">【共用部】</p>
              <p>□ ゴミ置き場<br />□ 階段・廊下<br />□ ポスト<br />□ 入居者リスト（書類）<br />□ 入退去履歴（書類）</p>
            </div>
          </div>
        </div>
      </article>

      {/* ===== Ch.4 ===== */}
      <article className="page">
        <div className="page-header"><span>Ch.4 指値交渉の実践テクニック</span></div>
        <h2 className="chapter-heading"><span className="chapter-no">Ch.4</span>指値交渉の実践テクニック — 想定問答と事例</h2>

        {/* Illustration: 天秤（交渉のバランス） */}
        <div className="illust">
          <svg viewBox="0 0 240 120" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" stroke="#6B4066" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              {/* 柱 */}
              <line x1="120" y1="20" x2="120" y2="100" strokeWidth="2" />
              <rect x="108" y="98" width="24" height="8" />
              {/* 横棒 */}
              <line x1="60" y1="40" x2="180" y2="40" strokeWidth="2" />
              {/* 左皿：売主希望 */}
              <line x1="60" y1="40" x2="50" y2="60" />
              <line x1="60" y1="40" x2="70" y2="60" />
              <path d="M 45 60 Q 60 70 75 60" />
              <text x="60" y="84" fontSize="8" textAnchor="middle" fill="#888" stroke="none">売主希望</text>
              <text x="60" y="94" fontSize="9" textAnchor="middle" fontWeight="700" fill="#6B4066" stroke="none">¥¥¥</text>
              {/* 右皿：指値 */}
              <line x1="180" y1="40" x2="170" y2="55" />
              <line x1="180" y1="40" x2="190" y2="55" />
              <path d="M 165 55 Q 180 62 195 55" stroke="#C9A84C" strokeWidth="2" />
              <text x="180" y="80" fontSize="8" textAnchor="middle" fill="#C9A84C" stroke="none">根拠ある指値</text>
              <text x="180" y="90" fontSize="9" textAnchor="middle" fontWeight="700" fill="#C9A84C" stroke="none">¥¥</text>
              {/* 中心 */}
              <circle cx="120" cy="40" r="4" fill="#C9A84C" stroke="#C9A84C" />
            </g>
          </svg>
          <p className="illust-caption">根拠があれば、数十〜数百万の調整は十分通る</p>
        </div>

        <h3 className="section-heading">4-1. 指値の基本ルール</h3>
        <p><strong>原則1: 根拠のない指値は通らない</strong><br />「何となく500万円で」は絶対に通りません。売主も仲介も、明確な数字の根拠を持つ買主にだけ応じます。</p>
        <p><strong>原則2: 最初から本命価格を出さない</strong><br />満額+5%くらいで準備しておき、指値交渉の段階で最終価格に落とす。</p>
        <p><strong>原則3: 書面で出す</strong><br />口頭指値は忘れられます。買付証明書に具体的な金額を書いて提出するのが一番強い。</p>

        <h3 className="section-heading">4-2. 指値の5つの根拠パターン</h3>
        <table className="data-table">
          <thead>
            <tr><th>#</th><th>根拠</th><th>下げ幅目安</th></tr>
          </thead>
          <tbody>
            <tr><td>1</td><td>給排水の更新必要</td><td>-150〜300万</td></tr>
            <tr><td>2</td><td>屋根外壁の塗装時期到来</td><td>-100〜200万</td></tr>
            <tr><td>3</td><td>空室分の逸失利回り</td><td>-50〜150万</td></tr>
            <tr><td>4</td><td>近隣類似物件の実勢価格</td><td>-50〜200万</td></tr>
            <tr><td>5</td><td>融資評価による減額</td><td>-100〜300万</td></tr>
          </tbody>
        </table>
        <p>複数の根拠を組み合わせると通りやすい。「配管+塗装+空室で合計400万円ダウン」のような組み立てを。</p>

        <h3 className="section-heading">4-3. 実際の指値成功事例</h3>

        <div className="jirei">
          <p className="jirei-title">事例1：石巻市 1棟8室・築25年</p>
          <ul>
            <li>売主希望：<strong>750万円</strong></li>
            <li>指摘：「空室3/8で年間120万円の逸失収益。1年分の120万円を調整希望」</li>
            <li>成約：<strong className="gold">620万円</strong>（-130万円）</li>
          </ul>
        </div>

        <div className="jirei">
          <p className="jirei-title">事例2：多賀城市 1棟6室・築30年</p>
          <ul>
            <li>売主希望：<strong>580万円</strong></li>
            <li>指摘：「配管未更新・外壁塗装12年未実施・合計280万円の改修必要」</li>
            <li>成約：<strong className="gold">450万円</strong>（-130万円）</li>
          </ul>
        </div>

        <div className="jirei">
          <p className="jirei-title">事例3：仙台市太白区 1棟4室・築22年</p>
          <ul>
            <li>売主希望：<strong>850万円</strong></li>
            <li>指摘：「近隣の類似物件が平均680〜780万円で成約」</li>
            <li>成約：<strong className="gold">780万円</strong>（-70万円）</li>
          </ul>
        </div>
      </article>

      {/* ===== Ch.5 ===== */}
      <article className="page">
        <div className="page-header"><span>Ch.5 改修費の相場早見表</span></div>
        <h2 className="chapter-heading"><span className="chapter-no">Ch.5</span>改修費の相場早見表 — 部屋タイプ別・単価公開</h2>

        {/* Photo: 見積書 */}
        <div className="photo-block">
          <img src="/images/guide/g-estimate.webp" alt="透明な見積書" />
          <p className="photo-caption">単価・㎡数・材料名をすべて公開した見積書</p>
        </div>

        {/* サンプル改修写真 */}
        <div className="photo-block">
          <img src="/images/m-after-accent-sm.webp" alt="アクセントクロス施工例" />
          <p className="photo-caption">アクセントクロス1面で印象が変わる</p>
        </div>

        <h3 className="section-heading">5-1. 原状回復（退去後の通常改修）</h3>
        <table className="data-table">
          <thead><tr><th>項目</th><th>単価</th><th>備考</th></tr></thead>
          <tbody>
            <tr><td>クロス張替（量産品）</td><td>900円/㎡</td><td>サンゲツSP・リリカラLV等</td></tr>
            <tr><td>クロス張替（アクセント）</td><td>15,000円/面</td><td>1部屋1面推奨</td></tr>
            <tr><td>フローリング張替（CF）</td><td>6,000円/㎡</td><td>量産品</td></tr>
            <tr><td>畳表替え</td><td>8,000円/帖</td><td>新品イグサ</td></tr>
            <tr><td>ハウスクリーニング</td><td>25,000円〜</td><td>1K〜1LDK</td></tr>
            <tr><td>エアコンクリーニング</td><td>15,000円/台</td><td>分解洗浄</td></tr>
            <tr><td>鍵交換（シリンダー）</td><td>12,000円</td><td>標準</td></tr>
            <tr><td>鍵交換（ディンプル）</td><td>25,000円</td><td>防犯強化</td></tr>
          </tbody>
        </table>

        <h3 className="section-heading">5-2. 部屋タイプ別の原状回復総額目安</h3>
        <table className="data-table">
          <thead><tr><th>部屋</th><th>軽微</th><th>標準</th><th>フル</th></tr></thead>
          <tbody>
            <tr><td>ワンルーム・1K</td><td>5万円</td><td>8.8万円</td><td>15万円</td></tr>
            <tr><td>1DK・1LDK</td><td>8万円</td><td>14万円</td><td>22万円</td></tr>
            <tr><td>2DK・2LDK</td><td>12万円</td><td>18万円</td><td>30万円</td></tr>
            <tr><td>3DK・3LDK</td><td>15万円</td><td>25万円</td><td>40万円</td></tr>
          </tbody>
        </table>

        <h3 className="section-heading">5-3. アップグレード工事（利回り改善向け）</h3>
        <table className="data-table">
          <thead><tr><th>工事内容</th><th>費用</th><th>家賃アップ期待</th></tr></thead>
          <tbody>
            <tr><td>アクセントクロス1面</td><td>15,000円</td><td>+1,000円/月</td></tr>
            <tr><td>LEDペンダント化</td><td>25,000円</td><td>+500円/月</td></tr>
            <tr><td>モニター付インターホン</td><td>35,000円</td><td>+1,000円/月</td></tr>
            <tr><td>宅配ボックス設置</td><td>80,000円</td><td>+1,000円/月</td></tr>
            <tr><td>独立洗面台化</td><td>120,000円</td><td>+2,000円/月</td></tr>
            <tr><td>ウォシュレット設置</td><td>45,000円</td><td>+1,000円/月</td></tr>
            <tr><td>追い焚き機能追加</td><td>180,000円</td><td>+2,000円/月</td></tr>
          </tbody>
        </table>

        <div className="sidebar">
          <p className="sidebar-label">内装屋視点</p>
          <p>「20万円投資して家賃+2,000円」なら回収は8.3年。築30年物件では効かないが、築15〜20年なら十分ペイする。<strong>物件の残耐用年数と工事費のバランス</strong>が見極めの肝。</p>
        </div>
      </article>

      {/* ===== Ch.6 ===== */}
      <article className="page">
        <div className="page-header"><span>Ch.6 客付けの基礎</span></div>
        <h2 className="chapter-heading"><span className="chapter-no">Ch.6</span>客付けの基礎 — バーチャルステージング活用</h2>

        {/* バーチャルステージング写真ペア */}
        <div className="photo-pair">
          <div className="photo-pair-item">
            <img src="/images/vs-before.webp" alt="バーチャルステージング前" />
            <span className="photo-pair-label">空室写真</span>
          </div>
          <div className="photo-pair-item">
            <img src="/images/vs-staged-green.webp" alt="バーチャルステージング後" />
            <span className="photo-pair-label after">ステージング後</span>
          </div>
        </div>
        <p className="photo-caption center">バーチャルステージングで内見クリック率は2〜3倍に</p>

        {/* タブレットで見せる */}
        <div className="photo-block">
          <img src="/images/guide/g-tablet.webp" alt="バーチャルステージングの運用" />
          <p className="photo-caption">写真データだけで完成イメージを作れる</p>
        </div>

        <h3 className="section-heading">6-1. 客付けの原則</h3>
        <p>アパート投資は「<strong>満室で初めて利回り通り</strong>」。いかに空室を減らすかが全てです。</p>
        <p>客付けの成功率は以下の3要素で決まります：</p>
        <ol className="ordered">
          <li><strong>物件力</strong>：立地・築年数・広さ・設備</li>
          <li><strong>見せ方</strong>：写真・募集文・バーチャルステージング</li>
          <li><strong>客付け網</strong>：レインズ登録・管理会社の営業・SNS</li>
        </ol>
        <p>このうち、大家自身がコントロールできるのは <strong>「見せ方」</strong>。ここでバーチャルステージングが効きます。</p>

        <h3 className="section-heading">6-2. バーチャルステージングとは</h3>
        <p>空室の写真に、家具・小物を後からCG合成する手法。</p>
        <ul>
          <li>内見者が「住んでいる自分」をイメージしやすくなる</li>
          <li><strong>家賃交渉の主導権を大家が持てる</strong></li>
          <li>広告の<strong>クリック率が2〜3倍</strong>になる</li>
          <li>実際の家具搬入・撤去が不要なのでコストゼロ</li>
        </ul>

        <h3 className="section-heading">6-3. 満室デザインLABOのバーチャルステージング</h3>
        <p>契約物件のバーチャルステージングを <strong>¥0で提供</strong> しています（内装改修契約者向け）。</p>
        <ol className="ordered">
          <li>空室の写真を送っていただく（スマホでOK）</li>
          <li>AIと当社デザイナーで家具・小物を合成</li>
          <li>3パターン（ナチュラル／モダン／カジュアル）を48時間以内にお渡し</li>
          <li>管理会社・ポータルサイトに掲載</li>
        </ol>

        <h3 className="section-heading">6-4. 自力客付けで主導権を持つ</h3>
        <p>管理会社に丸投げすると、客付け手数料・AD・広告コストで年間<strong>家賃の1〜2ヶ月分</strong>が消えます。</p>
        <p>自力客付けに切り替えると：</p>
        <div className="calc-box">
          <p>月5万円家賃 × 12ヶ月 × 10%コスト削減 = <strong className="gold">年間6万円の浮き</strong></p>
          <p className="calc-note">これが次のリフォーム費や次の物件の頭金に回る</p>
        </div>
      </article>

      {/* ===== Ch.7 ===== */}
      <article className="page">
        <div className="page-header"><span>Ch.7 失敗事例10選</span></div>
        <h2 className="chapter-heading"><span className="chapter-no">Ch.7</span>失敗事例10選 — よくある落とし穴と回避策</h2>

        {/* 失敗事例のリアル写真 */}
        <div className="photo-block">
          <img src="/images/m-before-2-sm.webp" alt="劣化した物件状態" />
          <p className="photo-caption">買ってから気づいた劣化 — 先人の落とし穴を避けて通ろう</p>
        </div>

        {[
          { n: 1, title: "表面利回りだけで飛びついた", sym: "利回り20%の物件を購入 → 改修費300万円 → 実質12%に", sol: "Ch.3のチェックリストを現地で必ず実施" },
          { n: 2, title: "旧耐震物件を知らず買った", sym: "1980年築を購入 → 融資付かず売却困難", sol: "1981年6月以降建築を厳守" },
          { n: 3, title: "出口戦略を考えずに購入", sym: "築35年物件を買ったが売却時に買い手が付かない", sol: "購入時点で「何年保有して誰に売るか」を決める" },
          { n: 4, title: "管理会社の言いなりでAD10万円", sym: "毎回退去の度に家賃2ヶ月分のAD", sol: "AD上限を契約で定める or 自力客付け" },
          { n: 5, title: "「一式◯万円」の見積もりで言い値", sym: "内訳不明な請求", sol: "平米数・単価・材料名を明記した見積もりを要求" },
          { n: 6, title: "満室想定で買ったが埋まらない", sym: "表面利回り想定 → 現実50%稼働", sol: "周辺空室率を事前調査" },
          { n: 7, title: "近隣トラブルで入居者退去", sym: "騒音問題で3ヶ月に1人退去", sol: "購入前に現地で夜も確認。近隣聞き込み" },
          { n: 8, title: "改修費を出し惜しみ", sym: "5万円の軽微改修 → 半年空室", sol: "最初に15万円かけても満室化が早いほうが黒字" },
          { n: 9, title: "投資コンサルのセミナー鵜呑み", sym: "紹介物件が相場より高かった", sol: "セカンドオピニオンを必ず取る" },
          { n: 10, title: "自分で見ずに購入", sym: "現地で重大な瑕疵発覚", sol: "必ず現地確認。遠方なら専門家依頼" },
        ].map((f) => (
          <div key={f.n} className="fail">
            <p className="fail-title"><span className="fail-num">{f.n}</span>{f.title}</p>
            <p className="fail-line"><span className="fail-label">症状：</span>{f.sym}</p>
            <p className="fail-line"><span className="fail-label">回避：</span>{f.sol}</p>
          </div>
        ))}
      </article>

      {/* ===== Ch.8 ===== */}
      <article className="page">
        <div className="page-header"><span>Ch.8 まとめ</span></div>
        <h2 className="chapter-heading"><span className="chapter-no">Ch.8</span>まとめ — 次の1歩</h2>

        {/* 完成形の写真 */}
        <div className="photo-block">
          <img src="/images/m-after-led-sm.webp" alt="理想の完成形" />
          <p className="photo-caption">1歩ずつ、確実に — 理想の形を目指して</p>
        </div>

        <h3 className="section-heading">この7つをメモしてください</h3>
        <ol className="ordered big">
          <li>物件選びは内装とセットで考える</li>
          <li>築年数ではなく残存耐用年数を見る</li>
          <li>現地確認は必須。写真と書類だけで判断しない</li>
          <li>指値には根拠を持つ。根拠があれば通る</li>
          <li>客付けまで含めて利回り計算。満室想定は危険</li>
          <li>「一式◯万円」は拒否。単価・㎡数・材料名を求める</li>
          <li>出口戦略を購入時に決める</li>
        </ol>

        <h3 className="section-heading">次にやるべき3ステップ</h3>
        <div className="step">
          <p className="step-num">Step 1: 希望条件を固める</p>
          <p>エリア／予算／タイプ／築年数の許容／利回り目標を決める</p>
        </div>
        <div className="step">
          <p className="step-num">Step 2: 情報収集のパイプを作る</p>
          <p>満室デザインLABOのLINE / 楽待・健美家 / 地元不動産屋2〜3社</p>
        </div>
        <div className="step">
          <p className="step-num">Step 3: 現地を見る</p>
          <p>1件目は勉強と割り切って見学。チェックリストで目を鍛える</p>
        </div>

        <div className="final-cta">
          <p className="final-title">ご相談はLINEから</p>
          <p>個別のご相談・物件リクエスト・内見同行のお申込みは、LINE公式アカウント <strong>@074uzmls</strong> まで。</p>
          <p>すべて<strong className="gold">無料</strong>です。営業はしません。</p>
          <p className="final-url">{LINE_URL}</p>
        </div>
      </article>

      {/* ===== 付録A ===== */}
      <article className="page">
        <div className="page-header"><span>付録A 市町村別 平均利回りデータ</span></div>
        <h2 className="chapter-heading"><span className="chapter-no">付録A</span>市町村別 平均利回りデータ</h2>
        <table className="data-table">
          <thead><tr><th>市町村</th><th>平均利回り</th><th>物件価格帯</th><th>備考</th></tr></thead>
          <tbody>
            <tr><td>仙台市青葉区</td><td>9.2%</td><td>800〜1,500万</td><td>中心部</td></tr>
            <tr><td>仙台市若林区</td><td>11.5%</td><td>600〜1,100万</td><td>コスパ良</td></tr>
            <tr><td>仙台市宮城野区</td><td>12.8%</td><td>500〜900万</td><td>駅東が伸び</td></tr>
            <tr><td>仙台市泉区</td><td>11.7%</td><td>600〜1,000万</td><td>ファミリー需要</td></tr>
            <tr><td>仙台市太白区</td><td>12.1%</td><td>500〜1,100万</td><td>長町再開発</td></tr>
            <tr><td>名取市</td><td>13.4%</td><td>400〜700万</td><td>仙台空港圏</td></tr>
            <tr><td>多賀城市</td><td>14.8%</td><td>350〜650万</td><td>仙台駅20分</td></tr>
            <tr><td>塩竈市</td><td>15.5%</td><td>300〜550万</td><td>仙石線</td></tr>
            <tr><td>岩沼市</td><td>13.8%</td><td>400〜600万</td><td>東北本線</td></tr>
            <tr><td>白石市</td><td>14.5%</td><td>300〜500万</td><td>県南</td></tr>
            <tr><td>富谷市</td><td>12.0%</td><td>500〜800万</td><td>人口増中</td></tr>
            <tr><td>利府町</td><td>12.9%</td><td>400〜650万</td><td>仙台隣接</td></tr>
            <tr><td>石巻市</td><td>15.8%</td><td>300〜700万</td><td>沿岸部最大</td></tr>
            <tr><td>東松島市</td><td>16.2%</td><td>250〜450万</td><td>石巻隣接</td></tr>
            <tr><td>気仙沼市</td><td>17.5%</td><td>200〜400万</td><td>沿岸北部</td></tr>
            <tr><td>大崎市</td><td>17.2%</td><td>250〜500万</td><td>県北中核</td></tr>
            <tr><td>登米市</td><td>19.0%</td><td>200〜350万</td><td>県北内陸</td></tr>
            <tr><td>栗原市</td><td>19.5%</td><td>200〜350万</td><td>上級者向け</td></tr>
          </tbody>
        </table>
        <p className="note">弊社取扱実績ベース。満室・指値後の実質値。市場の公表値とは異なります。</p>
      </article>

      {/* ===== 付録B ===== */}
      <article className="page">
        <div className="page-header"><span>付録B 用語集</span></div>
        <h2 className="chapter-heading"><span className="chapter-no">付録B</span>用語集</h2>
        <dl className="yougoshu">
          <dt>AD（アド）</dt><dd>広告料の略。管理会社・仲介業者に支払う客付け手数料。家賃の1〜2ヶ月分が相場。</dd>
          <dt>一棟物件</dt><dd>アパート1棟全体を購入する投資スタイル。</dd>
          <dt>オーナーチェンジ</dt><dd>現在入居者がいる状態で物件を売買すること。</dd>
          <dt>区分マンション</dt><dd>マンションの1戸だけを購入する投資スタイル。</dd>
          <dt>原状回復</dt><dd>退去時に部屋を次の入居者向けに整える工事。</dd>
          <dt>指値（さしね）</dt><dd>買主が売主に対して提示する希望購入価格。</dd>
          <dt>実質利回り</dt><dd>表面利回りから経費・改修費・税金等を差し引いた実際の利回り。</dd>
          <dt>旧耐震 / 新耐震</dt><dd>1981年6月1日の改正を境に分かれる建築基準法の耐震基準。</dd>
          <dt>表面利回り</dt><dd>家賃収入÷物件価格で計算される単純利回り。</dd>
          <dt>バーチャルステージング</dt><dd>空室の写真に家具をCG合成する客付け手法。</dd>
          <dt>満室想定利回り</dt><dd>満室だった場合の家賃で計算した利回り。実勢と乖離注意。</dd>
          <dt>レインズ（REINS）</dt><dd>不動産業者間の物件情報ネットワーク。</dd>
        </dl>

        <div className="closing">
          <p>© 2026 満室デザインLABO ／ KAI &amp; KEN</p>
          <p className="closing-sub">宮城の収益物件を、物件探しから手伝う内装屋。</p>
          <p>manshitsu.homes ／ LINE: @074uzmls</p>
        </div>
      </article>
    </div>
  );
}

const styles = `
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700;900&family=Noto+Serif+JP:wght@500;700&display=swap');

.guide-root {
  font-family: 'Noto Sans JP', sans-serif;
  color: #2a2a2a;
  background: #f5f2ec;
  min-height: 100vh;
  padding: 40px 16px;
}

.guide-nav {
  max-width: 760px;
  margin: 0 auto 32px;
  padding: 16px 24px;
  background: #fff;
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
  position: sticky;
  top: 20px;
  z-index: 10;
}

.guide-nav-brand {
  font-size: 14px;
  font-weight: 700;
  color: #442940;
  text-decoration: none;
}

.guide-nav-actions {
  display: flex;
  gap: 12px;
}

.guide-nav-print {
  background: #442940;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
}

.guide-nav-line {
  background: #06C755;
  color: #fff;
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 700;
}

.page {
  max-width: 760px;
  margin: 0 auto 32px;
  padding: 60px 56px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.06);
  page-break-after: always;
  position: relative;
  min-height: 800px;
}

.page-header {
  position: absolute;
  top: 20px;
  right: 40px;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.2em;
  color: #C9A84C;
  text-transform: uppercase;
}

/* 表紙 */
.guide-cover {
  background: linear-gradient(135deg, #442940 0%, #5A3454 60%, #6B4066 100%);
  color: #fff;
  text-align: center;
  min-height: 1050px;
  position: relative;
  padding: 80px 56px;
}

.cover-accent-top, .cover-accent-bottom {
  position: absolute;
  left: 0;
  right: 0;
  height: 4px;
  background: #C9A84C;
}
.cover-accent-top { top: 0; }
.cover-accent-bottom { bottom: 0; }

.cover-category {
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.4em;
  color: #C9A84C;
  margin-bottom: 20px;
}

.cover-hr {
  width: 60px;
  border: none;
  border-top: 1px solid #C9A84C;
  margin: 0 auto 80px;
}

.cover-title {
  margin: 0 0 40px;
  line-height: 1.4;
}

.cover-title-l1, .cover-title-l2, .cover-title-l3 {
  display: block;
}
.cover-title-l1 { font-size: 40px; font-weight: 500; }
.cover-title-l2 { font-size: 56px; font-weight: 700; letter-spacing: 0.08em; }
.cover-title-l3 {
  font-size: 56px;
  font-weight: 700;
  color: #C9A84C;
  letter-spacing: 0.1em;
  margin-top: 8px;
}

.cover-subtitle {
  font-size: 14px;
  color: rgba(255,255,255,0.7);
  letter-spacing: 0.1em;
  margin-bottom: 60px;
}

.cover-chapters {
  list-style: none;
  padding: 0;
  margin: 0 auto 80px;
  max-width: 400px;
  text-align: left;
}

.cover-chapters li {
  font-size: 15px;
  color: rgba(255,255,255,0.85);
  margin-bottom: 14px;
  font-weight: 500;
}

.cover-footer {
  position: absolute;
  bottom: 80px;
  left: 0;
  right: 0;
}

.cover-footer-hr {
  width: 80px;
  border: none;
  border-top: 1px solid rgba(201,168,76,0.5);
  margin: 0 auto 20px;
}

.cover-brand {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 6px;
  letter-spacing: 0.08em;
}

.cover-team {
  font-size: 13px;
  color: rgba(201,168,76,0.85);
  letter-spacing: 0.2em;
  margin-bottom: 14px;
}

.cover-url {
  font-size: 12px;
  color: rgba(255,255,255,0.45);
  letter-spacing: 0.1em;
}

/* 目次 */
.chapter-heading-toc {
  font-size: 28px;
  font-weight: 700;
  color: #442940;
  text-align: center;
  margin-bottom: 48px;
  padding-bottom: 16px;
  border-bottom: 2px solid #C9A84C;
}

.toc-list {
  list-style: none;
  padding: 0;
  counter-reset: toc;
}

.toc-list li {
  display: flex;
  padding: 14px 0;
  border-bottom: 1px dashed #e0d8cc;
  font-size: 15px;
  line-height: 1.6;
  color: #444;
}

.toc-num {
  font-weight: 700;
  color: #6B4066;
  min-width: 80px;
}

/* 各章見出し */
.chapter-heading {
  font-size: 22px;
  font-weight: 700;
  color: #442940;
  line-height: 1.6;
  margin-bottom: 32px;
  padding-bottom: 16px;
  border-bottom: 2px solid #C9A84C;
}

.chapter-no {
  display: inline-block;
  background: #442940;
  color: #C9A84C;
  padding: 2px 10px;
  border-radius: 4px;
  font-size: 13px;
  font-weight: 700;
  margin-right: 12px;
  letter-spacing: 0.05em;
  vertical-align: middle;
}

.section-heading {
  font-size: 17px;
  font-weight: 700;
  color: #6B4066;
  margin: 32px 0 12px;
  padding-left: 12px;
  border-left: 3px solid #C9A84C;
}

/* 本文 */
.page p {
  font-size: 14px;
  line-height: 1.9;
  color: #333;
  margin-bottom: 12px;
}

.page strong {
  color: #442940;
  font-weight: 700;
}

.page .gold {
  color: #C9A84C;
}

.subhead {
  font-size: 14px;
  font-weight: 700;
  color: #6B4066;
  margin: 16px 0 8px !important;
}

.page ul, .page ol {
  font-size: 14px;
  line-height: 1.9;
  padding-left: 24px;
  margin-bottom: 16px;
}

.page ul li, .page ol li {
  margin-bottom: 6px;
}

.ordered.big li {
  margin-bottom: 12px;
  font-weight: 500;
}

.note {
  font-size: 12px;
  color: #666;
  background: #faf7f2;
  padding: 12px 16px;
  border-radius: 6px;
  border-left: 3px solid #C9A84C;
  margin: 16px 0;
}

/* Quote */
.quote {
  background: #faf7f2;
  border-left: 4px solid #C9A84C;
  padding: 16px 20px;
  font-size: 15px;
  color: #442940;
  font-weight: 500;
  font-style: italic;
  margin: 20px 0;
  line-height: 1.7;
}

/* Sidebar (内装屋視点) */
.sidebar {
  background: linear-gradient(135deg, #F0E6ED 0%, #f5eef3 100%);
  border: 1px solid #d8c8d4;
  border-radius: 10px;
  padding: 16px 20px;
  margin: 20px 0;
}

.sidebar-label {
  font-size: 11px;
  font-weight: 700;
  color: #6B4066;
  letter-spacing: 0.2em;
  margin-bottom: 8px !important;
  text-transform: uppercase;
}

.sidebar p:last-child {
  font-size: 13px !important;
  color: #442940 !important;
  margin-bottom: 0 !important;
}

/* Table */
.data-table {
  width: 100%;
  border-collapse: collapse;
  margin: 16px 0 24px;
  font-size: 12px;
}

.data-table th {
  background: #442940;
  color: #fff;
  padding: 10px 12px;
  text-align: left;
  font-weight: 700;
  letter-spacing: 0.02em;
}

.data-table td {
  padding: 10px 12px;
  border-bottom: 1px solid #e8e5de;
  color: #444;
  line-height: 1.5;
}

.data-table tr:nth-child(even) td {
  background: #faf7f2;
}

.data-table tr:hover td {
  background: #f5ecd7;
}

/* 物件リスト */
.bukken-list {
  list-style: none !important;
  padding: 0 !important;
}

.bukken-list li {
  padding: 10px 16px;
  margin-bottom: 6px !important;
  background: #faf7f2;
  border-left: 3px solid #C9A84C;
  border-radius: 0 6px 6px 0;
  font-size: 13px;
}

/* Checklist */
.checklist {
  background: #faf7f2;
  border: 1px solid #e0d8cc;
  border-radius: 10px;
  padding: 20px;
  margin: 24px 0;
}

.checklist-title {
  font-size: 14px;
  font-weight: 700;
  color: #442940;
  margin-bottom: 16px !important;
}

.checklist-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  font-size: 12px;
  line-height: 1.9;
}

.checklist-group {
  font-weight: 700;
  color: #6B4066;
  margin-bottom: 4px !important;
}

/* 事例 */
.jirei {
  background: #fff;
  border: 1px solid #e0d8cc;
  border-radius: 10px;
  padding: 16px 20px;
  margin-bottom: 12px;
}

.jirei-title {
  font-size: 14px;
  font-weight: 700;
  color: #442940;
  margin-bottom: 8px !important;
  padding-bottom: 6px;
  border-bottom: 1px solid #C9A84C;
}

.jirei ul {
  list-style: none !important;
  padding: 0 !important;
  font-size: 13px !important;
}

.jirei ul li {
  margin-bottom: 4px !important;
}

/* Calc box */
.calc-box {
  background: #442940;
  color: #fff;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  margin: 16px 0;
}

.calc-box p {
  color: #fff !important;
  font-size: 14px !important;
  margin-bottom: 6px !important;
}

.calc-note {
  color: rgba(255,255,255,0.6) !important;
  font-size: 11px !important;
  font-style: italic;
}

/* Fail case */
.fail {
  background: #fff;
  border: 1px solid #e0d8cc;
  border-left: 4px solid #C44D3F;
  border-radius: 6px;
  padding: 12px 16px;
  margin-bottom: 10px;
}

.fail-title {
  font-size: 13px;
  font-weight: 700;
  color: #442940;
  margin-bottom: 6px !important;
}

.fail-num {
  display: inline-block;
  width: 22px;
  height: 22px;
  background: #C44D3F;
  color: #fff;
  border-radius: 50%;
  text-align: center;
  font-size: 11px;
  font-weight: 700;
  line-height: 22px;
  margin-right: 8px;
}

.fail-line {
  font-size: 12px !important;
  color: #666 !important;
  margin-bottom: 2px !important;
  line-height: 1.6 !important;
}

.fail-label {
  font-weight: 700;
  color: #C44D3F;
  margin-right: 4px;
}

/* Step */
.step {
  background: linear-gradient(135deg, #F0E6ED 0%, #f5eef3 100%);
  border: 1px solid #d8c8d4;
  border-radius: 8px;
  padding: 14px 18px;
  margin-bottom: 10px;
}

.step-num {
  font-size: 14px !important;
  font-weight: 700;
  color: #6B4066;
  margin-bottom: 4px !important;
}

.step p:last-child {
  font-size: 13px !important;
  color: #666 !important;
  margin-bottom: 0 !important;
}

/* Final CTA */
.final-cta {
  background: linear-gradient(135deg, #442940 0%, #6B4066 100%);
  color: #fff;
  padding: 32px 28px;
  border-radius: 12px;
  text-align: center;
  margin-top: 40px;
}

.final-cta p {
  color: rgba(255,255,255,0.8) !important;
  margin-bottom: 10px !important;
}

.final-title {
  font-size: 20px !important;
  font-weight: 700;
  color: #fff !important;
  letter-spacing: 0.05em;
}

.final-url {
  font-size: 14px !important;
  color: #C9A84C !important;
  margin-top: 16px !important;
}

/* 用語集 */
.yougoshu {
  margin-top: 20px;
}

.yougoshu dt {
  font-size: 14px;
  font-weight: 700;
  color: #442940;
  margin-top: 16px;
  padding-bottom: 4px;
  border-bottom: 1px dashed #d8c8d4;
}

.yougoshu dd {
  font-size: 13px;
  line-height: 1.8;
  color: #666;
  margin: 6px 0 0;
  padding-left: 16px;
}

.closing {
  margin-top: 60px;
  padding-top: 24px;
  border-top: 2px solid #C9A84C;
  text-align: center;
}

.closing p {
  font-size: 12px !important;
  color: #999 !important;
  margin-bottom: 4px !important;
}

.closing-sub {
  font-size: 13px !important;
  color: #6B4066 !important;
  font-weight: 500;
}

/* Illustration (SVG) */
.illust {
  margin: 24px auto 32px;
  padding: 20px 16px 12px;
  background: linear-gradient(180deg, #faf7f2 0%, #fff 100%);
  border: 1px solid #e8e5de;
  border-radius: 10px;
  text-align: center;
}

.illust svg {
  width: 100%;
  max-width: 280px;
  height: auto;
  display: block;
  margin: 0 auto;
}

.illust-caption {
  font-size: 12px !important;
  color: #6B4066 !important;
  font-weight: 500;
  margin-top: 8px !important;
  margin-bottom: 0 !important;
  letter-spacing: 0.03em;
}

/* Photo block (実写) */
.photo-block {
  margin: 20px auto 28px;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid #e8e5de;
  background: #fff;
}

.photo-block img {
  width: 100%;
  height: auto;
  display: block;
  max-height: 280px;
  object-fit: cover;
}

.photo-caption {
  font-size: 12px !important;
  color: #6B4066 !important;
  font-weight: 500;
  padding: 10px 14px !important;
  margin: 0 !important;
  background: #faf7f2;
  border-top: 1px solid #e8e5de;
  letter-spacing: 0.02em;
}

.photo-caption.center {
  text-align: center;
  background: transparent;
  border: none;
  margin-top: -16px !important;
  margin-bottom: 24px !important;
}

/* Before/After ペア */
.photo-pair {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin: 20px 0 16px;
}

.photo-pair-item {
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #e8e5de;
  aspect-ratio: 4 / 3;
}

.photo-pair-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.photo-pair-label {
  position: absolute;
  top: 8px;
  left: 8px;
  background: rgba(55, 65, 81, 0.85);
  color: #fff;
  font-size: 11px;
  font-weight: 700;
  padding: 3px 10px;
  border-radius: 3px;
  letter-spacing: 0.06em;
}

.photo-pair-label.after {
  background: rgba(107, 64, 102, 0.85);
}

/* Profile photo (in cards) */
.profile-photo {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  object-fit: cover;
  margin: 0 auto 12px;
  display: block;
  border: 3px solid rgba(201, 168, 76, 0.4);
}

/* Structure list (仲介業の3つの矛盾 etc) */
.structure {
  margin: 20px 0;
}

.structure-item {
  background: #fff;
  border-left: 4px solid #6B4066;
  border-top: 1px solid #e0d8cc;
  border-right: 1px solid #e0d8cc;
  border-bottom: 1px solid #e0d8cc;
  border-radius: 0 8px 8px 0;
  padding: 14px 18px;
  margin-bottom: 10px;
}

.structure-title {
  font-size: 14px !important;
  font-weight: 700;
  color: #442940;
  margin-bottom: 6px !important;
}

.structure-body {
  font-size: 13px !important;
  color: #555 !important;
  line-height: 1.8 !important;
  margin-bottom: 0 !important;
}

/* Benefit list (内装屋の立場の利点) */
.benefit-list {
  background: linear-gradient(135deg, #F0E6ED 0%, #f5eef3 100%);
  border: 1px solid #d8c8d4;
  border-radius: 10px;
  padding: 20px 24px;
  margin: 20px 0;
}

.benefit-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 10px;
}

.benefit-item:last-child {
  margin-bottom: 0;
}

.benefit-icon {
  color: #C9A84C;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.4;
  flex-shrink: 0;
}

.benefit-item p {
  margin-bottom: 0 !important;
  font-size: 14px !important;
  color: #442940 !important;
  line-height: 1.7 !important;
}

/* Profile cards (KAI & KEN) */
.profile-cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin: 20px 0;
}

.profile-card {
  background: #442940;
  color: #fff;
  border-radius: 10px;
  padding: 20px 16px;
  text-align: center;
  border: 1px solid #6B4066;
}

.profile-name {
  font-size: 22px !important;
  font-weight: 900;
  color: #fff !important;
  margin-bottom: 4px !important;
  letter-spacing: 0.1em;
}

.profile-role {
  font-size: 11px !important;
  color: #C9A84C !important;
  margin-bottom: 10px !important;
  letter-spacing: 0.15em;
  text-transform: uppercase;
}

.profile-desc {
  font-size: 12px !important;
  color: rgba(255,255,255,0.7) !important;
  line-height: 1.7 !important;
  margin-bottom: 0 !important;
}

@media (max-width: 640px) {
  .page {
    padding: 40px 24px;
  }
  .checklist-grid {
    grid-template-columns: 1fr;
  }
  .cover-title-l2, .cover-title-l3 {
    font-size: 40px;
  }
  .profile-cards {
    grid-template-columns: 1fr;
  }
}

/* ===== 印刷用CSS ===== */
@media print {
  @page {
    size: A4;
    margin: 15mm 12mm;
  }

  .guide-root {
    background: #fff !important;
    padding: 0 !important;
  }

  .screen-only {
    display: none !important;
  }

  .page {
    box-shadow: none !important;
    border-radius: 0 !important;
    margin: 0 !important;
    padding: 20mm 15mm !important;
    min-height: auto !important;
    page-break-after: always;
    max-width: none !important;
  }

  .guide-cover {
    min-height: 260mm !important;
  }

  /* 印刷時は一部を調整 */
  .data-table {
    page-break-inside: avoid;
  }

  .jirei, .fail, .step, .sidebar, .checklist {
    page-break-inside: avoid;
  }
}
`;
