import Calculator from "@/components/Calculator";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="max-w-[588px] mx-auto w-full px-[24px]">
      <Header />
      <Calculator />
    </main>
  );
}
