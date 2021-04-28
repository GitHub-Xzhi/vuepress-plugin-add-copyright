const path = require("path");

module.exports = (options, context) => ({
  name: 'vuepress-plugin-add-copyright',
  define() {
    return {
      // 是否禁用该插件的功能
      disabled: options.disabled || false,
      // 版权信息的位置，可选项[before | after]。before：版权信息放在复制文本的前面。after：与before相反。
      copyrightLoca: options.copyrightLoca || 'after',
      // 是否禁止复制
      noCopy: options.noCopy || false,
      // 触发版权信息或 noCopy 效果的最小的复制文本长度
      minLength: options.minLength || 100,
      // 作者名称
      authorName: options.authorName || 'Xzhi',
      // 版权声明内容
      statement: options.statement || '著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。',
      // 全自定义（权限比较大），#{webLink}是网页链接的占位符
      allCustom: options.allCustom || '',
      // 作者名称标签
      authorNameTag: options.authorNameTag || '作者：',
      // 网页链接标签
      webLinkTag: options.webLinkTag || '原文：',
    };
  },
  enhanceAppFiles: path.resolve(__dirname, "enhanceAppFile.js"),
  clientRootMixin: path.resolve(__dirname, 'rootMixin.js'),
});

