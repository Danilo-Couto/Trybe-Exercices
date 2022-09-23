// githubApi.test.js

const fetch = require('node-fetch');

const url = 'https://api.github.com/orgs/tryber/repos';

const getRepos = (url) => (
  fetch(url)
    .then((response) => response.json())
    .then((data) => data.map((repo) => repo.name))
);

// implemente seus testes aqui

it('gets a list of repositories names', async () => {

    const data = await getRepos(url);
    expect(data).toContain('sd-01-week4-5-project-todo-list' && 'sd-01-week4-5-project-meme-generator');
});
