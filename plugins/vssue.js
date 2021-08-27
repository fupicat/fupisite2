import Vue from 'vue'
import Vssue from 'vssue'
import GithubV3 from '@vssue/api-github-v3'
import 'vssue/dist/vssue.css'

Vue.use(Vssue, {
  api: GithubV3,
  owner: 'fupicat',
  repo: 'fupisite2-vssue',
  clientId: '95b810eb0b8eed02b90f',
  clientSecret: '594540e84a33eb25875d5352e6b0330adcfcb17a',
})
