import { useState } from 'react';
import { MessageSquare, Phone, Mail, Send, Linkedin, Github, Instagram } from 'lucide-react';

const SocialLink = ({ icon: Icon, href, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 bg-opacity-10 hover:bg-opacity-20 transition-colors duration-300"
  >
    <Icon size={20} />
  </a>
);

const ContactOption = ({ icon: Icon, title, description, active, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={`flex items-center p-4 rounded-xl w-full transition-all duration-300
      ${active ? 'bg-blue-600 text-white shadow-lg' : 'bg-blue-900 bg-opacity-10 hover:bg-opacity-20'}
    `}
  >
    <Icon size={24} className="mr-4 flex-shrink-0" />
    <div className="text-left">
      <h3 className="font-medium">{title}</h3>
      <p className="text-sm opacity-80">{description}</p>
    </div>
  </button>
);

const Contact = () => {
  const [contactMethod, setContactMethod] = useState(null);
  const [formData, setFormData] = useState({ name: '', message: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSendMessage = () => {
    const { name, message } = formData;
    const newErrors = {};

    if (!name.trim()) newErrors.name = "Please enter your name.";
    if (!message.trim()) newErrors.message = "Please enter a message.";

    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      return;
    }

    const encodedMsg = encodeURIComponent(`Name: ${name}\nMessage: ${message}`);
    const whatsappURL = `https://wa.me/919042001900?text=${encodedMsg}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <section
    id="contact"
    className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12 flex items-center relative overflow-hidden"
  >
      {/* Background blur circles */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-blue-500 bg-opacity-5 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-blue-500 bg-opacity-5 blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          <span className="relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-1 after:w-16 after:bg-blue-500">
            Get In Touch
          </span>
        </h2>

        <div className="max-w-4xl mx-auto bg-[#0F1729] bg-opacity-70 rounded-2xl p-6 shadow-xl">
          {/* Contact methods */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <ContactOption
              icon={Mail}
              title="Email Me"
              description="raafid122@gmail.com"
              active={contactMethod === 'email'}
              onClick={() => setContactMethod('email')}
            />
            <ContactOption
              icon={Phone}
              title="Call Me"
              description="+91 9042001900"
              active={contactMethod === 'call'}
              onClick={() => setContactMethod('call')}
            />
            <ContactOption
              icon={MessageSquare}
              title="Leave a Message"
              description="I'll get back to you soon"
              active={contactMethod === 'chat'}
              onClick={() => setContactMethod('chat')}
            />
          </div>

          {/* Message form */}
          {contactMethod === 'chat' && (
            <div className="bg-[#101630] bg-opacity-50 p-6 rounded-xl space-y-6">
              <h3 className="text-xl font-medium">Send a Quick Message</h3>

              <div className="flex flex-col gap-4 md:flex-row">
                <div className="flex-1">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className={`w-full h-14 px-4 rounded-lg bg-[#0B1120] border border-blue-900 focus:outline-none focus:ring-1 focus:ring-blue-500
                      ${errors.name ? 'border-red-500' : ''}
                    `}
                  />
                  {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                </div>

                <div className="flex-1">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    rows={3}
                    className={`w-full h-14 px-4 py-3 resize-none rounded-lg bg-[#0B1120] border border-blue-900 focus:outline-none focus:ring-1 focus:ring-blue-500
                      ${errors.message ? 'border-red-500' : ''}
                    `}
                  />
                  {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  onClick={handleSendMessage}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg flex items-center transition-transform duration-200 group"
                >
                  <span>Send Message</span>
                  <Send size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          )}

          {/* Social links */}
          <div className="mt-8 text-center">
            <h3 className="text-lg font-medium mb-4">Connect on Social Media</h3>
            <div className="flex justify-center space-x-4">
              <SocialLink icon={Linkedin} href="https://www.linkedin.com/in/RaafidAfraazG" label="LinkedIn" />
              <SocialLink icon={Github} href="https://github.com/RaafidAfraazG" label="GitHub" />
              <SocialLink icon={Mail} href="mailto:raafid122@gmail.com" label="Email" />
              <SocialLink icon={Instagram} href="https://instagram.com/raafu_raafid" label="Instagram" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
