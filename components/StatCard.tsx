export function StatCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between mb-2">
        <span className="text-3xl font-bold" style={{ color: "#BEA04A" }}>
          {value}
        </span>
      </div>
      <h3 className="font-medium" style={{ color: "#414140" }}>
        {title}
      </h3>
    </div>
  );
}
