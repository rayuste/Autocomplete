<template>
  <div class="search-bar">
    <input
      type="text"
      v-model="search"
      v-on:input="computeSuggestions()"
      placeholder="Search dictionary"
      class="bar"
    />
    <ul class="suggestions">
      <li
        v-for="(suggestion, index) in suggestions"
        :key="index"
        class="single-suggestion"
      >
        <h1>{{ suggestion }}</h1>
      </li>
    </ul>
  </div>
</template>

<script>
import client from 'api-client'

export default {
  data () {
    return {
      loading: false,
      search: '',
      suggestions: []
    }
  },

  methods: {
    computeSuggestions () {
      var self = this
      return client
        .fetchSuggestions(this.search)
        .then(suggestions => {
          self.suggestions = suggestions.data
        })
    }
  },

  created () {
    this.loading = true
  }
}
</script>

<style scoped>
.bar {
  list-style: none;
  text-align: left;
}

.single-suggestion {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}
</style>
