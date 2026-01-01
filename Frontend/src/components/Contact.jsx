import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contact() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white dark:bg-slate-900 py-12 px-4 sm:px-6 lg:px-8 pt-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Get in Touch
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                Send us a Message
              </h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-2 bg-white dark:bg-slate-700 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full px-4 py-2 bg-white dark:bg-slate-700 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Message
                  </label>
                  <textarea
                    placeholder="Your message"
                    rows="5"
                    className="w-full px-4 py-2 bg-white dark:bg-slate-700 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                Contact Information
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="text-2xl text-pink-500">📍</div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white mb-1">
                      Address
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      123 Book Street
                      <br />
                      Learning City, LC 12345
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-2xl text-pink-500">📞</div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white mb-1">
                      Phone
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      +1 (555) 123-4567
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-2xl text-pink-500">✉️</div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white mb-1">
                      Email
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      info@lithub.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-2xl text-pink-500">🕐</div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white mb-1">
                      Hours
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      Monday - Friday: 9:00 AM - 6:00 PM
                      <br />
                      Saturday - Sunday: 10:00 AM - 4:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
