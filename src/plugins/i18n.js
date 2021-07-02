import enLocale from 'element-plus/lib/locale/lang/en'
import zhLocale from 'element-plus/lib/locale/lang/zh-cn'
import jaLocale from 'element-plus/lib/locale/lang/ja'
import en from '@/locales/en.js'
import zh from '@/locales/zh.js'
import ja from '@/locales/ja.js'
import { createI18n } from 'vue-i18n'

const messages = {
  [zhLocale.name]: {
    // zh-cn
    el: zhLocale.el,
    // 定义您自己的字典，但是请不要和 `el` 重复，这样会导致 ElementPlus 内部组件的翻译失效.
    message: zh,
  },
  [enLocale.name]: {
    // en
    // el 这个属性很关键，一定要保证有这个属性，
    el: enLocale.el,
    // 定义您自己的字典，但是请不要和 `el` 重复，这样会导致 ElementPlus 内部组件的翻译失效.
    message: en,
  },
  [jaLocale.name]: {
    // ja
    el: jaLocale.el,
    message: ja,
    // 没有定义 message 字段，会 fallback 回到 zh-cn 去, fallbackLocale 的定义在下方 👇
  },
}

const i18n = createI18n({
  // legacy: false,
  locale: zhLocale.name,
  fallbackLocale: zhLocale.name,
  messages,
})

export default i18n
