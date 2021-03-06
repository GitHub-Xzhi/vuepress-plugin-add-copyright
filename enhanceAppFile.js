const rootMixin = require("./rootMixin.js");

export default () => {

  setTimeout(() => {
    try {
      // 对document的判断是防止编译的时候报错
      document && (() => {
        function addCopy(e) {
          if (disabled) {
            return;
          }
          let copyTxt = "";
          // 取消默认的复制事件
          e.preventDefault();
          const enable = rootMixin.copyrightEnable;
          copyTxt = window.getSelection(0).toString();
          const copyTxtLength = copyTxt.length;
          const thanMinLength = copyTxtLength > minLength;
          const webLink = `${window.location.href}`;
          let copyrightContent = `${authorNameTag}${authorName}\n${webLinkTag}${webLink}\n${statement}`;
          let boundaryContent = boundary;
          if (boundary !== '\n') {
            boundaryContent = `\n${boundaryContent}\n`;
          }
          if (allCustom !== '') {
            copyrightContent = allCustom.replace(/#{webLink}/g, `${webLink}`)
          }
          if (thanMinLength && (enable === undefined || enable)) {
            if (copyrightLoca === 'before') {
              copyTxt = `${copyrightContent}${boundaryContent}${copyTxt}`;
            } else {
              copyTxt = `${copyTxt}${boundaryContent}${copyrightContent}`;
            }
          }
          const clipboardData = e.clipboardData || window.clipboardData;
          if (thanMinLength && noCopy) {
            e.preventDefault();
          } else {
            clipboardData.setData('text', copyTxt);
          }
        }

        document.addEventListener("cut", e => {
          addCopy(e)
        });
        document.addEventListener("copy", e => {
          addCopy(e)
        });
      })()
    } catch (e) {
      // console.error(e.message)
    }
  }, 500)
}
