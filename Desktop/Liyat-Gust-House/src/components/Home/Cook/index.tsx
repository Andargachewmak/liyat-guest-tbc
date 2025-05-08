"use client";
import Image from "next/image";

const Cook = () => {
  return (
    <section className="relative" id="aboutus-section">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md">
        <div className="absolute right-0 bottom-[-18%] hidden lg:block">
          <Image
            src={"/images/cook/burger.png"}
            alt="burger-image"
            width={463}
            height={622}
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 my-16 space-x-5">
          <div className="col-span-6 flex justify-start">
            <Image
              src="/images/cook/cook.png"
              alt="nothing"
              width={636}
              height={808}
            />
          </div>
          <div className="col-span-6 flex flex-col justify-center">
            <p className="text-primary text-lg font-normal mb-3 tracking-widest uppercase text-start">
               About Us
            </p>
            <h2 className="text-3xl lg:text-5xl font-semibold text-black dark:text-white text-start">
              Welcome to Liyat Guest House
            </h2>
            <p className="text-black/50 dark:text-white/50 md:text-lg font-normal mb-10 text-start mt-2">
              Welcome to Liyat Guest House, where comfort meets elegance.
              Nestled in a prime location, we offer a relaxing and homely
              atmosphere for travelers seeking quality accommodation. Whether
              you're here for business or leisure, our guest house provides a
              seamless blend of modern amenities and traditional hospitality.
            </p>
            <p className="text-black/50 dark:text-white/50 md:text-lg font-normal mb-10 text-start mt-1">
              At Liyat Guest House, we prioritize guest satisfaction by offering
              personalized services, well-equipped rooms, and a welcoming
              ambiance. Our goal is to make every stay memorable with a touch of
              warmth and professionalism.
            </p>
            <a
              href="tel:+251936747234"
              className="text-xl font-medium rounded-full text-white py-5 px-6 bg-primary lg:px-10 mr-6 w-fit border border-primary hover:bg-transparent hover:text-primary"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cook;
