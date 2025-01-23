<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            // Remove the unique constraint on the 'email' column
            $table->dropUnique(['email']);

            // Add a composite unique constraint for 'email' and 'role'
            $table->unique(['email', 'role']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            // Drop the composite unique constraint
            $table->dropUnique(['email', 'role']);

            // Re-add the unique constraint on the 'email' column
            $table->unique('email');
        });
    }
};
