import bridge from '@vkontakte/vk-bridge'

export const init = () => {
  bridge.send('VKWebAppInit')
}
