"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardTwentyNine from '@/components/sections/feature/featureCardTwentyNine/FeatureCardTwentyNine';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroSplitKpi from '@/components/sections/hero/HeroSplitKpi';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import { Award, ShieldCheck, Zap, Wrench } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-shift"
        defaultTextAnimation="entrance-slide"
        borderRadius="pill"
        contentWidth="compact"
        sizing="largeSmallSizeLargeTitles"
        background="none"
        cardStyle="soft-shadow"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="glass"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        { name: "בית", id: "hero" },
        { name: "אודות", id: "about" },
        { name: "שירותים", id: "services" },
        { name: "המלצות", id: "testimonials" },
        { name: "צור קשר", id: "contact" },
      ]}
      brandName="סנדלריה של נתן"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitKpi
      background={{ variant: "plain" }}
      title="סנדלריה של נתן: אומנות עור ונוחות ללא פשרות"
      description="25 שנות ניסיון במתן חיים חדשים לנעליים ולתיקי עור. מקצועיות, אמינות ושירות אישי בכל צעד."
      kpis={[
        { value: "25", label: "שנות ניסיון" },
        { value: "100%", label: "שביעות רצון" },
        { value: "אלפים", label: "לקוחות מרוצים" },
      ]}
      enableKpiAnimation={true}
      buttons={[{ text: "צור קשר עכשיו", href: "#contact" }]}
      imageSrc="http://img.b2bpic.net/free-photo/close-up-male-shoemaker-cutting-leather-textile_171337-12260.jpg"
      mediaAnimation="slide-up"
      avatars={[
        { src: "http://img.b2bpic.net/free-photo/tailor-cutting-leather-with-scissors_114579-12118.jpg", alt: "Tailor cutting leather with scissors" },
        { src: "http://img.b2bpic.net/free-photo/close-up-male-cobbler-working-with-leather-textile_171337-12274.jpg", alt: "Close up of a male cobbler working with leather textile" },
        { src: "http://img.b2bpic.net/free-photo/cropped-photo-mature-craftsman-s-hands-working-his-workspace-man-drawing-sketch-grounge-dark-stone-texture-background_1157-51564.jpg", alt: "Cropped photo of mature craftsman's hands" },
        { src: "http://img.b2bpic.net/free-photo/bootmaker-workshop-making-shoes_171337-12279.jpg", alt: "Bootmaker in workshop making shoes" },
        { src: "http://img.b2bpic.net/free-photo/close-up-male-shoemaker-cutting-leather-textile_171337-12260.jpg", alt: "luxury leather cobbler shop professional" },
      ]}
      avatarText="אלפי לקוחות מאושרים"
      marqueeItems={[
        { type: "text", text: "תיקון נעלי יוקרה" },
        { type: "text", text: "חידוש תיקי עור" },
        { type: "text", text: "החלפת סוליות מקצועית" },
        { type: "text", text: "ייצור מדרסים" },
        { type: "text", text: "ניקוי וטיפוח עור" },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TestimonialAboutCard
      useInvertedBackground={false}
      tag="הסיפור שלנו"
      title="יותר מסנדלריה – בית למקצועיות"
      description="נתן נעים, סנדלר מומחה, מעניק שירות אישי ואיכותי מזה שני עשורים. אנו מאמינים שזוג נעליים איכותי ראוי ליחס הראוי לו."
      subdescription="מתיקוני עור מורכבים ועד החלפת סוליות – נתן מביא איתו ניסיון, יחס אישי וחיוך שהופכים כל תיקון לחוויה."
      imageSrc="http://img.b2bpic.net/free-photo/small-business-manager-his-workshop_23-2149094583.jpg"
      mediaAnimation="slide-up"
      icon={Wrench}
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardTwentyNine
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      features={[
        {
          title: "החלפת סוליות",          description: "החזרת נוחות ואחיזה אופטימלית לכל סוגי הנעליים.",          imageSrc: "http://img.b2bpic.net/free-photo/leather-boots-dry-leaves-background_23-2148224944.jpg",          titleImageSrc: "http://img.b2bpic.net/free-photo/cropped-image-cobbler-modeling-design-shoe_171337-12238.jpg",          buttonText: "קרא עוד"},
        {
          title: "חידוש עור",          description: "טיפוח, ניקוי וצביעה לשמירה על מראה יוקרתי.",          imageSrc: "http://img.b2bpic.net/free-photo/man-studio-creates-leather-ware_1157-33216.jpg",          titleImageSrc: "http://img.b2bpic.net/free-photo/close-up-engraving-art-tools_23-2149186790.jpg",          buttonText: "קרא עוד"},
        {
          title: "תיקוני נוחות",          description: "מדרסים והתאמות מיוחדות לנוחות מרבית ביום-יום.",          imageSrc: "http://img.b2bpic.net/free-photo/working-cobbler_1098-14299.jpg",          titleImageSrc: "http://img.b2bpic.net/free-photo/shoemaker-workshop-making-shoes_171337-12251.jpg",          buttonText: "קרא עוד"},
      ]}
      title="שירותים מקצועיים למוצרי העור שלך"
      description="אנו משתמשים בחומרים האיכותיים ביותר כדי לשמר את הערך והנוחות של הנעליים שלכם."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwo
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      testimonials={[
        { id: "1", name: "איתי ארדיטי", role: "לקוח", testimonial: "עבודה משובחת! שידרג לי מגפיים ישנות וחידש את העור. מקצוען אמיתי.", imageSrc: "http://img.b2bpic.net/free-photo/young-smiling-blogger-holding-shoe-heel-sneakers-hands-happily-recording-new-fashion-video-vlog-camera_574295-5292.jpg" },
        { id: "2", name: "גיא", role: "לקוח", testimonial: "נתן הביא לי סולייה כל כך טובה שאני משתמש בנעליים בקביעות. הבן אדם מלך!", imageSrc: "http://img.b2bpic.net/free-photo/side-view-woman-sitting-thrift-shop_23-2149726859.jpg" },
        { id: "3", name: "יעל בוקספן", role: "לקוחה", testimonial: "חוזרת אליו תמיד. סומכת עליו בלב שלם שעושה עבודה מצוינת.", imageSrc: "http://img.b2bpic.net/free-photo/young-stylish-music-band-composing-song-piano-keyboard-modern-sound-recording-studio-attractive-singers-working-new-music-album-together_574295-1968.jpg" },
        { id: "4", name: "Guy Alony", role: "אופנוען", testimonial: "ביצע עבורי עבודה מיוחדת בחליפת רכיבה לאופנוע. שירות מהיר ומקצועי מאוד.", imageSrc: "http://img.b2bpic.net/free-photo/close-up-woman-sportswear_23-2148759069.jpg" },
        { id: "5", name: "רות בן-טוב", role: "לקוחה", testimonial: "איש מקסים, מקצועי ומהיר במחיר הוגן מאוד. ממליצה בחום רב.", imageSrc: "http://img.b2bpic.net/free-photo/smiling-senior-businessman-pointing-with-finger_1262-3108.jpg" },
      ]}
      title="לקוחות מעידים"
      description="אלפי לקוחות כבר נהנו משירותינו. הנה מה שיש להם לומר:"
    />
  </div>

  <div id="why" data-section="why">
      <MetricCardOne
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      metrics={[
        { id: "m1", value: "25+", title: "שנות ותק", description: "ידע שנצבר לאורך דורות של עשייה.", icon: Award },
        { id: "m2", value: "מהירות", title: "שירות זריז", description: "תיקונים איכותיים בלי לחכות שבועות.", icon: Zap },
        { id: "m3", value: "הוגנות", title: "מחירים נוחים", description: "תמורה מלאה עבור שירות מקצועי.", icon: ShieldCheck },
      ]}
      title="למה לבחור בסנדלריה של נתן?"
      description="הערכים שמניעים אותנו בכל תיקון ובכל שירות."
    />
  </div>

  <div id="process" data-section="process">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        { id: "f1", title: "הערכה ראשונית", content: "מביאים את הפריט לבדיקה אצל נתן לקבלת הערכת מחיר ותוצאה." },
        { id: "f2", title: "בחירת חומרים", content: "אנו משתמשים רק בחומרים האיכותיים ביותר שמתאימים לנעל שלכם." },
        { id: "f3", title: "ביצוע העבודה", content: "נתן מבצע את התיקון ביסודיות ובמקצועיות ללא פשרות." },
        { id: "f4", title: "איסוף ונוחות", content: "הפריט מוכן לאיסוף, מוכן לשימוש ארוך טווח ומלא בסטייל." },
      ]}
      sideTitle="תהליך העבודה שלנו"
      sideDescription="פשוט, ברור ושקוף – כך הופכים נעל ישנה לחדשה."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        { id: "q1", title: "האם ניתן לתקן כל נעל?", content: "רוב הנעליים ניתנות לחידוש. הביאו אותן אלינו לבדיקה ראשונית." },
        { id: "q2", title: "כמה זמן לוקח תיקון?", content: "זמני התיקון משתנים, אך נתן תמיד שואף ליעילות ומהירות מקסימלית." },
        { id: "q3", title: "מה טווח המחירים?", content: "המחירים הוגנים ותלויים בסוג התיקון והחומרים הנדרשים." },
      ]}
      sideTitle="שאלות נפוצות"
      sideDescription="דברים שכדאי לדעת על התיקונים שלנו."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={false}
      background={{ variant: "plain" }}
      tag="בואו לבקר"
      title="מוכנים לתת חיים חדשים לנעליים שלכם?"
      description="הגיעו לסנדלריה בהרצליה או צרו קשר לייעוץ ראשוני. נתן מחכה לכם."
      buttons={[{ text: "שלחו הודעה בווטסאפ", href: "https://wa.me/972500000000" }]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="סנדלריה של נתן"
      copyrightText="© 2025 סנדלריה של נתן. כל הזכויות שמורות."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}