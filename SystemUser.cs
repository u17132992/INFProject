//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IonicAPI.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class SystemUser
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public SystemUser()
        {
            this.AuditLogs = new HashSet<AuditLog>();
        }
    
        public int UserID { get; set; }
        public string EmailAddress { get; set; }
        public string UserPassword { get; set; }
        public string GUID { get; set; }
        public Nullable<System.DateTime> GUIDExpiry { get; set; }
        public Nullable<int> UserRoleID { get; set; }
        public Nullable<int> PetParentID { get; set; }
        public Nullable<int> PetSitterID { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<AuditLog> AuditLogs { get; set; }
        public virtual PetParent PetParent { get; set; }
        public virtual PetSitter PetSitter { get; set; }
        public virtual UserRole UserRole { get; set; }
    }
}
