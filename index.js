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
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch('https://api.github.com/repos/learn-co-curriculum/javascript-fetch-lab', {
    method: 'POST'
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => console.log(json));
}

function getToken() {

  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
