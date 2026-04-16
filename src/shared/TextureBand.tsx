interface TextureBandProps {
  src: string;
  height?: number;
  padding?: string;
  /** 彩度を落とす（グレースケール化）。デフォルト true */
  desaturate?: boolean;
  /** 濃度（0〜1）。デフォルト 1 */
  opacity?: number;
}

/**
 * ページ間の視覚的リセットに使う横長のテクスチャ帯。
 * kiokuso の shared/TextureBand を満室用に移植。
 */
export default function TextureBand({
  src,
  height = 180,
  padding = "32px 0",
  desaturate = true,
  opacity = 1,
}: TextureBandProps) {
  return (
    <div style={{ padding }}>
      <div
        style={{
          height,
          backgroundImage: `url('${src}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: desaturate ? "grayscale(100%)" : undefined,
          opacity,
        }}
      />
    </div>
  );
}
