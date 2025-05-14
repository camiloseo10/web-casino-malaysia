"use client"

import SidebarMenuLayout from "@/components/sidebar-menu-layout"
import HeroSection from "@/components/hero-section"
import Footer from "@/components/footer"
import LanguageSwitcher from "@/components/language-switcher"

export default function FAQ() {
  return (
    <SidebarMenuLayout>
      <div className="py-6">
        <div className="flex justify-end px-4 mb-4">
          <LanguageSwitcher />
        </div>

        <HeroSection
          title="Frequently Asked Questions"
          subtitle="Find answers to common questions about MMC996 services and features."
        />

        <section className="max-w-3xl mx-auto px-4 mt-10 space-y-8 text-sm leading-relaxed text-gray-300">
          <div>
            <h2 className="text-lg font-semibold text-white">1. How do I create an account?</h2>
            <p>
              Click on the “Register” button at the top of the page and fill in the required details. Once submitted, you’ll receive a confirmation email to activate your account.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">2. What payment methods are accepted?</h2>
            <p>
              We accept Visa, Mastercard, Bank Transfers, and a variety of E-Wallets for both deposits and withdrawals. Visit our Banking page for more details.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">3. How can I withdraw my winnings?</h2>
            <p>
              Navigate to the “Withdrawal” section under your account dashboard, select your preferred method, and follow the prompts to request a withdrawal.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">4. Are my personal details secure?</h2>
            <p>
              Yes, we use advanced SSL encryption and strict data protection policies to ensure your personal and financial information is kept secure.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">5. What should I do if I forget my password?</h2>
            <p>
              Click on the “Forgot Password” link on the login page and follow the instructions to reset your password via email.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">6. Is there a welcome bonus for new players?</h2>
            <p>
              Yes, we offer an attractive welcome bonus for new players. Please check our Promotions page for the latest offers and their terms.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">7. How do I set gaming limits?</h2>
            <p>
              You can set deposit, loss, and session limits in your account settings under the Responsible Gaming section.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">8. Can I self-exclude from playing?</h2>
            <p>
              Yes, self-exclusion options are available. Contact our support team if you wish to activate self-exclusion on your account.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">9. What are the wagering requirements for bonuses?</h2>
            <p>
              Wagering requirements vary depending on the promotion. Detailed information can be found in the terms of each specific bonus.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">10. How can I contact customer support?</h2>
            <p>
              You can reach our support team via live chat, email, or WhatsApp. Visit the Contact Us page for more contact options.
            </p>
          </div>
        </section>

        <Footer />
      </div>
    </SidebarMenuLayout>
  )
}