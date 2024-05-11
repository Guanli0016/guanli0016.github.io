// 复制文本到剪切板
export const copyToClipboard = ( text: string ): Promise<void> => {
    const callback = ( resolve, reject ) => {
        let textarea: HTMLTextAreaElement = document.createElement("textarea");
        textarea.setAttribute("style", "position: absolute");
		textarea.setAttribute("style", "top: -100px");
		textarea.setAttribute("style", "left: -100px");
        document.getElementsByTagName("body")[0].appendChild(textarea);
        textarea.value = text;
		textarea.select();
		document.execCommand("copy");
		document.getElementsByTagName("body")[0].removeChild(textarea);
        resolve();
    }
    return new Promise(callback);
}