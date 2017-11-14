<template>
  <div id="app">
    <h1>Latest Commits</h1>
    <div>
      <b-dropdown variant="primary" id="ddown1" text="Dropdown Button" class="m-md-2" event="getCommits('master')">
        <template v-for="branch in branches">
          <b-dropdown-item>{{ branch.name }}</b-dropdown-item>
        </template>
      </b-dropdown>
    </div>
    <p>commits@{{ currentBranch }}</p>
    <ul>
      <li v-for="record in commits">
        <v-if="record.pushed_data.ref === branches.branch.name"
        <a :href="record.html_url" target="_blank" class="commit">{{ record.sha.slice(0, 7) }}</a>
        - <span class="message">{{ record.commit.message | truncate }}</span><br>
        by <span class="author"><a :href="record.author.html_url" target="_blank">{{ record.commit.author.name }}</a></span>
        at <span class="date">{{ record.commit.author.date | formatDate }}</span>
        <v-else></v-else>
      </li>
    </ul>
  </div>
</template>

<script>
var apiURL = 'http://mintgitlab.syngentaaws.org/api/v4/projects/14/repository/branches/'

var api2Url = 'http://mintgitlab.syngentaaws.org/api/v4/projects/14/events&target_type=merged'
module.exports = {
  data: function () {
    return {
      branches: [{name: 'master'}],
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
      xhr.open('GET', apiURL)
      xhr.setRequestHeader('PRIVATE-TOKEN', '717fS7TC2Kok21shE9VB')
      xhr.onload = function () {
        self.branches = JSON.parse(xhr.responseText)
      }
      xhr.send()
    },
    getCommits: function (branch) {
      var xhr = new XMLHttpRequest()
      var self = this
      xhr.open('GET', api2Url)
      xhr.setRequestHeader('PRIVATE-TOKEN', '717fS7TC2Kok21shE9VB')
      xhr.onload = function () {
        self.commits = JSON.parse(xhr.responseText)
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

