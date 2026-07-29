import { About } from "../components/About";

export default function Home() {
  return (
    <div className="flex flex-col gap-12">
      <About />
      {/* We will add future components like Projects, Experience, Skills here */}
    </div>
  );
}