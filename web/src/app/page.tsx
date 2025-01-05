import Link from "next/link";

export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-3xl">Store My Code</h1>
      <p className="text-xl mt-2">
        Follow progress on the{" "}
        <Link
          className='underline underline-offset-2 opacity-80 hover:opacity-100 transition-opacity duration-200'
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/benbrackenbury/storemycode"
        >Github</Link>
      </p>
    </div>
  );
}
