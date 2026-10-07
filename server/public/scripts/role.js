const renderRole = async () => {
    const requestedSlug = window.location.pathname.split('/').pop()

    const response = await fetch('/roles')
    const data = await response.json()

    const role = data.find(role => role.slug === requestedSlug)

    if (!role) {
        window.location.href = '/404.html'
        return
    }

    document.getElementById('role-image').src = role.image
    document.getElementById('role-image').alt = `${role.name} card`

    document.getElementById('role-name').textContent = role.name
    document.getElementById('role-allegiance').textContent =
        `Allegiance: ${role.allegiance}`
    document.getElementById('role-type').textContent =
        `Role Type: ${role.roleType}`
    document.getElementById('role-card-text').textContent =
        `Card Text: ${role.cardText}`
    document.getElementById('role-description').textContent =
        role.description
    document.getElementById('role-id').textContent =
        `ID: ${role.id}`
    document.getElementById('role-slug').textContent =
        `Slug: ${role.slug}`

    document.title = `Avalon Role Guide - ${role.name}`
}

renderRole()