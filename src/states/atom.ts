import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "bookmark-persist",
  storage: typeof window === "undefined" ? undefined : sessionStorage,
});

export const bookmark = atom({
  key: "bookmark",
  default: {},
  effects_UNSTABLE: [persistAtom],
});
