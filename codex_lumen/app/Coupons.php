<?php

  namespace App;

  use Illuminate\Database\Eloquent\Model;

  class Coupons extends Model {

    /**
    * Model Relationships
    */
    public function order()
    {
      return $this->belongsTo('App\Order');
    }
  }
?>
