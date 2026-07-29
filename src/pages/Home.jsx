import { About } from "../components/About";
import { Works } from "../components/Works";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <div>
      {/* About Section */}
      <div className="max-w-3xl mx-auto">
        <About />
      </div>

      {/* Works Section */}
      <Works />

      {/* Footer */}
      <Footer />
    </div>
  );
}