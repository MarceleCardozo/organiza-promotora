export function StatusBar({
  label,
  value,
  total,
  color,
}: {
  label: string;
  value: number;
  total: number;
  color: string;
}) {
  const percentual = (value / total) * 100;
  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="font-medium" style={{ color: "#414140" }}>
          {label}
        </span>
        <span className="text-gray-600">
          {value} ({percentual.toFixed(0)}%)
        </span>
      </div>
      <div className="bg-gray-200 rounded-full h-3">
        <div
          className={`${color} h-3 rounded-full`}
          style={{ width: `${percentual}%` }}
        ></div>
      </div>
    </div>
  );
}
