import { FaSuperpowers } from "react-icons/fa";

export default function PowerStats() {
  return (
    <div className="flex flex-row justify-between items-center">
      <div className="flex flex-row justify-between items-center">
        <FaSuperpowers />
        <p>Inteligence, etc...</p>
      </div>

      <p>Powers</p>
    </div>
  );
}
