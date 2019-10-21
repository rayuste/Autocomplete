import axios from 'axios'

export default {
  fetchSuggestions(word) {
    return axios
      .get('https://mock-autocomplete.herokuapp.com/autocomplete?q=' + word)
      .then(response => response.data)
  }
}
