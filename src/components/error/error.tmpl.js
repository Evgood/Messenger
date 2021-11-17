const errorTmpl = `
    <section class="error">
        <h1 class="error__title">{{ title }}</h1>
        <p class="error__desc">{{ message }}</p>
        <a href={{ link }} class="error__link">{{ linkName }}</a>
    </section>
`

export { errorTmpl };