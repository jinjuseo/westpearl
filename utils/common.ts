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

export const downloadFile = (href: string, fname: string) => {
  const link = document.createElement("a");
  link.href = href; // 예: '/files/sample.txt'
  link.download = fname; // 다운로드될 파일 이름
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
