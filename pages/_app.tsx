import type {FC} from 'react'
import {lazy, useEffect} from 'react'
import {ConfigProvider, AdaptivityProvider, AppRoot} from '@vkontakte/vkui'
import {Match} from '@unexp/router'
import {init} from 'lib'

// == lazy imports
let Home = lazy(() => import('pages/home'))
let About = lazy(() => import('pages/about'))

export let App: FC = () => {
  useEffect(() => {
    init()
  }, [])

  return <>
    <ConfigProvider isWebView>
      <AdaptivityProvider>
        <AppRoot noLegacyClasses>
          <Match fallback={null}>
            <Home id='/'/>
            <About id='/about'/>
          </Match>
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  </>
}
