"use client"

import SidebarMenuLayout from "@/components/sidebar-menu-layout"
import ContactHero from "@/components/contact-hero"
import ContactForm from "@/components/contact-form"
import ContactInfo from "@/components/contact-info"
import ContactFaq from "@/components/contact-faq"
import Footer from "@/components/footer"
import LanguageSwitcher from "@/components/language-switcher"

export default function ContactPage() {
  return (
    <SidebarMenuLayout>
      <div className="py-6">
        <div className="flex justify-end px-4 mb-4">
          <LanguageSwitcher />
        </div>
        <ContactHero />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 py-8">
          <ContactForm />
          <ContactInfo />
        </div>
        <ContactFaq />
        <Footer />
      </div>
    </SidebarMenuLayout>
  )
}
