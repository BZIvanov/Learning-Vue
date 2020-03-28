using System;

namespace Domain
{
    public class Value
    {
        // \\ Entity framework is convention based and when we name a property Id it will be automatically set as primary key
        // \\ and because it's int when we create the database it will be automatically increasing number
        // \\ Entity framework is code first, meaning we first write the code and the database will be generated based on our code
        public int Id { get; set; }
        public string Name { get; set; }
    }
}
