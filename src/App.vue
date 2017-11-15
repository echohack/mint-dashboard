<template>
  <div id="app">
    <h1>Latest Commits</h1>
    <div>
      <b-dropdown variant="primary" id="ddown1" text="Dropdown Button" class="m-md-2 btn-sm">
        <template v-for="branch in branches">
          <b-dropdown-item>{{ branch.name }}</b-dropdown-item>
        </template>
      </b-dropdown>
    </div>
    <p>commits@{{ currentBranch }}</p>
    <ul>
      <div class="pre-scrollable">
      <li v-for="record in commits">
        <a v-bind:href="'http://mintgitlab.syngentaaws.org/mint/material/commits/' + record.id" class="commit">{{ record.id.slice(0, 7) }}</a>
        - <span class="message">{{ record.message | truncate }}</span><br>
        by <span class="author"><a :href="record.author_name" target="_blank">{{ record.author_name }}</a></span>
        at <span class="date">{{ record.committed_date | formatDate }}</span>
      </li>
      </div>
    </ul>
  </div>
</template>

<script>
var apiURL = 'http://mintgitlab.syngentaaws.org/api/v4/projects/14/repository/branches/'
var api2Url = 'http://mintgitlab.syngentaaws.org/api/v4//projects/14/repository/commits?ref_name=master'
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
    this.getCommits()
  },

  watch: {
    currentBranch: 'getCommits("master")'
  },

  filters: {
    truncate: function (v) {
      var newline = v.indexOf('\n')
      return newline > 0 ? v.slice(0, newline) : v
    },
    formatDate: function (v) {
      return v.replace(/[T]/g, ' ')
    }
  },

  methods: {
    fetchData: function () {
      var xhr = new XMLHttpRequest()
      var self = this
      xhr.open('GET', apiURL)
      xhr.setRequestHeader('PRIVATE-TOKEN', '717fS7TC2Kok21shE9VB')
      xhr.onload = function () {
        var response = JSON.parse(xhr.responseText)
        self.branches = response.sort()
      }
      xhr.send()
    },
    getCommits: function () {
      var xhr = new XMLHttpRequest()
      var self = this
      console.log('Release the gitlab')
      xhr.open('GET', api2Url)
      xhr.setRequestHeader('PRIVATE-TOKEN', '717fS7TC2Kok21shE9VB')
      xhr.onload = function () {
        console.log(JSON.parse(xhr.responseText))
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
  .scrollable {
    height: auto;
    width:100px;
    max-height: 200px;
    overflow-x: hidden;
  }
</style>

