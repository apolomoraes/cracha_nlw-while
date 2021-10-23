const LinksSocialMedia = {
  github: 'apolomoraes',
  facebook: 'apolo.moraisdesouza',
  instagram: 'apolo_moraes',
  twitter: 'ApoloMoraes1'
}

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      UserImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
