import { LanguageProvider } from '@/lib/i18n'
import { SiteHeader } from '@/components/site-header'
import { HeroSection } from '@/components/hero-section'
import { SocialBar } from '@/components/social-bar'
import { BioSection } from '@/components/bio-section'
import { VenuesSection } from '@/components/venues-section'
import { TourSection } from '@/components/tour-section'
import { ContactFooter } from '@/components/contact-footer'

export default function Page() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <SiteHeader />
        <main>
          <HeroSection />
          <SocialBar />
          <BioSection />
          <VenuesSection />
          <TourSection />
        </main>
        <ContactFooter />
      </div>
    </LanguageProvider>
  )
}
