import { Block, PartialBlock } from "@blocknote/core";

export async function saveToStorage(contentTitle: string, jsonBlocks: Block[]) {
  // Save contents to local storage. You might want to debounce this or replace
  // with a call to your API / database.
  localStorage.setItem("editorContentTitle", contentTitle);
  localStorage.setItem("editorContent", JSON.stringify(jsonBlocks));
}

export async function loadFromStorage(): Promise<
  [string | null, PartialBlock[]] | undefined
> {
  // Gets the previously stored editor contents.
  const storageTitle = localStorage.getItem("editorContentTitle");
  const storageString = localStorage.getItem("editorContent");
  return storageString
    ? [storageTitle, JSON.parse(storageString) as PartialBlock[]]
    : undefined;
}
