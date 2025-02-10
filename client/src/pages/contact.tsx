import ContactForm from "@/components/contact-form";

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
        <ContactForm />
      </div>
    </div>
  );
}
