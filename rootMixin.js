export let copyrightEnable = undefined;

export default {
  // data: () => ({
  // }),

  // data () {
  //   return {
  //   }
  // },

  created () {
  },

  watch: {
  },

  updated () {
    copyrightEnable = this.$frontmatter.copyright;
  },

  beforeDestory () {
  },
}
