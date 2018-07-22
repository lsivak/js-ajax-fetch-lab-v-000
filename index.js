const userName = 'lsivak'
const baseApi = 'https://api.github.com/'
const fork = `${username}/learn-co-curriculum/javascript-fetch-lab'`

function getIssues() {
}

function showIssues(json) {
}

function createIssue() {
}

function showResults(json) {
}

Repo.prototype.template = function(){
  var template = `<h3>Forked Successfully!</h3><a href="${this.url}"> ${this.url}</a>`
  return template;
};

function forkRepo() {
      const token = ' da4f675e128aa66a149793db2bead57d6c6490a6';
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch('https://api.github.com/repos/lsivak/learn-co-curriculum/javascript-fetch-lab', {
    method: 'POST'
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(resp => {
    let repo = new Repo(resp);
    showForkedRepo(repo);
  })
}

function showForkedRepo(repo) {
  $('#results').append(repo)
}

function getToken() {

  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
