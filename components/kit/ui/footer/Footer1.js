const Footer1 = ({}) => {
  return (
    <div className="dark:bg-gray-900">
      <section className="flex items-center justify-center pt-24 bg-gray-100 pb-14 dark:bg-gray-900">
        <footer className="container flex items-center justify-center mx-auto mt-20 md:w-full">
          <div className="flex flex-col px-6 xl:flex-row lg:gap-x-24 md:px-0">
            <div className="flex flex-col items-start justify-start lg:w-80">
              <div className="flex items-center justify-start xl:flex-col xl:items-start">
                <div className="flex justify-center mr-6 xl:mr-0 dark:text-white text-gray-800 w-[74px] h-[65x]">
                  Logo
                </div>
                <div className="flex flex-col justify-center">
                  <div className="xl:mt-8">
                    <p className="text-sm leading-normal text-gray-600 dark:text-gray-300">
                      Copyright © 2021 companyName.
                    </p>
                  </div>
                  <div className="mt-2">
                    <p className="text-sm leading-normal text-gray-600 dark:text-gray-300">
                      All rights reserved
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start mt-8 space-x-2 lg:space-x-4">
                <button
                  aria-label="twitter"
                  role="button"
                  className="text-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-800 hover:text-blue-600 dark:text-white"
                >
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                  >
                    <path d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z" />
                  </svg>
                </button>
                <button
                  aria-label="youtube"
                  role="button"
                  className="text-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-800 hover:text-blue-400 dark:text-white"
                >
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                  >
                    <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex flex-row mt-6 xl:mt-0 lg:gap-x-14 gap-x-10">
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-10 lg:gap-y-0 gap-x-0 lg:gap-x-0">
                <div className="lg:w-40">
                  <h2 className="text-lg font-medium leading-loose text-gray-800 dark:text-white md:text-xl">
                    Company
                  </h2>
                  <div className="flex flex-col items-start justify-start mt-6 space-y-2">
                    <div>
                      <a
                        href="#!"
                        className="text-sm leading-relaxed text-gray-800 dark:text-white focus:outline-none focus:opacity-75 hover:opacity-75 md:text-base"
                      >
                        About us
                      </a>
                    </div>
                    <div>
                      <a
                        href="#!"
                        className="text-sm leading-relaxed text-gray-800 dark:text-white focus:outline-none focus:opacity-75 hover:opacity-75 md:text-base"
                      >
                        Blog
                      </a>
                    </div>
                    <div>
                      <a
                        href="#!"
                        className="text-sm leading-relaxed text-gray-800 dark:text-white focus:outline-none focus:opacity-75 hover:opacity-75 md:text-base"
                      >
                        Contact us
                      </a>
                    </div>
                    <div>
                      <a
                        href="#!"
                        className="text-sm leading-relaxed text-gray-800 dark:text-white focus:outline-none focus:opacity-75 hover:opacity-75 md:text-base"
                      >
                        Pricing
                      </a>
                    </div>
                    <div>
                      <a
                        href="#!"
                        className="text-sm leading-relaxed text-gray-800 dark:text-white focus:outline-none focus:opacity-75 hover:opacity-75 md:text-base"
                      >
                        Testimonials
                      </a>
                    </div>
                  </div>
                </div>
                <div className="lg:w-40">
                  <h2 className="text-lg font-medium leading-loose text-gray-800 dark:text-white md:text-xl">
                    Support
                  </h2>
                  <div className="flex flex-col items-start justify-start mt-6 space-y-2">
                    <div>
                      <a
                        href="#!"
                        className="text-sm leading-relaxed text-gray-800 dark:text-white focus:outline-none focus:opacity-75 hover:opacity-75 md:text-base"
                      >
                        Help center
                      </a>
                    </div>
                    <div>
                      <a
                        href="#!"
                        className="text-sm leading-relaxed text-gray-800 dark:text-white focus:outline-none focus:opacity-75 hover:opacity-75 md:text-base"
                      >
                        Terms of service
                      </a>
                    </div>
                    <div>
                      <a
                        href="#!"
                        className="text-sm leading-relaxed text-gray-800 dark:text-white focus:outline-none focus:opacity-75 hover:opacity-75 md:text-base"
                      >
                        Legal
                      </a>
                    </div>
                    <div>
                      <a
                        href="#!"
                        className="text-sm leading-relaxed text-gray-800 dark:text-white focus:outline-none focus:opacity-75 hover:opacity-75 md:text-base"
                      >
                        Privacy policy
                      </a>
                    </div>
                    <div>
                      <a
                        href="#!"
                        className="text-sm leading-relaxed text-gray-800 dark:text-white focus:outline-none focus:opacity-75 hover:opacity-75 md:text-base"
                      >
                        Status
                      </a>
                    </div>
                  </div>
                </div>
                <div className="hidden sm:block">
                  <h2 className="text-lg font-medium leading-loose text-gray-800 w-60 md:text-xl dark:text-white">
                    Get Updates and more
                  </h2>
                  <div className="flex flex-col items-start justify-start mt-6 space-y-2 bg-white rounded-lg dark:bg-gray-800">
                    <div className="flex items-center justify-between w-full space-x-2 sm:space-x-0">
                      <div className="relative w-full">
                        <input
                          className="w-full h-10 p-2 text-xs placeholder-gray-600 bg-transparent focus:outline-none focus:ring-2 focus:ring-gray-400 dark:placeholder-gray-300 md:text-base"
                          type="text"
                          placeholder="Your email address"
                        />
                        <button
                          aria-label="send email"
                          role="button"
                          className="absolute top-0 right-0 flex items-center justify-center h-10 p-2 rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 hover:opacity-75 sm:p-0 sm:w-12 bg-gradient-to-l from-indigo-600 to-indigo-700"
                        >
                          <svg
                            width={26}
                            height={26}
                            viewBox="0 0 26 26"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0)">
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M24.0845 12.9998C24.0845 13.2879 23.9194 13.5506 23.6599 13.6755L9.34094 20.5698C9.06387 20.7032 8.73344 20.654 8.50731 20.4456C8.28118 20.2372 8.20518 19.9119 8.31557 19.6249L10.8637 12.9998L8.31557 6.37474C8.20518 6.08772 8.28118 5.7624 8.50731 5.554C8.73344 5.3456 9.06387 5.29635 9.34094 5.42976L23.6599 12.324C23.9194 12.449 24.0845 12.7117 24.0845 12.9998ZM12.1823 13.7498L10.3947 18.3977L20.048 13.7498H12.1823ZM20.048 12.2498L10.3947 7.60193L12.1823 12.2498H20.048Z"
                                fill="white"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0">
                                <rect
                                  width={18}
                                  height={18}
                                  fill="white"
                                  transform="translate(12.7279 0.271973) rotate(45)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 sm:hidden sm:mt-0">
                <h2 className="text-lg font-medium leading-loose text-gray-800 w-60 md:text-xl dark:text-white">
                  Get Updates and more
                </h2>
                <div className="flex flex-col items-start justify-start mt-6 space-y-2 bg-white rounded-lg dark:bg-gray-800">
                  <div className="flex items-center justify-between w-full space-x-2 sm:space-x-0">
                    <div className="relative w-full">
                      <input
                        className="w-full h-10 p-2 text-xs placeholder-gray-600 bg-transparent focus:outline-none focus:ring-2 focus:ring-gray-400 dark:placeholder-gray-300 md:text-base"
                        type="text"
                        placeholder="Your email address"
                      />
                      <button className="absolute top-0 right-0 flex items-center justify-center h-10 p-2 rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 hover:opacity-75 sm:p-0 sm:w-12 bg-gradient-to-l from-indigo-600 to-indigo-700">
                        <svg
                          width={26}
                          height={26}
                          viewBox="0 0 26 26"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0)">
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M24.0845 12.9998C24.0845 13.2879 23.9194 13.5506 23.6599 13.6755L9.34094 20.5698C9.06387 20.7032 8.73344 20.654 8.50731 20.4456C8.28118 20.2372 8.20518 19.9119 8.31557 19.6249L10.8637 12.9998L8.31557 6.37474C8.20518 6.08772 8.28118 5.7624 8.50731 5.554C8.73344 5.3456 9.06387 5.29635 9.34094 5.42976L23.6599 12.324C23.9194 12.449 24.0845 12.7117 24.0845 12.9998ZM12.1823 13.7498L10.3947 18.3977L20.048 13.7498H12.1823ZM20.048 12.2498L10.3947 7.60193L12.1823 12.2498H20.048Z"
                              fill="white"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0">
                              <rect
                                width={18}
                                height={18}
                                fill="white"
                                transform="translate(12.7279 0.271973) rotate(45)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default Footer1;
