"use client"

import SidebarMenuLayout from "@/components/sidebar-menu-layout"
import HeroSection from "@/components/hero-section"
import Footer from "@/components/footer"
import LanguageSwitcher from "@/components/language-switcher"

export default function Banking() {
  return (
    <SidebarMenuLayout>
      <div className="py-6">
        <div className="flex justify-end px-4 mb-4">
          <LanguageSwitcher />
        </div>

        <HeroSection
          title="Banking"
          subtitle="Secure and convenient deposit and withdrawal methods tailored for you."
        />

        <section className="max-w-3xl mx-auto px-4 mt-10 space-y-6 text-sm leading-relaxed text-gray-300">
          <h2 className="text-lg font-semibold text-white">1. Deposit Methods</h2>
          <p>
            MMC996 offers a variety of deposit methods to suit your convenience, including Visa, Mastercard, Bank Transfers, and popular E-Wallets. All transactions are processed securely and promptly.
          </p>

          <h2 className="text-lg font-semibold text-white">2. Withdrawal Process</h2>
          <p>
            Withdrawals are processed swiftly, ensuring that you receive your winnings in the shortest time possible. Withdrawal methods mirror our deposit options for seamless transactions.
          </p>

          <h2 className="text-lg font-semibold text-white">3. Transaction Security</h2>
          <p>
            Your financial data is protected with industry-standard SSL encryption and robust security measures, ensuring safe and confidential transactions.
          </p>

          <h2 className="text-lg font-semibold text-white">4. Processing Times</h2>
          <p>
            Deposit transactions are usually instant, while withdrawals may take up to 24 hours depending on the method chosen and verification requirements.
          </p>

          <h2 className="text-lg font-semibold text-white">5. Fees & Charges</h2>
          <p>
            MMC996 does not impose any additional fees for deposits or withdrawals. However, intermediary banks or payment providers may apply standard processing charges.
          </p>

          <h2 className="text-lg font-semibold text-white">6. Verification Requirements</h2>
          <p>
            For security purposes, we may request verification documents before processing large withdrawals. This ensures compliance with anti-fraud and anti-money laundering regulations.
          </p>

          <h2 className="text-lg font-semibold text-white">7. Need Assistance?</h2>
          <p>
            If you encounter any issues with your banking transactions, please contact our support team for prompt assistance.
          </p>
        </section>

        <Footer />
      </div>
    </SidebarMenuLayout>
  )
}