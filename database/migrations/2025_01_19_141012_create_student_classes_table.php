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
        Schema::create('student_classes', function (Blueprint $table) {
            $table->id();
            $table->string('name')->varchar(255);
            $table->string('slug')->varchar(255);
            $table->string('status')->default(1);
            $table->string('author')->nullable();
            $table->timestamps();
        });

        Schema::create('subjects', function (Blueprint $table) {
            $table->id();
            $table->string('class_id')->varchar(255);
            $table->string('name')->varchar(255);
            $table->string('slug')->varchar(255)->nullable()->unique();
            $table->string('author')->nullable();
            $table->timestamps();
        });
        Schema::create('chapters', function (Blueprint $table) {
            $table->id();
            $table->string('subject_id')->varchar(255);
            $table->string('name')->varchar(255);
            $table->string('slug')->varchar(255)->nullable()->unique();
            $table->string('author')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('student_classes');
        Schema::dropIfExists('subjects');
        Schema::dropIfExists('chapters');
    }
};
