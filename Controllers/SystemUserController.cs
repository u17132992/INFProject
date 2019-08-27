using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using IonicAPI.Models;

namespace IonicAPI.Controllers
{
    public class SystemUserController : ApiController
    {
        INF370test1Entities1 objEntity = new INF370test1Entities1();
        // GET api/<controller>
        [HttpGet]
        [Route("AllSystemUsers")]
        public IQueryable<SystemUser> GetSystemUser()
        {
            objEntity.Configuration.ProxyCreationEnabled = false;

            try
            {
                return objEntity.SystemUsers;
            }
            catch (Exception)
            {
                throw;
            }
        }

        [HttpGet]
        [Route("GetSystemUsersById/{userId}")]
        public IHttpActionResult GetSystemUserById(string systemuserId)
        {
            SystemUser objGen = new SystemUser();
            int ID = Convert.ToInt32(systemuserId);
            try
            {
                objGen = objEntity.SystemUsers.Find(ID);
                if (objGen == null)
                {
                    return NotFound();
                }

            }
            catch (Exception)
            {
                throw;
            }

            return Ok(objGen);
        }

        // POST api/<controller>
        public void Post([FromBody]string value)
        {
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}