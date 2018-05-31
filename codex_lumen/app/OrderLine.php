<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class OrderLine extends Model {

  protected $table = 'order_lines';

  /**
  * Model Relationships
  */
  public function order()
  {
    return $this->belongsTo('App\Order');
  }
}

?>
