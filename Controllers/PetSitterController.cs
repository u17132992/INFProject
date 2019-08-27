using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using IonicAPI.Models;

namespace IonicAPI.Controllers
{
    [RoutePrefix("Api/PetSitter")]
    public class PetSitterController : ApiController
    {
        INF370test1Entities1 objEntity = new INF370test1Entities1();

        [HttpGet]
        [Route("AllPetSitterDetails")]
        public IQueryable<PetSitter> GetPetSitter()
        {
            objEntity.Configuration.ProxyCreationEnabled = false;
            try
            {
                return objEntity.PetSitters;
            }
            catch (Exception)
            {
                throw;
            }
        }

        [HttpGet]
        [Route("GetPetSitterDetailsById/{petsitterId}")]
        public IHttpActionResult GetPetSitterById(string petsitterId)
        {
            PetSitter objEmp = new PetSitter();
            objEntity.Configuration.ProxyCreationEnabled = false;
            int ID = Convert.ToInt32(petsitterId);
            try
            {
                objEmp = objEntity.PetSitters.Find(ID);
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
        [Route("InsertPetSitterDetails")]
        public IHttpActionResult PostPetSitter(PetSitter data)
        {

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                objEntity.PetSitters.Add(data);
                objEntity.SaveChanges();
            }
            catch (Exception)
            {
                throw;
            }



            return Ok(data);
        }

        [HttpPut]
        [Route("UpdatePetSitterDetails")]
        public IHttpActionResult PutPetSitterMaster(PetSitter petsitter)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
                PetSitter objEmp = new PetSitter();
                objEmp = objEntity.PetSitters.Find(petsitter.PetSitterID);
                if (objEmp != null)
                {
                    objEmp.PetSitterName = petsitter.PetSitterName;
                    objEmp.PetSitterSurname = petsitter.PetSitterSurname;
                    objEmp.PetSitterEmailAddress = petsitter.PetSitterEmailAddress;
                    objEmp.PetSitterPhoneNum = petsitter.PetSitterPhoneNum;
                    objEmp.PetSitterAddress = petsitter.PetSitterAddress;
                    objEmp.About = petsitter.About;
                    objEmp.Area = petsitter.Area;
                    objEmp.Picture = petsitter.Picture;


                }
                int i = this.objEntity.SaveChanges();

            }
            catch (Exception)
            {
                throw;
            }
            return Ok(petsitter);
        }
    }
}