import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ページ遷移ごとにスクロール位置を一番上に戻す。
 * BrowserRouter 内のどこか 1 箇所にマウントする。
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
  }, [pathname]);
  return null;
}
