import type {FC} from 'react'
import type {PanelProps} from '@vkontakte/vkui'
import {Panel, PanelHeader, PanelHeaderButton} from '@vkontakte/vkui'
import {Icon28InboxOutline} from '@vkontakte/icons'
import {transition} from '@unexp/router'

let Home: FC<PanelProps> = () => {
  return <>
    <Panel>
      <PanelHeader
        left={
          <PanelHeaderButton onClick={_ => transition('/about')}>
            <Icon28InboxOutline/>
          </PanelHeaderButton>
        }
      >
        Home
      </PanelHeader>
    </Panel>
  </>
}

export default Home
