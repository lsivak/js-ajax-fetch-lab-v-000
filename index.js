const userName = 'lsivak'
const baseApi = 'https://api.github.com/'
const fork = `${userName}/javascript-fetch-lab`
const reps = 'learn-co-curriculum/javascript-fetch-lab'

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
    const postData = {
  body: showForkedRepo(repo)
};

  fetch(`https://api.github.com/repos/${reps}/forks`, {
    method: 'POST',
    body: JSON.stringify(showForkedRepo(repo)),
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => console.log(json));
}
function showForkedRepo(repo) {
  let repo = `${baseApi}repos/${reps}/forks`
  $('#results').append(repo)
}

function getToken() {

  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
