const userName = 'lsivak'
const baseApi = 'https://api.github.com/'
const fork = `${userName}/javascript-fetch-lab`
const reps = 'learn-co-curriculum/javascript-fetch-lab'
  let repo = `${baseApi}repos/${reps}/forks`
function getIssues() {
}

function showIssues(json) {
}

function createIssue() {
}

function showResults(json) {
}

function forkRepo() {
    const token = ' da4f675e128aa66a149793db2bead57d6c6490a6';

  fetch(`https://api.github.com/repos/${reps}/forks`, {
    method: POST,

    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json(showForkedRepo(repo))).then(json => console.log(json));
}
function showForkedRepo(repo) {
  $("#results").html(repo)
}

function getToken() {

  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
