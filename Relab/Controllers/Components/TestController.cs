using Relab.Models.Components;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;

namespace Relab.Controllers.Components
{
    public class TestController : Controller
    {
        // GET: Test
        public ActionResult Index()
        {
            var result = new HttpStatusCodeResult(HttpStatusCode.OK, "OK");
            return result;

        }
        public ActionResult GetItems()
        {
            string[] input = { "jordgubb",
                           "hallon",
                           "blåbär" };
            var model = new TestViewModel();
            var testItemList = new List<TestItem>();
            foreach (var item in input)
            {
                testItemList.Add(new TestItem() { Title = item });
            }

            model.TestItems = testItemList;
            return Json(model, JsonRequestBehavior.AllowGet);

        }
    }
}