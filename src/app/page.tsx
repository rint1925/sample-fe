import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="flex flex-col items-center gap-4">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Company logo"
          width={200}
          height={50}
          priority
        />
        <h1 className="text-3xl font-bold text-center sm:text-left">Innovate with Confidence</h1>
        <p className="text-center sm:text-left text-gray-600 dark:text-gray-400 max-w-2xl">
          Empowering businesses with cutting-edge solutions and seamless deployment. Discover the tools to bring your ideas to life.
        </p>
      </header>

      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <section className="flex flex-col items-center gap-8 sm:items-start">
          <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
            <li className="mb-2">
              Start by exploring our resources and tools to accelerate your journey.
            </li>
            <li>Join a global community of innovators and creators.</li>
          </ol>

          <div className="flex gap-4 items-center flex-col sm:flex-row">
            <a
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-blue-600 text-white hover:bg-blue-700 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="dark:invert"
                src="/vercel.svg"
                alt="Deploy Icon"
                width={20}
                height={20}
              />
              Get Started
            </a>
            <a
              className="rounded-full border border-solid border-gray-300 dark:border-gray-600 transition-colors flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn More
            </a>
          </div>
        </section>

        {/* Company Info Section */}
        <section className="flex flex-col gap-4 max-w-2xl">
          <h2 className="text-2xl font-bold">About Our Company</h2>
          <p className="text-gray-600 dark:text-gray-400">
            We are a technology company dedicated to empowering businesses worldwide with innovative solutions. Our mission is to bridge the gap between vision and execution through cutting-edge tools and platforms.
          </p>
          <ul className="text-sm text-gray-600 dark:text-gray-400">
            <li><strong>Founded:</strong> 2015</li>
            <li><strong>Headquarters:</strong> San Francisco, CA</li>
            <li><strong>Our Mission:</strong> Innovating to create a seamless digital future for businesses.</li>
          </ul>
        </section>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Tutorials
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Templates
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Visit Next.js →
        </a>
      </footer>
    </div>
  );
}
