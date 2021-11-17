const mesageHeaderTmpl = `
    <section class="header">
        <div class="header__right">
            <div class="avatar__wrap">
                <img src="{{ url }}" class="avatar avatar_chat-header">
                <span class="avatar__name">{{ name }}</span>
            </div>
            <div class="button__wrap">
                <button class="header__button button">
                    <svg class="button__image" width="14" height="14" viewBox="0 0 14 14" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M9.55199 9.55219C7.75057 11.3537 4.82989 11.3537 3.02846 9.55219C1.22704 7.75073 1.22704 4.82999 3.02846 3.02852C4.82989 1.22706 7.75057 1.22706 9.55199 3.02852C11.3534 4.82999 11.3534 7.75073 9.55199 9.55219ZM10.106 11.2921C7.63996 13.1784 4.09782 12.9938 1.84236 10.7383C-0.614122 8.28177 -0.614121 4.29894 1.84236 1.8424C4.29885 -0.614134 8.2816 -0.614134 10.7381 1.8424C12.9934 4.09781 13.1781 7.63981 11.2921 10.1059L14 12.8139L12.8139 14L10.106 11.2921Z" />
                    </svg>
                </button>
                <button class="header__button button">
                    <svg class="button__image" width="10" height="4" viewBox="0 0 10 4" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M4 2C4 3.10457 3.10457 4 2 4C0.89543 4 -4.82823e-08 3.10457 0 2C4.82823e-08 0.89543 0.895431 -4.82823e-08 2 0C3.10457 4.82823e-08 4 0.895431 4 2Z" />
                        <path
                            d="M10 2C10 3.10457 9.10457 4 8 4C6.89543 4 6 3.10457 6 2C6 0.89543 6.89543 -4.82823e-08 8 0C9.10457 4.82823e-08 10 0.895431 10 2Z" />
                    </svg>
                </button>
            </div>
        </div>
    </section>
`

export { mesageHeaderTmpl };