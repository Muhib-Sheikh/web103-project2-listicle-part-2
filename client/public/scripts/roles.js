const renderRoles = async () => {
    const response = await fetch('/roles')
    const data = await response.json()

    const mainContent = document.getElementById('main-content')

    if (data && data.length > 0) {
        const intro = document.createElement('section')
        intro.className = 'page-intro'

        const heading = document.createElement('h2')
        heading.textContent = 'Characters of The Resistance: Avalon'

        const introText = document.createElement('p')
        introText.textContent =
            'Explore the Good and Evil roles in Avalon, their abilities, and how they affect the game.'

        intro.appendChild(heading)
        intro.appendChild(introText)
        mainContent.appendChild(intro)

        const roleGrid = document.createElement('section')
        roleGrid.className = 'role-grid'

        data.forEach(role => {
            const card = document.createElement('article')
            card.className = 'role-card'

            if (role.allegiance === 'Good') {
                card.classList.add('good-role')
            } else {
                card.classList.add('evil-role')
            }

            const image = document.createElement('img')
            image.src = role.image
            image.alt = `${role.name} card`

            const name = document.createElement('h3')
            name.textContent = role.name

            const allegiance = document.createElement('p')
            allegiance.textContent = `Allegiance: ${role.allegiance}`

            const roleType = document.createElement('p')
            roleType.textContent = `Role Type: ${role.roleType}`

            const cardText = document.createElement('p')
            cardText.textContent = role.cardText

            const link = document.createElement('a')
            link.textContent = 'View Role'
            link.href = `/roles/${role.slug}`
            link.setAttribute('role', 'button')

            card.appendChild(image)
            card.appendChild(name)
            card.appendChild(allegiance)
            card.appendChild(roleType)
            card.appendChild(cardText)
            card.appendChild(link)

            roleGrid.appendChild(card)
        })

        mainContent.appendChild(roleGrid)
    } else {
        const message = document.createElement('h2')
        message.textContent = 'No Roles Available'
        mainContent.appendChild(message)
    }
}

const requestedPath = window.location.pathname

if (requestedPath === '/' || requestedPath === '/index.html') {
    renderRoles()
} else {
    window.location.href = '/404.html'
}