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
        Schema::create('novels', function (Blueprint $table) {
            $table->id();
            $table->foreignID('author_id')->constrained('users')->onDelete('cascade');
            $table->string('title');
            $table->text('description');
            $table->string('image_url');
            $table->string('image_public_id');
            $table->enum('status', ['ongoing', 'completed']);
            $table->integer('followers')->default(0);
            $table->integer('number_of_chapters')->default(0);
            $table->timestamps();

        });
        Schema::create('tags', function (Blueprint $table) {
            $table->id();
            $table->string('tag_name');
            $table->timestamps();
        });
        Schema::create('novel_tags', function (Blueprint $table) {
            $table->id();
            $table->foreignId('novel_id')->constrained('novels')->onDelete('cascade');
            $table->foreignId('tag_id')->constrained('tags')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('novels');
        Schema::dropIfExists('tags');
        Schema::dropIfExists('novel_tags');
    }
};
