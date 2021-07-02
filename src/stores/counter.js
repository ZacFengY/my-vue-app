/**  vuex example */
/**  for simple, i use the 'pinia' library manage data status  */

// import { createStore } from 'vuex'

// const store = createStore({
//   state: {
//     count: 0,
//   },
// })

// export default store

import { defineStore } from 'pinia'

const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({ count: 0 }),

  /** could also be defined as below */
  // state() {
  //   return { count: 0 }
  // },
})

export default useCounterStore
