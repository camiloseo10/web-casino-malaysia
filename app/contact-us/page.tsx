"use client"

import SidebarMenuLayout from "@/components/sidebar-menu-layout"
import HeroSection from "@/components/hero-section"
import Footer from "@/components/footer"
import LanguageSwitcher from "@/components/language-switcher"

export default function ContactUs() {
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

        <section className="max-w-3xl mx-auto px-4 mt-10 space-y-6 text-sm leading-relaxed text-gray-300">
          <h2 className="text-lg font-semibold text-white">1. Customer Support</h2>
          <p>
            Our support team is available 24/7 to assist you with any inquiries or issues. Whether you have questions about your account, games, or transactions, we're here to help.
          </p>

          <h2 className="text-lg font-semibold text-white">2. Contact Channels</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Live Chat:</strong> Available directly on our website for instant support.</li>
            <li><strong>Email:</strong> support@mmc996.com</li>
            <li><strong>WhatsApp:</strong> +60 123 456 789</li>
            <li><strong>WeChat:</strong> mmc996support</li>
          </ul>

          <h2 className="text-lg font-semibold text-white">3. Feedback & Suggestions</h2>
          <p>
            We value your feedback. If you have suggestions to improve our services or your experience, feel free to share them with us.
          </p>

          <h2 className="text-lg font-semibold text-white">4. General Inquiries Form</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white">Name</label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full rounded-md bg-casino-dark border-gray-600 text-white shadow-sm focus:border-casino-gold focus:ring-casino-gold sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md bg-casino-dark border-gray-600 text-white shadow-sm focus:border-casino-gold focus:ring-casino-gold sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-white">Message</label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full rounded-md bg-casino-dark border-gray-600 text-white shadow-sm focus:border-casino-gold focus:ring-casino-gold sm:text-sm"
              ></textarea>
            </div>

            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-casino-gold text-casino-gold rounded-md hover:bg-casino-gold hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-casino-gold"
            >
              Send Message
            </button>
          </form>
        </section>

        <Footer />
      </div>
    </SidebarMenuLayout>
  )
}