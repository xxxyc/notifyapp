<template>
  <div id="app">
    <button style="padding-top: 400px;" @click="test">as</button>
  </div>
</template>

<script>
import Xnotify from '@/lib/index';
export default {
  methods: {
    test() {
      Xnotify({title:"hhhhhhhjjj", text: "jafkjdkafjkfjkajdfkjkadjfkjakdfjkdajfkjdkjffadfaf的说法"})
    }
  }
}
</script>
