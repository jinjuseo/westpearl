import { toast } from "react-toastify";

export const onClickCopy = (text: string) => {
  navigator.clipboard.writeText(text);
  toastify("복사되었습니다.");
};

export const openNewTab = (link: string) => {
  window.open(link, "_blank");
};

export const toastify = (text: string) => {
  toast(text, {
    progressClassName: "fancy-progress-bar",
    position: "top-right",
  });
};
