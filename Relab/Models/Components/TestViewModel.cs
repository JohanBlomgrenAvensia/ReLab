using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Relab.Models.Components
{
    public class TestViewModel
    {

        public IEnumerable<TestItem> TestItems { get; set; }
    }
    public class TestItem
    {
        public string Title { get; set; }
    }
}