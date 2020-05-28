<template>
  <div class="kopet">
    This is an kopet page
    <input
      type="text"
      @input="input($event.target.value)"
      placeholder="Searching task..."
    />
    crot wedus: {{ crotz.wedus }} - {{ crotz.kebo }}

    <br /><br /><br />
  </div>
</template>
<script>
import { reactive, computed } from '@vue/composition-api'
import store from '../store/wedus'

export default {
  setup: function(props, context) {
    function input(value) {
      context.emit('input', value)
    }

    const crotz = reactive({
      wedus: store.state.wedus,
      kebo: computed(() => store.state.wedus)
    })
    return { input, crotz }
  }
}
</script>
