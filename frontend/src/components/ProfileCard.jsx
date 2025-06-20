export default function ProfileCard() {
    return (
      <div className="bg-white p-4 rounded shadow text-center">
        <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
        <p className="font-semibold text-sm">Professional Title and Field</p>
        <div className="flex justify-center gap-2 text-xs mt-2">
          <span className="bg-gray-100 px-2 py-1 rounded">AI/ML</span>
          <span className="bg-green-100 px-2 py-1 rounded">Data Science</span>
          <span className="bg-yellow-100 px-2 py-1 rounded">IoT</span>
        </div>
        <div className="flex justify-center gap-2 mt-4">
          <button className="px-4 py-1 border rounded text-sm">View Profile</button>
          <button className="px-4 py-1 border rounded text-sm bg-blue-100 text-blue-700">
            Connect
          </button>
        </div>
      </div>
    );
  }