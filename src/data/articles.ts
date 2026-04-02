export type ArticleCategory = 'case-study' | 'column' | 'seo';

export const categoryLabels: Record<ArticleCategory, string> = {
  'case-study': '施工事例',
  column: 'コラム',
  seo: 'お役立ち情報',
};

export interface ArticleSection {
  heading: string;
  text: string;
  image?: string;
}

export interface Article {
  slug: string;
  title: string;
  category: ArticleCategory;
  date: string;
  thumbnail: string;
  heroImage: string;
  excerpt: string;
  tags: string[];
  metaDescription: string;
  keywords: string[];
  leadText: string;
  sections: ArticleSection[];
}

export const articles: Article[] = [
  {
    slug: 'genjokaifuku-cost-down',
    title: '原状回復費用を半額以下にした方法 — 仙台市1LDKオーナーの実例',
    category: 'case-study',
    date: '2026-03-15',
    thumbnail: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&q=80',
    heroImage: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=960&q=80',
    excerpt: '管理会社の見積もり18万円が8.5万円に。分離発注で原状回復コストを大幅削減した事例を紹介します。',
    tags: ['原状回復', 'コスト削減', '分離発注', '仙台'],
    metaDescription: '管理会社経由の原状回復費用18万円を、直接発注で8.5万円に削減。仙台市1LDKオーナーの実例と分離発注のポイントを解説。',
    keywords: ['原状回復', '費用', '仙台', '分離発注', 'コスト削減'],
    leadText: '退去後、管理会社から届いた見積もりは18万円。「高いな…」と感じたオーナー様がLINEで見積書を送ってくださったことから始まった、コスト半額以下への道のりをご紹介します。',
    sections: [
      {
        heading: '管理会社の見積もりに違和感',
        text: '1LDK（40㎡）の退去後、管理会社から届いた原状回復の見積もりは約18万円。クロス張替え、クッションフロア張替え、ハウスクリーニングの3点で、各項目の単価が相場より明らかに高い状態でした。クロスは㎡あたり1,500円以上、クッションフロアも㎡5,000円超。オーナー様は「これが普通なのか？」と疑問を持ち、LINEで見積書を送ってくださいました。',
      },
      {
        heading: '同じ工事内容で再見積もり',
        text: '管理会社の見積書と同じ工事範囲・仕様で再見積もりを実施。クロスは量産品で㎡900円、クッションフロアは㎡2,800円、クリーニングは25,000円。合計8.5万円の見積もりを提示しました。同じ工事内容で約半額。中間マージンがなくなるだけで、これだけの差が出ます。',
      },
      {
        heading: '3日で施工完了、2週間で次の入居者',
        text: '退去翌日に着工し、3日間で施工完了。アクセントクロスを1面追加する提案もさせていただき、元の見積もりより安く、かつ部屋の魅力もアップ。結果、2週間で次の入居者が決まりました。空室期間を最小限に抑えたことで、家賃ロスも最小限に。',
      },
      {
        heading: 'ポイント：分離発注は難しくない',
        text: '「管理会社を通さないと問題になるのでは？」という不安を持つオーナー様は多いですが、原状回復の業者選定はオーナー様の裁量であることがほとんどです。管理委託契約の内容にもよりますが、多くの場合、工事業者の指定はオーナー様の権利。不安な場合は契約書を確認するか、お気軽にご相談ください。',
      },
    ],
  },
  {
    slug: 'accent-cross-value-up',
    title: 'アクセントクロスで空室対策 — 低コストで「選ばれる部屋」にする方法',
    category: 'column',
    date: '2026-03-28',
    thumbnail: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=960&q=80',
    excerpt: '原状回復のついでにアクセントクロスを1面追加するだけ。低コストで入居率を上げるバリューアップ術を解説します。',
    tags: ['アクセントクロス', '空室対策', 'バリューアップ', '賃貸経営'],
    metaDescription: 'アクセントクロスで賃貸物件の空室対策。1面追加するだけで部屋の印象が激変。費用対効果の高いバリューアップ方法を解説。',
    keywords: ['アクセントクロス', '空室対策', 'バリューアップ', '賃貸'],
    leadText: '「ただ元に戻す」だけの原状回復では、築年数が経った物件は競争力を失います。一面だけ色を変えるアクセントクロスは、低コストで部屋の印象を劇的に変える最強の武器です。',
    sections: [
      {
        heading: 'なぜアクセントクロスが効くのか',
        text: '賃貸サイトで物件を探すとき、入居希望者が最初に見るのは写真です。白い壁だけの部屋は、どの物件も同じに見えてしまいます。アクセントクロスを1面入れるだけで、写真映えが格段にアップ。「おしゃれな部屋」という印象が、内見率・成約率を大きく左右します。',
      },
      {
        heading: '費用は㎡1,400円〜',
        text: 'アクセントクロスの施工費は㎡1,400円〜。6畳の一面（約8㎡）なら12,000円程度。原状回復の際に一緒に施工すれば、追加の手間もほぼかかりません。この投資で空室期間が1ヶ月短縮できれば、家賃収入で十分にペイできます。',
      },
      {
        heading: 'おすすめのカラー選び',
        text: 'ターゲットによってカラーを選ぶのがポイント。単身向けならグレー系やネイビー系でスタイリッシュに。ファミリー向けならグリーン系やベージュ系で温かみのある印象に。どの色を選べば良いか迷う場合は、ご相談ください。物件の特性に合わせて提案させていただきます。',
      },
    ],
  },
];

export function getAllArticles(): Article[] {
  return articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getArticlesByCategory(category: ArticleCategory): Article[] {
  return articles.filter((a) => a.category === category).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
