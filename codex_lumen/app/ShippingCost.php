<?php

  namespace App;

  use Illuminate\Database\Eloquent\Model;

  class ShippingCost extends Model {
    $table = 'shipping_costs';

    /**
    * Model Relationships
    */
    public function order()
    {
      return $this->belongsTo('App\Order');
    }

  }

?>
