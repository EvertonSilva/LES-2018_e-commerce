<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('shipping_costs', function (Blueprint $table) {
          $table->increments('id');
          $table->string('postal_code');
          $table->double('cost');
        });
        Schema::create('shipping_addresses', function (Blueprint $table) {
          $table->increments('id');
          $table->string('public_place');
          $table->string('address_type');
          $table->string('number');
          $table->string('postal_code');
        });
        Schema::create('orders', function (Blueprint $table) {
          $table->increments('id');
          $table->string('number')->unique();
          $table->double('total', 8, 2);
          $table->datetime('purchase_date');
          $table->enum('status', ['PROCESSING', 'SHIPPING', 'SHIPPED', 'EXCHANGING', 'CLOSED']);
          $table->unsignedInteger('customer_id');
          $table->unsignedInteger('address_id');
          $table->unsignedInteger('shippingcost_id');
          $table->foreign('address_id')
                ->references('id')->on('shipping_addresses');
          $table->foreign('shippingcost_id')
                ->references('id')->on('shipping_costs');
          $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('orders');
    }
}
