import FaqHero from "@/components/faq-hero"
import FaqCategories from "@/components/faq-categories"
import FaqAccordion from "@/components/faq-accordion"
import SidebarMenuLayout from "@/components/sidebar-menu-layout"
import Footer from "@/components/footer"

export default function FaqPage() {
  return (
    <SidebarMenuLayout>
      <FaqHero />
      <FaqCategories />
      <FaqAccordion />
      <Footer />
    </SidebarMenuLayout>
    
    
  )
}
