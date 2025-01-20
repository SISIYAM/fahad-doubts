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
        Schema::create('reports', function (Blueprint $table) {
            $table->id();
            $table->string("doubt_id")->nullable();
            $table->string("solve_id")->nullable();
            $table->string("student_id")->nullable();
            $table->string("solver_id")->nullable();
            $table->string("text")->nullable();
            $table->timestamps();
        });
        Schema::table('solved_doubts', function (Blueprint $table) {
            
            $table->string('isSatisfied')->default(0)->after("audio");
            $table->string('isReported')->default(0);
            $table->string('difficulty')->default(1);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('reports');
        Schema::table('solved_doubts', function (Blueprint $table) {
            // Remove the column during rollback
            $table->dropColumn('isSatisfied');
            $table->dropColumn('isReported');
            $table->dropColumn('difficulty');
        });
    }
};
