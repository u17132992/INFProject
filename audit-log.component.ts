import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ResolveEnd } from '@angular/router'; 
import { AuditLogModel } from './audit-log.model';
import { AuditLogService } from './audit-log.service';

@Component({
  selector: 'app-audit-log',
  templateUrl: './audit-log.component.html',
  styleUrls: ['./audit-log.component.css']
})
export class AuditLogComponent implements OnInit {
  auditlogentries: AuditLogModel[];
  auditentry: AuditLogModel;

  constructor(
    private service: AuditLogService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void { 
    this.route.data.subscribe(routeData => {
      const data = routeData.data;
      console.log('[audit-log.component.ts|ngOnInit()] data:', data);
      if (data) {
        this.auditlogentries = data.auditlogentries; 
        this.auditentry = new AuditLogModel(); 
      }
    });
  }

  findAuditEntries() {
  // submit() {
    console.log('[audit-log.component] findAuditEntries (' + this.auditentry.WhenOccured + ',' + this.auditentry.TransactionType + ')');
    this.service.findAuditEntries(this.auditentry.WhenOccured, this.auditentry.TransactionType);
    this.auditlogentries = this.auditlogentries.filter(a => a.AuditID === a.AuditID);
    // this.ngOnInit();
  }

  exportAuditRecords() {
    console.log('[audit-log.component] in exportAuditRecords()');
    // this.service.findAuditLogEntries(id);
  }

}
