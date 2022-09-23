import requests


# Para simplificar, carregamos o token pessoal de acesso do github a partir
# de um arquivo. O token deve estar sozinho, sem espaços nem quebra de linha.
TOKEN_FILE = 'token.txt'

with open(TOKEN_FILE) as file:
    HEADERS = {'Authorization': 'token ' + file.read()}


def get_repo_branches(repo_path):
    res = requests.get(
        f"https://api.github.com/repos/{repo_path}/branches", headers=HEADERS)

    try:
        return [branch["name"] for branch in res.json()]
    except TypeError as e:
        print(res.json())
        raise e


def get_commit_messages(repo_path, branch):
    res = requests.get(
        f"https://api.github.com/repos/{repo_path}/commits?sha={branch}",
        headers=HEADERS
    )
    return [commit["commit"]["message"] for commit in res.json()]


if __name__ == "__main__":
    response = requests.get('https://api.github.com/user', headers=HEADERS)
    response.raise_for_status()

    user = response.json()
    print(f"Logged username: {user['login']}")

    repos = [
        'tryber/sd-016-a-project-job-insights',
        'tryber/sd-016-b-project-job-insights',
    ]

    commit_messages = []
    for repo in repos:
        print(f"Getting branches from {repo}")
        branches = get_repo_branches(repo)

        for branch in branches:
            commit_messages.extend(
                get_commit_messages(repo, branch)
            )
            print(f" Got {branch }")

    with open('output/commits.txt', 'w') as file:
        result_string = "\n".join(commit_messages)
        print(result_string, file=file)
