import FilterBar from "../components/FilterBar";
import ProfileCard from "../components/ProfileCard";


export default function ConnectPage() {
  return (
    <div className="bg-[#eef6db] min-h-screen">
      <FilterBar />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6">
        {Array.from({ length: 8 }).map((_, idx) => (
          <ProfileCard key={idx} />
        ))}
      </div>
    </div>
  );
}