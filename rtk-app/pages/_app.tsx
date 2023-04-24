import BaseLayout from '@/components/layouts/BaseLayout'
import { store } from '@/store'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <BaseLayout>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </BaseLayout>
    </>
  )
}
