export function OrgaoIntegracao({
  nome,
  status,
}: {
  nome: string;
  status: string;
}) {
  return (
    <div className="flex justify-between items-center p-4 border border-gray-200 rounded-lg">
      <div>
        <div className="font-medium" style={{ color: "#414140" }}>
          {nome}
        </div>
        <div className="text-sm text-gray-500">
          Convênio para desconto em folha
        </div>
      </div>
      <span
        className={`px-3 py-1 rounded-full text-sm font-medium ${
          status === "Ativo"
            ? "bg-green-100 text-green-800"
            : "bg-yellow-100 text-yellow-800"
        }`}
      >
        {status}
      </span>
    </div>
  );
}
