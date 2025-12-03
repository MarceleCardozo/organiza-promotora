export function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-center pb-3 border-b border-gray-100">
      <span className="text-gray-600">{label}</span>
      <span className="font-medium" style={{ color: "#414140" }}>
        {value}
      </span>
    </div>
  );
}
