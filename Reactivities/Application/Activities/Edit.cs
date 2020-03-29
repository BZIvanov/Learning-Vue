using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistence;

namespace Application.Activities
{
    public class Edit
    {
        public class Command : IRequest
        {
            public Guid Id { get; set; }
            public string Title { get; set; }
            public string Description { get; set; }
            public string Category { get; set; }
            // Date is optional field
            public DateTime? Date { get; set; }
            public string City { get; set; }
            public string Venue { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var activity = await _context.Activities.FindAsync(request.Id);    

                if (activity == null)
                    throw new Exception("Could not find activity");


                // if before questionmarks is null what is on the right will be executed. This is in case the field was not edited
                activity.Title = request.Title ?? activity.Title;            
                activity.Description = request.Description ?? activity.Description;            
                activity.Category = request.Category ?? activity.Category;            
                activity.Date = request.Date ?? activity.Date;            
                activity.City = request.City ?? activity.City;            
                activity.Venue = request.Venue ?? activity.Venue;            

                // if something was updated we will still get number of changes and this will result to true
                var success = await _context.SaveChangesAsync() > 0;

                if (success) return Unit.Value;

                throw new Exception("Problem saving changes");
            }
        }
    }
}