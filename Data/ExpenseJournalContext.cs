using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ExpenseJournal.Models;

namespace ExpenseJournal.Data
{
    public class ExpenseJournalContext : DbContext
    {
        public ExpenseJournalContext (DbContextOptions<ExpenseJournalContext> options)
            : base(options)
        {
        }

        public DbSet<ExpenseJournal.Models.Expense> Expense { get; set; }
    }
}
