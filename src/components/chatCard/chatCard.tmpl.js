const chatCardTmpl = `
    {{#if isActive}}
    <div class="chat-card chat-card_active">
    {{else}}
    <div class="chat-card chat-card_notarget">
    {{/if}}
        <img src="{{ url }}" class="avatar avatar_chat-list">
        <div class="chat-card__wrap">
            <span class="avatar__name">{{ name }}</span>
            <p class="avatar__message">{{ message }}</p>
        </div>
        <span class="chat-card__time">{{ time }}</span>
        
        {{#if isNewMessage}}
        <span class="chat-card__count">{{ messageCount }}</span>
        {{/if}}
    </div>
`

export { chatCardTmpl };