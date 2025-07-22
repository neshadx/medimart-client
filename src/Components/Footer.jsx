

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-12 px-4 md:px-12 mt-20 border-t">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-green-600 mb-4">MediMart</h2>
          <p className="text-sm text-gray-600">
            Your trusted online pharmacy for genuine medicines and healthcare needs.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-green-600">Home</a></li>
            <li><a href="/shop" className="hover:text-green-600">Shop</a></li>
            <li><a href="/about" className="hover:text-green-600">About Us</a></li>
            <li><a href="/contact" className="hover:text-green-600">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Contact Us</h3>
          <ul className="text-sm space-y-2">
            <li>Email: support@medimart.com</li>
            <li>Phone: +880 1234-567890</li>
            <li>Address: Dhaka, Bangladesh</li>
          </ul>
        </div>

        {/* Newsletter Reminder (Optional CTA) */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Stay Connected</h3>
          <p className="text-sm mb-3">
            Subscribe to get updates on offers & health tips.
          </p>
          <a
            href="#newsletter"
            className="inline-block bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded hover:bg-blue-700"
          >
            Subscribe Now
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-sm text-gray-500 mt-10 border-t pt-6">
        © {new Date().getFullYear()} MediMart. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

