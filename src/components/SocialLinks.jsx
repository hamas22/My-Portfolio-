import { useEffect } from "react";
import {
  Linkedin,
  Github,
  Instagram,
  Youtube,
  ExternalLink,
  MessageSquare,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const socialLinks = [
  {
    name: "LinkedIn",
    displayName: "Let's Connect",
    subText: "on LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/hamas-mohamed-828261357",
    color: "#0A66C2",
    gradient: "from-[#0A66C2] to-[#0077B5]",
    isPrimary: true,
  },
  {
    name: "GitHub",
    displayName: "Github",
    subText: "@Hamas",
    icon: Github,
    url: "https://github.com/hamas22",
    color: "#ffffff",
    gradient: "from-[#333] to-[#24292e]",
    isPrimary: true,
  },
  {
    name: "Discord",
    displayName: "Discord",
    subText: "@hamastulib_12608",
    icon: MessageSquare,
    url: "https://discord.gg/VDYqJmvq",
    color: "#7289DA",
    gradient: "from-[#7289DA] to-[#99AAB5]",
  },
{
  name: "WhatsApp",
  displayName: "WhatsApp",
  subText: "+201122532796",
  icon: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-6 h-6">
      <path fill="#25D366" d="M16 0C7.163 0 0 7.163 0 16c0 2.824.739 5.471 2.016 7.784L0 32l8.354-2.023C10.527 31.261 13.174 32 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm7.157 22.823c-.312.875-1.817 1.67-2.517 1.765-.656.094-1.455.132-2.303-.136-2.009-.541-4.102-2.166-5.348-3.74-1.245-1.573-1.858-3.315-2.037-4.51-.162-1.04.193-1.429.416-1.544.312-.166.679-.209 1.01-.314.318-.098.67-.128 1.01.126.332.251 2.072 2.17 2.251 2.429.178.26.296.573.052.927-.242.353-1.044 1.43-1.141 1.543-.094.115-.19.24-.033.474.156.236.694 1.146 1.487 1.857.99.905 1.827 1.172 2.105 1.306.28.134.442.112.605-.067.164-.179.678-.786.856-.936.178-.149.356-.133.597.008.24.142 1.538.725 1.806.858.267.133.446.198.51.312.064.115.064.666-.248 1.541z"/>
    </svg>
  ),
  url: "https://wa.me/201122532796",
  color: "#25D366",
  gradient: "from-[#25D366] to-[#128C7E]",
}

];
const SocialLinks = () => {
  const primaryLinks = socialLinks.filter((link) => link.isPrimary);
  const secondaryLinks = socialLinks.filter((link) => !link.isPrimary);
  const [discord, whatsapp] = secondaryLinks;

  useEffect(() => {
    AOS.init({
      offset: 10,
    });
  }, []);

  return (
    <div className="w-full bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-6 py-8 backdrop-blur-xl">
      <h3
        className="text-xl font-semibold text-white mb-6 flex items-center gap-2"
        data-aos="fade-down"
      >
        <span className="inline-block w-8 h-1 bg-indigo-500 rounded-full"></span>
        Connect With Me
      </h3>

      <div className="flex flex-col gap-4">
        {/* Primary Links - LinkedIn & GitHub */}
        {primaryLinks.map((link, index) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-between p-4 rounded-lg 
                     bg-white/5 border border-white/10 overflow-hidden
                     hover:border-white/20 transition-all duration-500"
            data-aos="fade-up"
            data-aos-delay={100 + index * 100}
          >
            <div
              className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500
                         bg-gradient-to-r ${link.gradient}`}
            />
            <div className="relative flex items-center gap-4">
              <div className="relative flex items-center justify-center">
                <div
                  className="absolute inset-0 opacity-20 rounded-md transition-all duration-500
                               group-hover:scale-110 group-hover:opacity-30"
                  style={{ backgroundColor: link.color }}
                />
                <div className="relative p-2 rounded-md">
                  <link.icon
                    className="w-6 h-6 transition-all duration-500 group-hover:scale-105"
                    style={{ color: link.color }}
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <span className="text-lg font-bold pt-[0.2rem] text-gray-200 tracking-tight leading-none group-hover:text-white transition-colors duration-300">
                  {link.displayName}
                </span>
                <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {link.subText}
                </span>
              </div>
            </div>

            <ExternalLink
              className="relative w-5 h-5 text-gray-500 group-hover:text-white
                         opacity-0 group-hover:opacity-100 transition-all duration-300
                         transform group-hover:translate-x-0 -translate-x-1"
            />

            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none overflow-hidden">
              <div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent
                             translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"
              />
            </div>
          </a>
        ))}

        {/* Secondary Links - Discord & WhatsApp */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[discord, whatsapp].map((link, index) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-3 p-4 rounded-xl 
                               bg-white/5 border border-white/10 overflow-hidden
                               hover:border-white/20 transition-all duration-500"
              data-aos="fade-up"
              data-aos-delay={200 + index * 100}
            >
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500
                                     bg-gradient-to-r ${link.gradient}`}
              />

              <div className="relative flex items-center justify-center">
                <div
                  className="absolute inset-0 opacity-20 rounded-lg transition-all duration-500
                                       group-hover:scale-125 group-hover:opacity-30"
                  style={{ backgroundColor: link.color }}
                />
                <div className="relative p-2 rounded-lg">
                  <link.icon
                    className="w-5 h-5 transition-all duration-500 group-hover:scale-110"
                    style={{ color: link.color }}
                  />
                </div>
              </div>

              <div className="flex flex-col min-w-0">
                <span className="text-sm font-bold text-gray-200 group-hover:text-white transition-colors duration-300">
                  {link.displayName}
                </span>
                <span className="text-xs text-gray-400 truncate group-hover:text-gray-300 transition-colors duration-300">
                  {link.subText}
                </span>
              </div>

              <ExternalLink
                className="w-4 h-4 text-gray-500 group-hover:text-white ml-auto
                                       opacity-0 group-hover:opacity-100 transition-all duration-300
                                       transform group-hover:translate-x-0 -translate-x-2"
              />

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none overflow-hidden">
                <div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent
                                       translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;
