import { chatHeader } from '../../components/chatHeader/chatHeader';

import avatar from '../../../static/images/avatars/01.jpg';

const settingsTmpl = `
    ${chatHeader({
        withTitle: true,
        title: 'Настройки',
    })}
    <section class="setting">
        <div class="setting__card">
            <div class="setting__avatar">
                <img class="setting__avatar-image" src="${avatar}">
            </div>
        </div>
        <div class="setting__card">
            <div class="setting__card-line">
                <span class="setting__label">Имя</span>
                <span class="setting__value">Евгений</span>
            </div>
            <div class="setting__card-line">
                <span class="setting__label">Фамилия</span>
                <span class="setting__value">Горохов</span>
            </div>
            <div class="setting__card-line">
                <span class="setting__label">Имя в чате</span>
                <span class="setting__value">Женя</span>
            </div>
        </div>
        <div class="setting__card">
            <div class="setting__card-line">
                <span class="setting__label">Имя</span>
                <span class="setting__value">Евгений</span>
            </div>
            <div class="setting__card-line">
                <span class="setting__label">Фамилия</span>
                <span class="setting__value">Горохов</span>
            </div>
            <div class="setting__card-line">
                <span class="setting__label">Имя в чате</span>
                <span class="setting__value">Женя</span>
            </div>
        </div>
        <div class="setting__card">
            <div class="setting__card-line">
                <a href="#" class="setting__link">Изменить пароль</a>
            </div>
            <div class="setting__card-line">
                <a href="#" class="setting__link setting__link_exit">Выйти</a>
            </div>
        </div>
    </section>
`;

export { settingsTmpl };