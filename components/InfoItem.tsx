export function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between">
      <span className="text-gray-600">{label}:</span>
      <span className="font-medium" style={{ color: "#414140" }}>
        {value}
      </span>
    </div>
  );
}
