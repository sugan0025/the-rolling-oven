export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold mb-6 text-brand-dark">Contact Us</h1>
      <div className="space-y-4 text-gray-700">
        <p>If you have any questions, concerns, or need assistance with your order, please do not hesitate to contact us.</p>
        <h2 className="text-xl font-semibold mt-4">Get in Touch</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Email:</strong> support@therollingoven.com</li>
          <li><strong>Phone/WhatsApp:</strong> +91 63836 45415</li>
          <li><strong>Address:</strong> [Your Bakery Physical Address, City, State, ZIP]</li>
        </ul>
        <p className="mt-4 text-sm text-gray-500">Our customer support team is available during standard business hours to assist you.</p>
      </div>
    </div>
  );
}
