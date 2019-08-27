using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using IonicAPI.Models;

namespace IonicAPI.Controllers
{
    [RoutePrefix("Api/Updates")]
    public class UpdatesController : ApiController
    {
        INF370test1Entities1 objEntity = new INF370test1Entities1();

        [HttpGet]
        [Route("AllUpdates")]
        public IQueryable<PetUpdate> GetPetUpdate()
        {
            objEntity.Configuration.ProxyCreationEnabled = false;
            try
            {
                return objEntity.PetUpdates;
            }
            catch (Exception)
            {
                throw;
            }
        }

        [HttpGet]
        [Route("GetPetUpdateDetailsById/{petupdateId}")]
        public IHttpActionResult GetPetUpdateById(string petupdateId)
        {
            PetUpdate objEmp = new PetUpdate();
            objEntity.Configuration.ProxyCreationEnabled = false;
            int ID = Convert.ToInt32(petupdateId);
            try
            {
                objEmp = objEntity.PetUpdates.Find(ID);
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
        [Route("InsertPetUpdateDetails")]
        public IHttpActionResult PostPetUpdate(PetUpdate data)
        {

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                objEntity.PetUpdates.Add(data);
                objEntity.SaveChanges();
            }
            catch (Exception)
            {
                throw;
            }



            return Ok(data);
        }

        [HttpPut]
        [Route("UpdatePetUpdateDetails")]
        public IHttpActionResult PutPetUpdateMaster(PetUpdate petupdate)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
                PetUpdate objEmp = new PetUpdate();
                objEmp = objEntity.PetUpdates.Find(petupdate.PetUpdateID);
                if (objEmp != null)
                {
                    objEmp.UpdateDate = petupdate.UpdateDate;
                    objEmp.NameDescription = petupdate.NameDescription;
                    objEmp.FeedingStatus = petupdate.FeedingStatus;
                    objEmp.WalkingStatus = petupdate.WalkingStatus;
                    objEmp.GroomedStatus = petupdate.GroomedStatus;


                }
                int i = this.objEntity.SaveChanges();

            }
            catch (Exception)
            {
                throw;
            }
            return Ok(petupdate);
        }
    }
}