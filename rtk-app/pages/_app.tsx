import BaseLayout from '@/components/layouts/BaseLayout'
import { store } from '@/store'
import '@/styles/globals.css'
import ToastNotification from '@/ui/ToastNotification'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <BaseLayout>
        <Provider store={store}>
          <Component {...pageProps} />
          <ToastNotification position="top-center" reverseOrder={false} />
        </Provider>
      </BaseLayout>
    </>
  )
}
