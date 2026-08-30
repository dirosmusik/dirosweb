'use client'

import { useEffect, useState } from 'react'
import Script from 'next/script'
import { COOKIE_CONSENT_KEY, COOKIE_CONSENT_EVENT } from '@/lib/consent'

const PIXEL_ID = '1058143220354590'

// Fires the actual init + PageView track. Called explicitly from onLoad
// below (not just embedded in the base script) so it's guaranteed to run
// once window.fbq is actually available — this is what was missing before.
function trackPageView() {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('init', PIXEL_ID)
    window.fbq('track', 'PageView')
  }
}

// Only loads the Meta Pixel once the user has accepted cookies — either
// because they already had before (localStorage), or because they just
// clicked "Aceptar" in the CookieBanner (custom event, no reload needed).
export function MetaPixel() {
  const [consented, setConsented] = useState(false)

  useEffect(() => {
    try {
      if (localStorage.getItem(COOKIE_CONSENT_KEY) === 'accepted') {
        setConsented(true)
      }
    } catch {
      // localStorage unavailable — don't load tracking scripts
    }

    function onConsent() {
      setConsented(true)
      // If the script was already loaded in this session (e.g. this event
      // fires again for some reason), fire the PageView directly too.
      trackPageView()
    }

    window.addEventListener(COOKIE_CONSENT_EVENT, onConsent)
    return () => window.removeEventListener(COOKIE_CONSENT_EVENT, onConsent)
  }, [])

  if (!consented) return null

  return (
    <>
      {/* Base pixel script: only defines the fbq stub and loads fbevents.js.
          The actual init + PageView track happens explicitly in onLoad below,
          so it fires reliably once window.fbq truly exists — for both a
          returning visitor (already consented) and someone who just clicked
          "Aceptar". */}
      <Script id="meta-pixel" strategy="afterInteractive" onLoad={trackPageView}>
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
        `}
      </Script>
      <noscript>
        <img
          height={1}
          width={1}
          style={{ display: 'none' }}
          src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  )
}
