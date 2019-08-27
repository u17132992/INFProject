using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using IonicAPI.Models;

namespace IonicAPI.Controllers
{
    [RoutePrefix("Api/PetParent")]
    public class PetParentController : ApiController
    {
        INF370test1Entities1 objEntity = new INF370test1Entities1();

        [HttpGet]
        [Route("AllPetParentDetails")]
        public IQueryable<PetParent> GetPetParent()
        {
            objEntity.Configuration.ProxyCreationEnabled = false;
            try
            {
                return objEntity.PetParents;
            }
            catch (Exception)
            {
                throw;
            }
        }

        [HttpGet]
        [Route("GetPetParentDetailsById/{petparentId}")]
        public IHttpActionResult GetPetParentById(string petparentId)
        {
            PetParent objEmp = new PetParent();
            objEntity.Configuration.ProxyCreationEnabled = false;
            int ID = Convert.ToInt32(petparentId);
            try
            {
                objEmp = objEntity.PetParents.Find(ID);
                if (objEmp == null)
                {
                    return NotFound();
                }

            }
            catch (Exception)
            {
                throw;
            }

            return Ok(objEmp);
        }

        [HttpPost]
        [Route("InsertPetParentDetails")]
        public IHttpActionResult PostPetParent(PetParent data)
        {

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                objEntity.PetParents.Add(data);
                objEntity.SaveChanges();
            }
            catch (Exception)
            {
                throw;
            }



            return Ok(data);
        }

        [HttpPut]
        [Route("UpdatePetParentDetails")]
        public IHttpActionResult PutPetParentMaster(PetParent petparent)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
                PetParent objEmp = new PetParent();
                objEmp = objEntity.PetParents.Find(petparent.PetParentID);
                if (objEmp != null)
                {
                    objEmp.Name = petparent.Name;
                    objEmp.Surname = petparent.Surname;
                    objEmp.EmailAddress = petparent.EmailAddress;
                    objEmp.PhoneNr = petparent.PhoneNr;
                    objEmp.ParentAddress = petparent.ParentAddress;
                    

                }
                int i = this.objEntity.SaveChanges();

            }
            catch (Exception)
            {
                throw;
            }
            return Ok(petparent);
        }
    }
}
