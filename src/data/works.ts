export interface WorkItem {
  slug: string;
  name: string;
  cost: string;
  period: string;
  type: string;
  area: string;
  beforeImg: string;
  afterImg: string;
  story: string;
  tags: string[];
  points?: string[];
}

export const allWorks: WorkItem[] = [
  {
    slug: "1k-taihaku",
    name: "1K・築18年アパート",
    cost: "¥105,000",
    period: "2日",
    type: "原状回復+アクセント",
    area: "仙台市太白区",
    beforeImg: "/images/m-before-3-sm.webp",
    afterImg: "/images/m-after-green-sm.webp",
    story: "築18年の1Kアパート。退去後の原状回復に合わせて、リビングの一面にグリーンのアクセントクロスを提案。白一色だった部屋に個性が生まれ、内見時の第一印象が大きく変わった。クロス張替えと合わせて2日で完了。入居募集から1週間で申し込みが入った。",
    tags: ["アクセントクロス", "原状回復", "1K", "築18年"],
    points: [
      "白い壁紙 → グリーンのアクセントクロスで差別化",
      "原状回復と同時施工でコスト削減",
      "2日で完了、すぐに入居募集へ",
      "内見1週間で申し込み獲得",
    ],
  },
  {
    slug: "1r-mansion",
    name: "ワンルーム・築22年マンション",
    cost: "¥88,000",
    period: "1日",
    type: "クロス張替え",
    area: "仙台市若林区",
    beforeImg: "/images/m-before-1-sm.webp",
    afterImg: "/images/m-after-pendant-sm.webp",
    story: "築22年のワンルームマンション。長年の入居で壁紙が汚れていたため全面張替え。天井にはペンダントライト用のフックを追加し、入居者が好みの照明を取り付けられるようにした。工事は1日で完了。バーチャルステージング画像をジモティに掲載したところ、広告費0円で3件の問い合わせが入った。",
    tags: ["クロス張替え", "ワンルーム", "1日施工", "バーチャルステージング"],
    points: [
      "全面クロス張替えで清潔感を回復",
      "ペンダントライト用フック追加でデザイン性向上",
      "バーチャルステージング画像で広告費0円集客",
      "ジモティ掲載から3件問い合わせ",
    ],
  },
  {
    slug: "2dk-miyagino",
    name: "2DK・築28年アパート",
    cost: "¥180,000",
    period: "3日",
    type: "全室クロス+CF張替え",
    area: "仙台市宮城野区",
    beforeImg: "/images/m-before-3-sm.webp",
    afterImg: "/images/m-after-green-sm.webp",
    story: "築28年の2DKアパート。3年間空室が続いていた物件。全室の壁紙をアイボリーに統一し、キッチンとDKにはCFシート（クッションフロア）を新調。和室の畳も表替えを実施。改修費18万円に対して、家賃を月5,000円アップして募集。1ヶ月で入居者が決まり、年間で6万円の増収。改修費は3年で回収できる計算。",
    tags: ["全室張替え", "CF", "2DK", "畳表替え", "空室3年"],
    points: [
      "3年間空室 → 改修後1ヶ月で入居決定",
      "改修費18万円 / 家賃アップ月5,000円 → 3年で回収",
      "全室壁紙+CF+畳の一括施工で割安に",
      "管理会社経由の半額以下で同等品質",
    ],
  },
  {
    slug: "1ldk-izumi",
    name: "1LDK・築15年アパート",
    cost: "¥135,000",
    period: "2日",
    type: "入居後リフォーム",
    area: "仙台市泉区",
    beforeImg: "/images/m-before-1-sm.webp",
    afterImg: "/images/m-after-pendant-sm.webp",
    story: "築15年の1LDKアパート。「入居後リフォーム」を初めて実施した物件。入居希望者にバーチャルステージング画像で4色の壁紙を提示。入居者がネイビーを選択し、入居日の2日前に施工完了。入居者は「自分で選んだ壁紙だから愛着がある」と話しており、現在2年目も継続入居中。",
    tags: ["入居後リフォーム", "1LDK", "アクセントクロス", "継続入居"],
    points: [
      "入居後リフォーム: 入居者が壁紙の色を選択",
      "バーチャルステージングで4色を事前提示",
      "入居日2日前に施工完了",
      "「自分の部屋」意識で2年目も継続入居",
    ],
  },
  {
    slug: "1k-tagajo",
    name: "1K・築30年アパート",
    cost: "¥72,000",
    period: "1日",
    type: "アクセントクロス+清掃",
    area: "多賀城市",
    beforeImg: "/images/m-before-3-sm.webp",
    afterImg: "/images/m-after-green-sm.webp",
    story: "築30年の1Kアパート。物件価格380万円で購入した投資物件。最低限の改修で入居者を確保するため、リビング1面のアクセントクロスとハウスクリーニングのみ実施。改修費7.2万円。家賃3.5万円で募集し、2週間で入居者決定。表面利回り11%を実現。",
    tags: ["アクセントクロス", "清掃", "1K", "築30年", "投資物件"],
    points: [
      "物件価格380万円 + 改修費7.2万円 = 総投資387万円",
      "家賃3.5万円 × 12ヶ月 = 年間42万円 → 利回り約11%",
      "最小改修で最大効果: アクセント1面+清掃のみ",
      "2週間で入居者決定",
    ],
  },
];

export function getWorkBySlug(slug: string): WorkItem | undefined {
  return allWorks.find((w) => w.slug === slug);
}
