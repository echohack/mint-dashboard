<template>
  <div id="app">
    <h1>Latest Commits</h1>
    <template v-for="branch in branches">
      <input type="radio"
        :id="branch"
        :value="branch"
        name="branch"
        v-model="currentBranch">
      <label :for="branch">{{ branch }}</label>
    </template>
    <p>commits@{{ currentBranch }}</p>
    <ul>
      <li v-for="record in commits">
        <a :href="record.html_url" target="_blank" class="commit">{{ record.sha.slice(0, 7) }}</a>
        - <span class="message">{{ record.commit.message | truncate }}</span><br>
        by <span class="author"><a :href="record.author.html_url" target="_blank">{{ record.commit.author.name }}</a></span>
        at <span class="date">{{ record.commit.author.date | formatDate }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
var apiURL = 'https://api.github.com/repos/echohack/sample-node-app/commits?per_page=10&sha='

module.exports = {
  data: function() {
    return {
      branches: ['master', 'dev'],
      currentBranch: 'master',
      commits: null
    }
  },

  created: function () {
    this.fetchData()
  },

  watch: {
    currentBranch: 'fetchData'
  },

  filters: {
    truncate: function (v) {
      var newline = v.indexOf('\n')
      return newline > 0 ? v.slice(0, newline) : v
    },
    formatDate: function (v) {
      return v.replace(/T|Z/g, ' ')
    }
  },

  methods: {
    fetchData: function () {
      var xhr = new XMLHttpRequest()
      var self = this
      xhr.open('GET', apiURL + self.currentBranch)
      xhr.onload = function () {
        self.commits = JSON.parse(xhr.responseText)
        console.log(self.commits[0].html_url)
      }
      xhr.send()
    }
  }
}
</script>

<style>
  #app {
    font-family: 'Helvetica', Arial, sans-serif;
  }
  a {
    text-decoration: none;
    color: #f66;
  }
  li {
    line-height: 1.5em;
    margin-bottom: 20px;
  }
  .author, .date {
    font-weight: bold;
  }
</style>