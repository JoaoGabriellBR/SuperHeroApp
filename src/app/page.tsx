import Header from "@/components/Header";
import Image from "next/image";
import batman from "../../public/batman.png"

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col md:flex-row items-center justify-between w-[100%] h-screen p-2 md:p-10 bg-blue-700">
        
        {/* DIV IMAGE */}
        <div className="w-[100%] md:w-[40%] h-[100%] bg-green-500">
          <Image
            src={batman}
            width="400"
            height="400"
            alt="Picture of the author"
          />
        </div>

        {/* DIV CHARACTER STATS */}
        <div className="w-[100%] md:w-[60%] h-[100%] bg-red-500"></div>
      </main>
    </>
  );
}
