<template>
  <div class="search-bar-container">
    <input
      type="text"
      v-model="search"
      v-on:input="computeSuggestions()"
      placeholder="Search dictionary"
      class="search-bar"
    />
    <div class="suggestions" v-show="showSuggestions">
      <ul>
        <li
          v-for="(suggestion, index) in suggestions"
          :key="index"
          @click="suggestionClicked(index)"
        >
          {{ suggestion }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import client from 'api-client'

export default {
  data () {
    return {
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
          if (self.suggestions.length == 0) {
            self.showSuggestions = false
          } else {
            self.showSuggestions = true
          }
        })
    },
    suggestionClicked (index) {
      this.search = this.suggestions[index]
      this.suggestions = []
      this.showSuggestions = false
    }
  }
}
</script>

<style scoped>

.search-bar-container {
  width: 100%;
  position: relative;
}

.search-bar {
  font-size: 16px;
  line-height: 44px;
  color: #757575;
  height: 44px;
  border-radius: 10px;
  border: 1px solid lightgray;
  box-shadow: 0 0 10px #eceaea;
  margin: auto 0;
  overflow: hidden;
  padding-inline-start: 44px;
  right: 44px;
  left: 0;
  top: 0;
  bottom: 0;
  text-align: initial;
  text-overflow: ellipsis;
  vertical-align: middle;
  width:50%;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.suggestions {
  min-height: 44px;
  max-height: 300px;
  border: 1px solid lightgray;
  position:relative;
  background: #fff;
  border-radius: 10px;
  left: 0;
  right: 0;
  width:50%;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;

}

.suggestions ul {
  list-style-type: none;
  text-align: left;
  padding-left: none;
  left: 0;

}

.suggestions ul li {
  border-bottom: 1px solid lightgray;
  padding: 10px;
  cursor: pointer;
  pointer-events: auto;
  text-align: left;
  bottom: 0;
  color: rgb(41, 40, 40);
  font-size: 16px;
  left: 0;
}

.suggestions ul li:hover {
  background-color: #eeeded

}
</style>
