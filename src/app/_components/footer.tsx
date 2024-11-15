import Image from "next/image";

const navigation = {
  social: [
    {
      name: "X",
      href: "https://x.com/afrieirham_",
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <title>X</title>
          <path
            fill="currentColor"
            d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
          />
        </svg>
      ),
    },
    {
      name: "GitHub",
      href: "https://github.com/kerja-it",
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <title>GitHub</title>
          <path
            fill="currentColor"
            d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
          />
        </svg>
      ),
    },
  ],
  partners: [{ name: "Kerja-Remote.com", href: "https://kerja-remote.com" }],
  resources: [
    {
      name: "Open-Source",
      href: "https://github.com/kerja-it/kerja-it.com",
    },
    {
      name: "Data Trafik #",
      href: "",
    },
  ],
  projects: [
    {
      name: "typit.in",
      href: "https://typit.in",
    },
    {
      name: "BukitJalilStadium.com",
      href: "https://bukitjalilstadium.com",
    },
    {
      name: "WasepJe.com",
      href: "https://wasepje.com",
    },
    {
      name: "PakejKahwin.com",
      href: "https://pakejkahwin.com",
    },
    {
      name: "CariKabel.com",
      href: "https://carikabel.com",
    },
    {
      name: "ResepiKA.com",
      href: "https://resepika.com",
    },
  ],
};

export function Footer() {
  return (
    <footer aria-labelledby="footer-heading" className="my-16">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-screen-lg px-4 py-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <div className="flex items-center space-x-2">
              <Image
                src="/logo.png"
                alt="Kerja IT Logo"
                width={300}
                height={300}
                className="h-10 w-10"
              />
              <p className="text-sm font-semibold">Kerja-IT.com</p>
            </div>
            <p className="text-sm leading-6 text-gray-600">
              Your Gateway to Malaysia&apos;s Best Tech Jobs
            </p>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  className="text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon aria-hidden="true" className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900">
                  Browse by Location
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.resources.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        target="_blank"
                        className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-gray-900">
                  Browse by Title
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.projects.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href + "?ref=kelasmengaji.online"}
                        target="_blank"
                        className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900">
                  Resources
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.resources.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        target="_blank"
                        className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-gray-900">
                  Others
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.projects.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href + "?ref=kelasmengaji.online"}
                        target="_blank"
                        className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 flex items-center justify-between border-t border-gray-900/10 pt-8 sm:mt-20">
          <p className="text-xs leading-5 text-gray-500">
            &copy; {new Date().getFullYear()} All rights reserved
          </p>
          <a
            href="https://afrieirham.com"
            target="_blank"
            className="text-xs leading-5 text-gray-500 hover:underline"
          >
            Built by Afrie
          </a>
        </div>
      </div>
    </footer>
  );
}
