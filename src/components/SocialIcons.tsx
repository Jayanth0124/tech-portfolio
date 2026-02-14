import React from 'react';
import { Github, Linkedin, Instagram, Twitter } from 'lucide-react';

const SocialIcons = ({ className = "" }) => {
  const socials = [
    { icon: Github, link: "https://github.com", color: "hover:text-black" },
    { icon: Linkedin, link: "https://linkedin.com", color: "hover:text-blue-600" },
    { icon: Instagram, link: "https://instagram.com", color: "hover:text-pink-600" },
    { icon: Twitter, link: "https://twitter.com", color: "hover:text-blue-400" },
  ];

  return (
    <div className={`flex items-center space-x-4 ${className}`}>
      {socials.map((social, index) => (
        <a
          key={index}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`p-2 rounded-lg bg-muted/50 transition-all duration-300 hover:scale-110 ${social.color}`}
        >
          <social.icon className="w-5 h-5" />
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
