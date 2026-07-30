type Props = {
  status: string;
};

export default function StatusBadge({ status }: Props) {
  if (status === "menunggu") {
    return (
      <span className="px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-sm font-medium">
        🟡 Menunggu
      </span>
    );
  }

  if (status === "disetujui") {
    return (
      <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium">
        🟢 Disetujui
      </span>
    );
  }

  if (status === "ditolak") {
    return (
      <span className="px-3 py-1 rounded-full bg-red-100 text-red-700 text-sm font-medium">
        🔴 Ditolak
      </span>
    );
  }

  if (status === "revisi") {
    return (
      <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
        🔵 Revisi
      </span>
    );
  }

  return (
    <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm font-medium">
      -
    </span>
  );
}