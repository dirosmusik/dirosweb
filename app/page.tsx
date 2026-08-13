import { LanguageProvider } from '@/lib/i18n'
import { SiteHeader } from '@/components/site-header'
import { HeroSection } from '@/components/hero-section'
import { MediaSection } from '@/components/media-section'
import { EventsSection } from '@/components/events-section'
import { PressSection } from '@/components/press-section'
import { ContactFooter } from '@/components/contact-footer'

export default function Page() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <SiteHeader />
        <main>
          <HeroSection />
          <MediaSection />
          <EventsSection />
          <PressSection />
        </main>
        <ContactFooter />
      </div>
    </LanguageProvider>
  )
}
