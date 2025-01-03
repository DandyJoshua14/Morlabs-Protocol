import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://morlabsprotocol.com"),
  keywords: ["morlabs", "morlabs protocol", "api and sdk", "best api and sdk", "transition from web2 to web3"],
  title: { default: "Morlabs Protocol", template: `%s | Morlabs Protocol` },
  openGraph: { description: "An API & SDK directory for developers" },
};

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="text-white text-2xl font-bold flex flex-col gap-8 row-start-2 items-center sm:items-start">
        Morlabs Protocol is Coming Soon...
        <p className="mx-auto text-lg text-blue-700"><a href="https://t.me/+h3znet1BenA4OWI0">Join Our Telegram Community</a></p>
      </main>

    </div>
  );
}
