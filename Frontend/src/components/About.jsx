import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white dark:bg-slate-900 py-12 px-4 sm:px-6 lg:px-8 pt-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              About Us
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Discover our mission, vision, and the story behind LitHub
            </p>
          </div>

          {/* Mission Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                Our Mission
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-4">
                Our mission is to make quality education and learning resources accessible to everyone, everywhere. We believe that books are gateways to knowledge and personal growth, and we're committed to helping you find the perfect reads for your journey.
              </p>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                Whether you're a student, professional, or lifelong learner, we're here to support your educational goals with a carefully curated collection of books across all genres and subjects.
              </p>
            </div>
            <div className="bg-gradient-to-br from-pink-100 to-blue-100 dark:from-slate-800 dark:to-slate-700 rounded-lg p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">📚</div>
                <p className="text-xl font-bold text-slate-900 dark:text-white">
                  Empowering Minds
                </p>
              </div>
            </div>
          </div>

          {/* Vision Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 dark:from-slate-800 dark:to-slate-700 rounded-lg p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🌟</div>
                <p className="text-xl font-bold text-slate-900 dark:text-white">
                  Building Futures
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                Our Vision
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-4">
                We envision a world where every individual has unlimited access to knowledge and the tools they need to succeed. Our platform brings together readers and learners from all backgrounds, fostering a community of growth and discovery.
              </p>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                By leveraging technology and a passion for education, we're transforming how people learn and grow, one book at a time.
              </p>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6 text-center">
                <div className="text-4xl mb-4">💡</div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  Knowledge
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  We believe in the power of knowledge and continuous learning as the foundation for personal growth.
                </p>
              </div>

              <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6 text-center">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  Community
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  We foster a supportive community where readers can connect, share, and grow together.
                </p>
              </div>

              <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6 text-center">
                <div className="text-4xl mb-4">✨</div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  Excellence
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  We're committed to providing the highest quality content and exceptional service to our users.
                </p>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="bg-gradient-to-r from-pink-500 to-blue-500 rounded-lg p-8 mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
              <div>
                <div className="text-4xl font-bold mb-2">10K+</div>
                <p className="text-lg">Books Available</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">50K+</div>
                <p className="text-lg">Active Learners</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">100+</div>
                <p className="text-lg">Courses Offered</p>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
              Join Our Community
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
              Whether you're looking to expand your knowledge, improve your skills, or just enjoy a great read, we're here to help. Start your learning journey with us today!
            </p>
            <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
