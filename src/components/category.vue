<template>
  <section
    :class="{
      'emoji-mart-category': true,
      'emoji-mart-no-results': !hasResults,
    }"
    :aria-label="i18n.categories[id]"
    v-if="isVisible && (isSearch || hasResults)"
  >
    <div class="emoji-mart-category-label">
      <h3 class="emoji-mart-category-label">{{ i18n.categories[id] }}</h3>
    </div>

    <template v-for="{ emojiObject, emojiView } in emojiObjects">
      <button
        v-if="emojiView.canRender"
        :aria-label="emojiView.ariaLabel"
        role="option"
        aria-selected="false"
        aria-posinset="1"
        aria-setsize="1812"
        type="button"
        :data-title="emojiObject.short_name"
        :key="emojiObject.id"
        :title="emojiView.title"
        class="emoji-mart-emoji"
        @mouseenter="emojiProps.onEnter(emojiView.getEmoji())"
        @mouseleave="emojiProps.onLeave(emojiView.getEmoji())"
        @click="emojiProps.onClick(emojiView.getEmoji())"
      >
         <img :src="imageUrl(emojiView.content)" width="27" height="27">
      </button>
    </template>

    <div v-if="!hasResults">
      <emoji
        :data="data"
        emoji="sleuth_or_spy"
        :native="emojiProps.native"
        :skin="emojiProps.skin"
        :set="emojiProps.set"
      />
      <div class="emoji-mart-no-results-label">{{ i18n.notfound }}</div>
    </div>
  </section>
</template>

<script>
import { EmojiView } from '../utils/emoji-data'
import Emoji from './Emoji.vue'

export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
    i18n: {
      type: Object,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    emojis: {
      type: Array,
    },
    emojiProps: {
      type: Object,
      required: true,
    },
  },
  computed: {
    isVisible() {
      return !!this.emojis
    },
    isSearch() {
      return this.name == 'Search'
    },
    hasResults() {
      return this.emojis.length > 0
    },
    emojiObjects() {
      return this.emojis.map((emoji) => {
        let emojiObject = this.emojiObject(emoji)
        if (['♀️','♂️', '⚕️'].includes(emojiObject.native)) return
        let emojiView = new EmojiView(
          emoji,
          this.emojiProps.skin,
          this.emojiProps.set,
          this.emojiProps.native,
          this.emojiProps.fallback,
          this.emojiProps.emojiTooltip,
          this.emojiProps.emojiSize,
        )
        return { emojiObject, emojiView }
      }).filter(x => x)
    },
  },
  components: {
    Emoji,
  },
  methods: {
    imageUrl(emoji) {
      if (!emoji) return ''
      const image = this.data.findEmoji(emoji).unified
      return `https://cdnjs.cloudflare.com/ajax/libs/emoji-datasource-apple/7.0.2/img/apple/64/${image}.png`
    },
    emojiObject(emoji) {
      if (typeof emoji == 'string') {
        return this.data.findEmoji(emoji)
      } else {
        return emoji
      }
    },
  }
}
</script>
