<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('harvest_settings', function (Blueprint $table) {
            $table->date('end_date_project_harvest')->nullable();
            $table->date('start_date_project_harvest')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('harvest_settings', function (Blueprint $table) {
            $table->dropColumn('end_date_project_harvest');
            $table->dropColumn('start_date_project_harvest');
        });
    }
};
