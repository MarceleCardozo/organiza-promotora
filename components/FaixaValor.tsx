export function FaixaValor({
  label,
  quantidade,
}: {
  label: string;
  quantidade: number;
}) {
  return (
    <div
      className="flex justify-between items-center p-4 rounded-lg"
      style={{ backgroundColor: "#F7F0E6" }}
    >
      <span style={{ color: "#414140" }}>{label}</span>
      <span className="text-xl font-bold" style={{ color: "#BEA04A" }}>
        {quantidade}
      </span>
    </div>
  );
}
