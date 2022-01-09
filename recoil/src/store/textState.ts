import { atom, selector } from "recoil";

export const textState = atom({
  key: "textState",
  default: "",
});

export const charCounterState = selector({
  key: "charCounterState",
  get: ({ get }) => {
    const text = get(textState);

    return text.length;
  },
});
