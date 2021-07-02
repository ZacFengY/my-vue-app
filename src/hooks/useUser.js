import { reactive } from 'vue'
import { getCurrentUser } from '../services/userData'

export default function useUser() {
  const state = reactive({
    loading: false,
    user: {
      name: '',
    },
    userList: [],
  })

  /** get current user for first */
  const getUser = () => {
    state.loading = true
    getCurrentUser()
      .then(res => {
        console.log(res)
        const { data } = res
        state.loading = false
        state.user.name = data.name
      })
      .catch(() => {
        state.loading = false
      })
  }

  return { state, getUser }
}
