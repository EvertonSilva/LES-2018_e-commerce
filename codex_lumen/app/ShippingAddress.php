<?php

  namespace App;

  use Illuminate\Database\Eloquent\Model;

  class ShippingAddress extends Model {
    $table = 'shipping_addresses';

    /**
    * Model Relationships
    */
    public function order()
    {
      return $this->belongsTo('App\Order');
    }
  }


 ?>
