<template>
  <div>This is test page.</div>
  <div>
    {{ t('message.hello') }}
  </div>
  <div>
    <el-select v-model="locale">
      <el-option
        v-for="item in data.i18n"
        :key="item.value"
        :label="item.label"
        :value="item.value"
        :disabled="item.disabled"
      >
      </el-option>
    </el-select>
  </div>
  <div>
    <!-- count is: {{ $store.state.count }}  -->
    count of pinia store is: {{ counter.count }}
    <el-button @click="plus">+</el-button>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useI18n } from 'vue-i18n'
// import { useStore } from 'vuex'
import useUser from 'hooks/useUser'
import useCounterStore from 'stores/counter'

const { locale, t } = useI18n()
// const store = useStore()
const { state, getUser } = useUser()
const counter = useCounterStore()

const user = getUser()

const plus = () => {
  // store.state.count++
  /** i like this style of writing, it like setState of react  */
  counter.$patch({ count: counter.count + 1 })
  /** or */
  // counter.count ++
}

const data = reactive({
  i18n: [
    {
      value: 'zh-cn',
      label: 'zh',
    },
    {
      value: 'en',
      label: 'en',
    },
    {
      value: 'ja',
      label: 'ja',
    },
  ],
})
</script>

<style>
</style>