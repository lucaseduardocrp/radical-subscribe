import Image from "next/image";

export default function Header() {
  return(
    <>
      <header className="w-full h-56 p-5 flex justify-center bg-zinc-900">
        <Image src={'/RadicalImage.png'} alt="Encontro Radical" width={290} height={180}/>
      </header>
      <h1 className="py-6 text-center text-2xl font-bold">
        ENCONTRO RADICAL - 2023 (Inscrição)
      </h1>
    </>
  )
}