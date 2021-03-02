
export interface GithubResponseObject {
  total_count: number
  incomplete_results: Boolean
  items: [GithubResponseObjectItemsType]
}

interface GithubUser {
  login: string
  id: number
  node_id: string
  avatar_url: string
  gravatar_id: any
  url: string
  html_url: string
  followers_url: string
  gists_url: string
  starred_url: string
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  events_url: string
  received_events_url: string
  type: string
  site_admin: Boolean
  score: number
}

interface GithubRepo {
  id: number
  node_id: string,
  name: string,
  full_name: string,
  private: Boolean,
  owner: GithubUser,
  html_url: string,
  description: string,
  fork: Boolean,
  url: string,
  forks_url: string,
  keys_url: string,
  collaborators_url: string,
  teams_url: string,
  hooks_url: string,
  issue_events_url: string,
  events_url: string,
  assignees_url: string,
  branches_url: string,
  tags_url: string,
  blobs_url: string,
  git_tags_url: string,
  git_refs_url: string,
  trees_url: string,
  statuses_url: string,
  languages_url: string,
  stargazers_url: string,
  contributors_url: string,
  subscribers_url: string,
  subscription_url: string,
  commits_url: string,
  git_commits_url: string,
  comments_url: string,
  issue_comment_url: string,
  contents_url: string,
  compare_url: string,
  merges_url: string,
  archive_url: string,
  downloads_url: string,
  issues_url: string,
  pulls_url: string,
  milestones_url: string,
  notifications_url: string,
  labels_url: string,
  releases_url: string,
  deployments_url: string,
  created_at: string,
  updated_at: string,
  pushed_at: string,
  git_url: string,
  ssh_url: string,
  clone_url: string,
  svn_url: string,
  homepage: string,
  size: number,
  stargazers_count: number,
  watchers_count: number,
  language: string,
  has_issues: Boolean,
  has_projects: Boolean,
  has_downloads: Boolean,
  has_wiki: Boolean,
  has_pages: Boolean,
  forks_count: number,
  mirror_url: any,
  archived: Boolean,
  disabled: Boolean,
  open_issues_count: number,
  license: GithubLicence,
  forks: number,
  open_issues: number,
  watchers: number,
  default_branch: string,
  score: number
}

interface GithubLicence {
  key: string,
  name: string,
  spdx_id: string,
  url: string,
  node_id: string
}

interface GithubIssue {
  url: string,
  repository_url: string,
  labels_url: string,
  comments_url: string,
  events_url: string,
  html_url: string,
  id: number,
  node_id: string,
  number: number,
  title: string,
  user: GithubUser
  labels: [],
  state: string,
  locked: Boolean,
  assignee: any,
  assignees: [],
  milestone: any,
  comments: number,
  created_at: string,
  updated_at: string,
  closed_at: any,
  author_association: string,
  active_lock_reason: any,
  body: string,
  performed_via_github_app: any,
  score: number
}


export type GithubResponseObjectItemsType = GithubIssue | GithubRepo | GithubUser;
