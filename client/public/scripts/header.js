const header = document.querySelector('header')

const nav = document.createElement('nav')

const title = document.createElement('h1')
title.textContent = 'Avalon Role Guide'

const homeLink = document.createElement('a')
homeLink.textContent = 'Home'
homeLink.href = '/'
homeLink.setAttribute('role', 'button')

nav.appendChild(title)
nav.appendChild(homeLink)

header.appendChild(nav)