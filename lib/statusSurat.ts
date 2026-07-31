export function getStatusBadge(status?: string) {
  switch ((status || "").toLowerCase()) {
    case "disetujui":
      return {
        text: "Disetujui",
        color:
          "bg-green-100 text-green-700 border border-green-300",
      };

    case "ditolak":
      return {
        text: "Ditolak",
        color:
          "bg-red-100 text-red-700 border border-red-300",
      };

    default:
      return {
        text: "Menunggu",
        color:
          "bg-yellow-100 text-yellow-700 border border-yellow-300",
      };
  }
}