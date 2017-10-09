using Relab.Models.Components;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Relab.Controllers.Components
{
    public class TestController : Controller
    {
        // GET: Test
        public ActionResult Index()
        {
           
                var model = new TestViewModel();
                var testItemList = new List<TestItem>();
                testItemList.Add(new TestItem()
                {
                    Title = "Test"
                });
                model.TestItems = testItemList;
                return Json(model, JsonRequestBehavior.AllowGet);
            
        }
    }
}