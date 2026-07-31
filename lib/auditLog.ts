export type AuditAction =
  | "CREATE_SURAT"
  | "UPDATE_SURAT"
  | "APPROVE_SURAT"
  | "REJECT_SURAT"
  | "PRINT_SURAT"
  | "VERIFY_SURAT"
  | "DELETE_SURAT";

export interface AuditLog {
  action: AuditAction;
  suratId: number | string;
  user?: string;
  description?: string;
  createdAt: string;
}

export function createAuditLog(
  action: AuditAction,
  suratId: number | string,
  user = "admin",
  description = ""
): AuditLog {
  return {
    action,
    suratId,
    user,
    description,
    createdAt: new Date().toISOString(),
  };
}