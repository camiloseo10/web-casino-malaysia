"use client"

import SidebarMenuLayout from "@/components/sidebar-menu-layout"
import HeroSection from "@/components/hero-section"
import Footer from "@/components/footer"
import LanguageSwitcher from "@/components/language-switcher"

export default function PrivacyPolicy() {
  return (
    <SidebarMenuLayout>
      <div className="py-6">
        <div className="flex justify-end px-4 mb-4">
          <LanguageSwitcher />
        </div>
        
        <HeroSection
          title="Privacy Policy"
          subtitle="Your privacy is important to us. Learn how we protect and manage your personal information."
        />

        <section className="max-w-3xl mx-auto px-4 mt-10 space-y-6 text-sm leading-relaxed text-gray-300">
          <p>
            At MMC996, we are committed to safeguarding your privacy. This Privacy Policy outlines how we collect, use, disclose, and protect your personal information.
          </p>

          <h2 className="text-lg font-semibold text-white">1. Information We Collect</h2>
          <p>
            We may collect personal details such as your name, email address, contact number, payment information, and usage data when you register, play games, or contact support.
          </p>

          <h2 className="text-lg font-semibold text-white">2. How We Use Your Information</h2>
          <p>
            Your information is used to provide gaming services, process transactions, enhance user experience, send promotional materials, and comply with legal obligations.
          </p>

          <h2 className="text-lg font-semibold text-white">3. Data Protection Measures</h2>
          <p>
            We implement robust security measures including SSL encryption, firewall protection, and strict access controls to safeguard your data.
          </p>

          <h2 className="text-lg font-semibold text-white">4. Sharing of Information</h2>
          <p>
            Your data may be shared with trusted third-party service providers strictly for operational purposes. We do not sell or rent your personal information.
          </p>

          <h2 className="text-lg font-semibold text-white">5. Cookies and Tracking</h2>
          <p>
            We use cookies to improve website functionality and gather analytics. You can manage cookie preferences through your browser settings.
          </p>

          <h2 className="text-lg font-semibold text-white">6. User Rights</h2>
          <p>
            You have the right to access, update, or delete your personal data. Please contact our support team for any privacy-related requests.
          </p>

          <h2 className="text-lg font-semibold text-white">7. Updates to this Policy</h2>
          <p>
            We may update this Privacy Policy periodically. Continued use of our services constitutes acceptance of any changes.
          </p>
        </section>

        <Footer />
      </div>
    </SidebarMenuLayout>
  )
}