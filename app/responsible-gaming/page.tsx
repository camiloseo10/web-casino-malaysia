"use client"

import SidebarMenuLayout from "@/components/sidebar-menu-layout"
import HeroSection from "@/components/hero-section"
import Footer from "@/components/footer"
import LanguageSwitcher from "@/components/language-switcher"

export default function ResponsibleGaming() {
  return (
    <SidebarMenuLayout>
      <div className="py-6">
        <div className="flex justify-end px-4 mb-4">
          <LanguageSwitcher />
        </div>

        <HeroSection
          title="Responsible Gaming"
          subtitle="Promoting a safe and responsible gaming environment for all our players."
        />

        <section className="max-w-3xl mx-auto px-4 mt-10 space-y-6 text-sm leading-relaxed text-gray-300">
          <h2 className="text-lg font-semibold text-white">1. Our Commitment</h2>
          <p>
            At MMC996, we are committed to ensuring that gaming remains a form of entertainment. We promote responsible gaming practices to protect our players from the risks of problem gambling.
          </p>

          <h2 className="text-lg font-semibold text-white">2. Self-Exclusion & Limits</h2>
          <p>
            Players have the option to set personal limits on deposits, losses, and session durations. Additionally, self-exclusion tools are available for those who need a break from gaming.
          </p>

          <h2 className="text-lg font-semibold text-white">3. Underage Gambling Prevention</h2>
          <p>
            Participation in online gambling activities is strictly prohibited for individuals under the age of 18. We employ verification processes to ensure compliance with legal age restrictions.
          </p>

          <h2 className="text-lg font-semibold text-white">4. Recognizing Problem Gambling</h2>
          <p>
            We encourage players to recognize signs of problem gambling, such as spending beyond their means or using gaming as an escape from personal issues. Support is available for those who seek help.
          </p>

          <h2 className="text-lg font-semibold text-white">5. Support & Resources</h2>
          <p>
            If you or someone you know is struggling with gambling-related issues, we recommend contacting professional support organizations. Links to resources are provided on this page.
          </p>

          <h2 className="text-lg font-semibold text-white">6. Contact Us</h2>
          <p>
            For more information on our responsible gaming policies or to request assistance, please reach out to our support team via the Contact Us page.
          </p>
        </section>

        <Footer />
      </div>
    </SidebarMenuLayout>
  )
}