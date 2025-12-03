export function TimelineItem({
  title,
  date,
  status,
  description,
}: {
  title: string;
  date: string;
  status: string;
  description: string;
}) {
  return (
    <div className="flex items-start">
      <div
        className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
          status === "concluido" ? "bg-green-500" : "bg-gray-300"
        }`}
      >
        {status === "concluido" && (
          <span className="text-white text-sm">✓</span>
        )}
      </div>
      <div className="ml-4 flex-1">
        <div className="flex justify-between items-start">
          <h4 className="font-bold" style={{ color: "#414140" }}>
            {title}
          </h4>
          <span className="text-sm text-gray-500">{date}</span>
        </div>
        <p className="text-gray-600 text-sm mt-1">{description}</p>
      </div>
    </div>
  );
}
