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
        Schema::table('doubts', function (Blueprint $table) {
            $table->string("locked_by")->nullable()->after("status");
            $table->timestamp('locked_at')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('doubts', function (Blueprint $table) {
            $table->dropColumn('locked_by');
            $table->dropColumn('locked_at');
        });
    }
};
