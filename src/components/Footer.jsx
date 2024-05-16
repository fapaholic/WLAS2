import React from "react";

const Footer = () => {
  const socialLinks = [
    { href: "https://www.facebook.com/ThePart2", text: "Facebook" },
    { href: "https://twitter.com/yourtwitter", text: "Twitter" },
    { href: "https://www.instagram.com/jaspuuuurrr", text: "Instagram" },
  ];

  return (
    <footer className="mt-20 border-t py-10 border-neutral-700">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        {socialLinks.map((link, index) => (
          <div key={index}>
            <h3 className="text-md font-semibold mb-4">{link.text}</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href={link.href} target="_blank"
                  className="text-neutral-300 hover:text-white"
                >
                  {link.text}
                </a>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
