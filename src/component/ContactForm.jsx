const ContactForm = () => {
  return (
    <div className="left-content w-full md:basis-1/3  p-4 md:p-6 border border-violet-400 shadow-lg hover:shadow-violet-400 rounded-lg h-[520px] mb-4 md:m-8">
      <h1 className="text-3xl font-bold text-violet-800 mb-4">Contact Me</h1>
      <form action="">
        {/* Name Input */}
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Enter your name"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
        </div>

        {/* Email Input */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
        </div>

        {/* Message Textarea */}
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Enter your message"
            rows="5"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="mb-4">
          <input
            type="submit"
            value="Send"
            className="w-full p-3 bg-violet-500 text-white font-bold rounded-md cursor-pointer hover:bg-violet-600 transition duration-300"
          />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
