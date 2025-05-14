"use client"

import SidebarMenuLayout from "@/components/sidebar-menu-layout"
import HeroSection from "@/components/hero-section"
import Footer from "@/components/footer"
import LanguageSwitcher from "@/components/language-switcher"

export default function ContactPage() {
  return (
    <SidebarMenuLayout>
      <div className="py-6">
        <div className="flex justify-end px-4 mb-4">
          <LanguageSwitcher />
        </div>

        <HeroSection
          title="Contact Us"
          subtitle="We're here to help. Reach out to us through any of the channels below."
        />

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto px-4 py-8 text-sm text-gray-300">
          {/* Contact Form */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-4">Send us a message</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-white">Name</label>
                <input type="text" className="w-full rounded-md bg-casino-dark border-gray-600 text-white focus:border-casino-gold focus:ring-casino-gold" />
              </div>
              <div>
                <label className="block text-sm font-medium text-white">Email</label>
                <input type="email" className="w-full rounded-md bg-casino-dark border-gray-600 text-white focus:border-casino-gold focus:ring-casino-gold" />
              </div>
              <div>
                <label className="block text-sm font-medium text-white">Message</label>
                <textarea rows={4} className="w-full rounded-md bg-casino-dark border-gray-600 text-white focus:border-casino-gold focus:ring-casino-gold"></textarea>
              </div>
              <button type="submit" className="px-4 py-2 border border-casino-gold text-casino-gold rounded-md hover:bg-casino-gold hover:text-black">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-4">Contact Information</h2>
            <ul className="space-y-2">
              <li><strong>Live Chat:</strong> Available on our website</li>
              <li><strong>Email:</strong> support@mmc996.com</li>
              <li><strong>WhatsApp:</strong> +60 123 456 789</li>
              <li><strong>WeChat:</strong> mmc996support</li>
            </ul>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-3xl mx-auto px-4 py-8 space-y-6 text-sm text-gray-300">
          <h2 className="text-lg font-semibold text-white">Frequently Asked Questions</h2>
          <div>
            <h3 className="font-semibold text-white">How can I reset my password?</h3>
            <p>Click on “Forgot Password” on the login page and follow the instructions sent to your email.</p>
          </div>
          <div>
            <h3 className="font-semibold text-white">Where can I check my deposit history?</h3>
            <p>Login to your account and go to “Transaction History” under your profile dashboard.</p>
          </div>
          <div>
            <h3 className="font-semibold text-white">How long does it take to process withdrawals?</h3>
            <p>Withdrawals are typically processed within 24 hours, depending on the payment method used.</p>
          </div>
        </section>

        <Footer />
      </div>
    </SidebarMenuLayout>
  )
}