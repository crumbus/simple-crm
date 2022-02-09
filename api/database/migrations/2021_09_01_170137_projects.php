<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Projects extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('projects', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('title')->index();
            $table->text('description')->index();
            $table->foreignId('created_user_id')->index();
            $table->foreignId('team_id')->index();
            $table->foreignId('organization_id')->index();
            $table->timestamps();
            $table->timestamp('date_start')->nullable()->index();
            $table->timestamp('date_finish')->nullable()->index();
            $table->integer('status')->index();
            $table->integer('color');
            $table->integer('icon');
            $table->integer('timezone_id')->index();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('projects');
    }
}
