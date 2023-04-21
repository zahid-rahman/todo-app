import BaseLayout from '@/components/layouts/BaseLayout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <BaseLayout>
        <Component {...pageProps} />
      </BaseLayout>
    </>
  )
}
