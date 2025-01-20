<?php

use Illuminate\Support\Str;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('doubts', function (Blueprint $table) {
            $table->id();
            $table->string('slug')->unique();
            $table->string('user_id')->nullable();
            $table->string('class_id')->nullable();
            $table->string('subject_id')->nullable();
            $table->string('chapter_id')->nullable();
            $table->text('text')->nullable();
            $table->string('image')->nullable();
            $table->string('audio')->nullable();
            $table->integer('status')->default(1);
            $table->string('solver_id')->nullable();
            $table->timestamps();
        });

        Schema::create('solved_doubts', function (Blueprint $table) {
            $table->id();
            $table->string('doubt_id')->nullable();
            $table->string('solver_id')->nullable();
            $table->text('text')->nullable();
            $table->string('image')->nullable();
            $table->string('audio')->nullable();
            $table->integer('status')->default(1);
            $table->timestamps();
        });

        Schema::create('comment_doubts', function (Blueprint $table) {
            $table->id();
            $table->string('doubt_id')->nullable();
            $table->string('user_id')->nullable();
            $table->text('text')->nullable();
            $table->string('image')->nullable();
            $table->string('audio')->nullable();
            $table->integer('status')->default(1);
            $table->timestamps();
        });

       
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('doubts');
        Schema::dropIfExists('solved_doubts');
        Schema::dropIfExists('comment_doubts');
    }
};
