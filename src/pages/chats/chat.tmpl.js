import { chatHeader } from '../../components/chatHeader/chatHeader';
import { chatCard } from '../../components/chatCard/chatCard';
import { mesageHeader } from '../../components/messageHeader/mesageHeader';
import { mesageList } from '../../components/messageList/mesageList';
import { messageControls } from '../../components/messageControls/messageControls';

import avatar from '../../../static/images/avatars/01.jpg';

const chatTmpl = `
    <div class="grid">
        <section class="left">
            ${chatHeader({
                withInput: true
            })}

            <section class="chat-list">

                ${chatCard({
                    name: 'Карина Терехова',
                    message: 'Что-то',
                    time: '12:20',
                    url: avatar,
                    isNewMessage: false,
                    isActive: false,
                })}
                ${chatCard({
                    name: 'Кристина Белоусова',
                    message: 'Что-то еще, чтобы уместилось в две строки и еще немного',
                    time: '12:20',
                    url: avatar,
                    isNewMessage: true,
                    messageCount: 6,
                    isActive: false,
                })}
                ${chatCard({
                    name: 'Вероника Нехорошкова',
                    message: 'Что-то еще, чтобы тоже уместилось да и еще немного',
                    time: '12:20',
                    url: avatar,
                    isNewMessage: false,
                    isActive: true,
                })}
               
            </section>
            
        </section>

        <section class="messages-layout">
            ${mesageHeader({
                name: 'Вероника Нехорошкова',
                url: avatar,
            })}
            ${mesageList()}
            ${messageControls()}
        </section>
    </div>
`;

export { chatTmpl };