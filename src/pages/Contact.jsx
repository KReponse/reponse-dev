import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#050505] py-24 text-white sm:py-28"
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute left-[-180px] top-1/3 h-[420px] w-[420px] rounded-full bg-blue-600/10 blur-[130px]" />

      <div className="pointer-events-none absolute bottom-[-180px] right-[-150px] h-[420px] w-[420px] rounded-full bg-cyan-500/5 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-blue-500" />

            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">
              Get In Touch
            </span>

            <span className="h-px w-10 bg-blue-500" />
          </div>

          <h2 className="text-center text-4xl font-bold tracking-tight sm:text-5xl">
            Let's Build Something{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Great
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-center leading-relaxed text-gray-400">
            Have a project, business idea, or digital solution in mind?
            Let's talk about how I can help turn it into a real product.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10">
          {/* LEFT — Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 sm:p-8"
          >
            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                Contact Details
              </p>

              <h3 className="mt-3 text-2xl font-bold">
                Let's start a conversation.
              </h3>

              <p className="mt-3 leading-relaxed text-gray-400">
                I'm available for freelance projects, collaborations,
                software development opportunities, and AI-powered product
                development.
              </p>
            </div>

            <div className="space-y-4">
              {/* Email */}
              <a
                href="mailto:reponsedev@gmail.com"
                className="group flex items-center gap-4 rounded-xl border border-white/10 bg-black/30 p-4 transition-all hover:border-blue-500/30 hover:bg-blue-500/5"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 transition-colors group-hover:bg-blue-500/15">
                  <Mail size={20} />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-600">
                    Email
                  </p>

                  <p className="mt-1 text-sm font-medium text-gray-200">
                    reponsedev@gmail.com
                  </p>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+250791468299"
                className="group flex items-center gap-4 rounded-xl border border-white/10 bg-black/30 p-4 transition-all hover:border-blue-500/30 hover:bg-blue-500/5"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 transition-colors group-hover:bg-blue-500/15">
                  <Phone size={20} />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-600">
                    Phone
                  </p>

                  <p className="mt-1 text-sm font-medium text-gray-200">
                    +250 791 468 299
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-black/30 p-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                  <MapPin size={20} />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-600">
                    Location
                  </p>

                  <p className="mt-1 text-sm font-medium text-gray-200">
                    Kigali, Rwanda
                  </p>
                </div>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="mt-7">
              <a
                href="https://wa.me/250791468299"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-full items-center justify-center gap-2 rounded-xl border border-green-500/20 bg-green-500/5 px-5 py-3.5 font-semibold text-green-400 transition-all hover:border-green-500/40 hover:bg-green-500/10"
              >
                <MessageCircle size={19} />
                Chat on WhatsApp

                <ArrowUpRight
                  size={17}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>

            {/* Availability */}
            <div className="mt-7 flex items-center gap-3 border-t border-white/10 pt-6">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400" />
              </span>

              <p className="text-sm text-gray-400">
                Currently available for new projects
              </p>
            </div>
          </motion.div>

          {/* RIGHT — Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 sm:p-8"
          >
            <div className="mb-7">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                Send a Message
              </p>

              <h3 className="mt-3 text-2xl font-bold">
                Tell me about your project.
              </h3>
            </div>

            <form
              onSubmit={(event) => {
                event.preventDefault();
              }}
              className="space-y-5"
            >
              {/* Name */}
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Your Name
                </label>

                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                  className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3.5 text-sm text-white outline-none transition-all placeholder:text-gray-600 focus:border-blue-500/50 focus:bg-black/60 focus:ring-2 focus:ring-blue-500/10"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Email Address
                </label>

                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                  className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3.5 text-sm text-white outline-none transition-all placeholder:text-gray-600 focus:border-blue-500/50 focus:bg-black/60 focus:ring-2 focus:ring-blue-500/10"
                />
              </div>

              {/* Project Type */}
              <div>
                <label
                  htmlFor="contact-project"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Project Type
                </label>

                <select
                  id="contact-project"
                  name="projectType"
                  defaultValue=""
                  className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3.5 text-sm text-gray-300 outline-none transition-all focus:border-blue-500/50 focus:bg-black/60 focus:ring-2 focus:ring-blue-500/10"
                >
                  <option value="" disabled>
                    Select project type
                  </option>
                  <option value="website">Website</option>
                  <option value="web-app">Web Application</option>
                  <option value="mobile-app">Mobile App</option>
                  <option value="ai-solution">AI Solution</option>
                  <option value="backend-api">Backend / API</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Message
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  rows="6"
                  placeholder="Tell me about your idea, project, or business needs..."
                  required
                  className="w-full resize-none rounded-xl border border-white/10 bg-black/40 px-4 py-3.5 text-sm text-white outline-none transition-all placeholder:text-gray-600 focus:border-blue-500/50 focus:bg-black/60 focus:ring-2 focus:ring-blue-500/10"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white transition-all hover:bg-blue-500 hover:shadow-xl hover:shadow-blue-600/20"
              >
                Send Message

                <Send
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>

              <p className="text-center text-xs leading-relaxed text-gray-600">
                Your message system will be connected to the portfolio
                backend and email service later.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;