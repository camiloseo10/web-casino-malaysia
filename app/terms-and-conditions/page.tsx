"use client"

import SidebarMenuLayout from "@/components/sidebar-menu-layout"
import HeroSection from "@/components/hero-section"
import Footer from "@/components/footer"
import LanguageSwitcher from "@/components/language-switcher"

export default function TermsAndConditions() {
  return (
    <SidebarMenuLayout>
      <div className="py-6">
        <div className="flex justify-end px-4 mb-4">
          <LanguageSwitcher />
        </div>

        <HeroSection
          title="Terms & Conditions"
          subtitle="Please read our terms and conditions carefully before using our services."
        />

        <section className="max-w-3xl mx-auto px-4 mt-10 space-y-6 text-sm leading-relaxed text-gray-300">
          <h2 className="text-lg font-semibold text-white">1. Acceptance of Terms</h2>
          <p>
            By accessing and using MMC996, you agree to comply with these Terms & Conditions. If you do not agree, please refrain from using our platform.
          </p>

          <h2 className="text-lg font-semibold text-white">2. Eligibility</h2>
          <p>
            You must be at least 18 years old to register and use our services. Compliance with local laws regarding online gambling is your responsibility.
          </p>

          <h2 className="text-lg font-semibold text-white">3. Account Responsibility</h2>
          <p>
            Users are responsible for maintaining the confidentiality of their account credentials and for all activities conducted under their accounts.
          </p>

          <h2 className="text-lg font-semibold text-white">4. Fair Use Policy</h2>
          <p>
            Any fraudulent, abusive, or illegal activity will result in account suspension and may lead to legal action.
          </p>

          <h2 className="text-lg font-semibold text-white">5. Deposits & Withdrawals</h2>
          <p>
            All transactions must comply with the payment methods and policies outlined on our Banking page. MMC996 reserves the right to request verification documents.
          </p>

          <h2 className="text-lg font-semibold text-white">6. Bonuses & Promotions</h2>
          <p>
            Bonuses are subject to specific terms, including wagering requirements. Abuse of promotional offers will not be tolerated.
          </p>

          <h2 className="text-lg font-semibold text-white">7. Limitation of Liability</h2>
          <p>
            MMC996 is not liable for any direct or indirect damages arising from the use of our services, including technical issues or third-party actions.
          </p>

          <h2 className="text-lg font-semibold text-white">8. Amendments</h2>
          <p>
            We reserve the right to modify these Terms & Conditions at any time. Continued use of our services indicates acceptance of any changes.
          </p>

          <h2 className="text-lg font-semibold text-white">9. Contact Information</h2>
          <p>
            For any questions or clarifications regarding these terms, please contact our support team via the Contact Us page.
          </p>
        </section>

        <Footer />
      </div>
    </SidebarMenuLayout>
  )
}