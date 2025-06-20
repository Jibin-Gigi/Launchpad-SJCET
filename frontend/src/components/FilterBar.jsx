export default function FilterBar() {
    return (
      <div className="bg-[#eef6db] p-6">
        <h1 className="text-3xl font-semibold text-center mb-4">
          Connect. Collaborate. Create.
        </h1>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <input
            type="text"
            placeholder="Search by name, department, or expertise"
            className="px-4 py-2 rounded border w-full sm:w-1/2"
          /> 
          <select className="px-4 py-2 rounded border">
            <option>Department</option>
          </select>
          <select className="px-4 py-2 rounded border">
            <option>Role</option>
          </select>
          <select className="px-4 py-2 rounded border">
            <option>Expertise</option>
          </select>
          <button className="text-sm text-blue-500">Clear Filters ✖</button>
        </div>
      </div>
    );
  }