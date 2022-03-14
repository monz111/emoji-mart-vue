<template>
  <component
    :is="tag"
    v-if="view.canRender"
    :title="view.title"
    :aria-label="view.ariaLabel"
    :data-title="title"
    class="emoji-mart-emoji"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
    @click="onClick"
  >
    <img :src="this.imageUrl" width="40" />
  </component>
</template>

<script>
import { EmojiProps } from '../utils/shared-props'
import { EmojiView } from '../utils/emoji-data'

export default {
  props: {
    ...EmojiProps,
    data: {
      type: Object,
      required: true,
    },
  },
  computed: {
    view() {
      return new EmojiView(
        this.emojiObject,
        this.skin,
        this.set,
        this.native,
        this.fallback,
        this.tooltip,
        this.size,
      )
    },
    imageUrl() {
      return `https://cdnjs.cloudflare.com/ajax/libs/emoji-datasource-apple/7.0.2/img/apple/64/${this.emoji.unified}.png`
    },
    sanitizedData() {
      return this.emojiObject._sanitized
    },
    title() {
      return this.tooltip ? this.emojiObject.short_name : null
    },
    emojiObject() {
      if (typeof this.emoji == 'string') {
        return this.data.findEmoji(this.emoji)
      } else {
        return this.emoji
      }
    },
  },
  methods: {
    onClick() {
      this.$emit('click', this.emojiObject)
    },
    onMouseEnter() {
      this.$emit('mouseenter', this.emojiObject)
    },
    onMouseLeave() {
      this.$emit('mouseleave', this.emojiObject)
    },
  },
}
</script>
