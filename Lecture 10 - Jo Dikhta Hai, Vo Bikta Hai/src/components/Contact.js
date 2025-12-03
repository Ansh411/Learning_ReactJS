const Contact = () => {
  return (
    <div className="min-h-screen flex items-start justify-center bg-gradient-to-br from-orange-50 to-orange-100 px-6 py-10">
      <div className="bg-white shadow-xl rounded-2xl p-10 max-w-xl w-full border border-orange-200/60 animate-fadeIn mt-20">
        
        <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-4">
          Contact <span className="text-orange-600">Us</span>
        </h1>

        <p className="text-center text-gray-600 mb-8">
          We’d love to hear from you! Reach out anytime.
        </p>

        <div className="space-y-6">

          {/* Phone */}
          <div className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 hover:shadow-md transition">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="w-8 h-8 text-orange-500"
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" 
                d="M2.25 4.5l4.5-1.5 2.25 4.5-3 2.25a12.06 12.06 0 006.75 6.75l2.25-3 4.5 2.25-1.5 4.5c-.3.9-1.2 1.5-2.1 1.5C8.28 21 3 15.72 3 9c0-.9.6-1.8 1.5-2.1z" 
              />
            </svg>

            <div>
              <h2 className="text-lg font-semibold text-gray-800">Phone</h2>
              <p className="text-gray-600">+91-9000010000</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 hover:shadow-md transition">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="w-8 h-8 text-orange-500"
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" 
                d="M3 8l7.89 5.26c.7.47 1.61.47 2.31 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
              />
            </svg>

            <div>
              <h2 className="text-lg font-semibold text-gray-800">Email</h2>
              <p className="text-gray-600">bitenow@gmail.com</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Contact;
