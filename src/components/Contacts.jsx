import React from "react";
import { Cloudinary } from "@cloudinary/url-gen";

import { AdvancedImage } from "@cloudinary/react";

const Contact = () => {
  const cld = new Cloudinary({ cloud: { cloudName: "di8wv9xue" } });

  const myImage = cld.image("violet_mbdws3");

  return (
    <div className="flex min-h-full flex-1 mt-32 ">
      <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div>
            <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight uppercase text-[var(--main-text)]">
              Let's get in contact!
            </h2>
          </div>

          <div className="mt-10">
            <div>
              <form action="#" method="POST" className="space-y-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-[var(--main-text)]"
                  >
                    Email
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-[var(--main-text)]"
                  >
                    Subject
                  </label>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-[var(--main-text)]"
                  >
                    Message
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="password"
                      rows={8}
                      type="password"
                      autoComplete="current-password"
                      required
                      className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-slate-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="relative hidden rounded-xl w-0 bg-[#ffffff59] flex-1 lg:block">
        <AdvancedImage
          className="absolute opacity-85 rounded-xl inset-0 h-full w-full object-cover"
          cldImg={myImage}
        />

        {/* <img
            className="absolute opacity-85 rounded-xl inset-0 h-full w-full object-cover"
            src={image}
            alt=""
          /> */}
      </div>
    </div>
  );
};

export default Contact;
