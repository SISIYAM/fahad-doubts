<?php

namespace App\Console\Commands;

use Carbon\Carbon;
use App\Models\Doubt;
use Illuminate\Console\Command;

class CheckLockDoubts extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:check-lock-doubts';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        // Fetch doubts locked for more than 1 hour
        $doubts = Doubt::where('status', 0)
            ->whereNotNull('locked_at')
            ->where('locked_at', '<=', Carbon::now()->subHour(1)) 
            ->get();

        // Check if there are no doubts to unlock
        if ($doubts->isEmpty()) {
            $this->info('No data to unlock');
            return;
        }

        // Unlock each doubt
        foreach ($doubts as $doubt) {
            $doubt->update([
                'status' => 1, 
                'locked_by' => null,
                'locked_at' => null,
            ]);

            $this->info("Doubt ID {$doubt->id} has been unlocked.");
        }

        $this->info('Unlocking process completed.');
    }

}
