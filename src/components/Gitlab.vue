<template>
  <div id="app">
    <div class="tagging col-6">
      <b-form-select v-model="selected" default=0 class="m-md-2" v-bind:onchange="this.getDiff()">
        <option :value="0" disabled>-- Please select an option --</option>
        <template v-for="item in tags">
          <option :value=item.name :id="'id_' + item.name">{{ item.name }}</option>
        </template>
      </b-form-select>
    </div>

    <p hidden id="selDiff">{{ selected }}</p>
    <ul>
        <div class="commits">
          <li v-for="diff in diffs">
            <a v-bind:href="'http://mintgitlab.syngentaaws.org/mint/material/commits/' + diff.short_id" class="commit">{{ diff.short_id }}</a>
            - <span class="message">{{ diff.title }}</span><br> <span class="message">{{ diff.message }}</span><br>
            by <span class="author"><a :href="diff.author_name" target="_blank">{{ diff.author_name }}</a></span>
            at <span class="date">{{ diff.committed_date }}</span>
          </li>
        </div>
      </ul>
    <h1>Latest Commits</h1>
    <p>commits@{{ currentBranch }}</p>
    <ul>
      <div class="commits">
      <li v-for="record in commits">
        <a v-bind:href="'http://mintgitlab.syngentaaws.org/mint/material/commits/' + record.id" class="commit">{{ record.id.slice(0, 7) }}</a>
        - <span class="message">{{ record.message }}</span><br>
        by <span class="author"><a :href="record.author_name" target="_blank">{{ record.author_name }}</a></span>
        at <span class="date">{{ record.committed_date | formatDate }}</span>
      </li>
      </div>
    </ul>
  </div>
</template>

<script>

var baseUrl = 'http://mintgitlab.syngentaaws.org/api/v4/'
var apiRepo = baseUrl + 'projects/14/repository'
var apiBranches = apiRepo + 'branches/'
var apiCommits = apiRepo + 'commits?ref_name=master'
var apiDiff = apiRepo + 'compare?'
var apiTags = apiRepo + 'tags'

var privateToken = process.env.PRIVATE_GITLAB_TOKEN || '717fS7TC2Kok21shE9VB'

module.exports = {
  data: function () {
    return {
      branches: [{name: 'master'}],
      currentBranch: 'master',
      commits: null,
      selected: 0,
      tags: null,
      diffs: null
    }
  },

  created: function () {
    this.fetchData()
    this.getCommits()
    this.getTags()
  },

  watch: {
  },

  filters: {
    truncate: function (v) {
      var newline = v.indexOf('\n')
      return newline > 0 ? v.slice(0, newline) : v
    },
    formatDate: function (v) {
      return v.replace(/[T]/, ' ')
    }
  },

  methods: {
    fetchData: function () {
      var xhr = new XMLHttpRequest()
      xhr.open('GET', apiBranches)
      xhr.setRequestHeader('PRIVATE-TOKEN', privateToken)
      xhr.onload = function () {
        var response = JSON.parse(xhr.responseText)
        this.branches = response.sort()
      }
      xhr.send()
    },
    getCommits: function () {
      var xhr = new XMLHttpRequest()
      xhr.open('GET', apiCommits)
      xhr.setRequestHeader('PRIVATE-TOKEN', privateToken)
      xhr.onload = function () {
        console.log(JSON.parse(xhr.responseText))
        this.commits = JSON.parse(xhr.responseText).slice(0, 4)
      }
      xhr.send()
    },
    getDiff: function () {
      if (this.selected === 0) {
        return
      }
      var xhr = new XMLHttpRequest()
      console.log(this.selected)
      console.log('Release the diff')
      xhr.open('GET', apiDiff + 'from=' + this.selected + '&to=master')
      xhr.setRequestHeader('PRIVATE-TOKEN', privateToken)
      xhr.onload = function () {
        this.diffs = JSON.parse(xhr.responseText)
        // var response = JSON.parse(xhr.responseText)
        // self.diffs = response.commits
        console.log(self.diffs)
      }
      xhr.send()
    },
    getTags: function () {
      var xhr = new XMLHttpRequest()
      console.log('Release the gitlab')
      xhr.open('GET', apiTags)
      xhr.setRequestHeader('PRIVATE-TOKEN', privateToken)
      xhr.onload = function () {
        console.log(JSON.parse(xhr.responseText))
        this.tags = JSON.parse(xhr.responseText)
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
  div {
    padding:5px;
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
  .commits {
    font-size:12px;
  }
  th {
    padding:5px;
    text-align:center;
  }
  td {
    column-width: max-content;
    padding:5px;
    text-align:center;
  }
</style>

