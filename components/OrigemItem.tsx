export function OrigemItem({
  label,
  percentual,
}: {
  label: string;
  percentual: number;
}) {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <span style={{ color: "#414140" }}>{label}</span>
        <span className="font-bold" style={{ color: "#BEA04A" }}>
          {percentual}%
        </span>
      </div>
      <div className="bg-gray-200 rounded-full h-2">
        <div
          className="h-2 rounded-full"
          style={{ backgroundColor: "#BEA04A", width: `${percentual}%` }}
        ></div>
      </div>
    </div>
  );
}
