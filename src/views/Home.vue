<template>
  <div class="home">
    <kopet v-model="search" />
    {{ state.status }} <br />{{ search }} <br />
    X: {{ jembud }}
    <h2 @click="tambah">{{ state.count }}</h2>
    {{ state.doubleValue }}
    <br />
    crot: {{ state.crot }}
  </div>
</template>

<script>
import kopet from './kopet'
import store from '../store/wedus'

import {
  reactive,
  watchEffect,
  onMounted,
  computed,
  toRefs
} from '@vue/composition-api'

export default {
  setup() {
    const state = reactive({
      count: 0,
      crot: store.state.wedus,
      status: 'asu',
      doubleValue: computed(() => state.count * 2)
    })

    function tambah() {
      state.count++
      store.commit('crot', state.count++)
    }

    function welcomeMessage() {
      state.status = 'Counter Loaded'
    }

    watchEffect(() => {
      console.log('gembus', state.count)
    })

    onMounted(() => welcomeMessage())

    // iki independent
    const tasksData = reactive({
      search: 'jancuk',
      jembud: computed(() => {
        return tasksData.search + ' / ngising bro'
      })
    })

    return {
      state,
      tambah,
      ...toRefs(tasksData)
    }
  },
  components: { kopet }
}
</script>
