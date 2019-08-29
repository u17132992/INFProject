export class AuditLogModel {
    AuditID: number;
    WhenOccured: Date;
    CriticalData: string;
    TransactionType: string;
    UserID: number;
    UserRoleID: number;
}