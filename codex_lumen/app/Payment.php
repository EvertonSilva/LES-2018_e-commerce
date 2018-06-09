<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Payment extends Model {

  /**
  * Model Relationships
  */
  public function order() {
    return $this->belongsTo('App\Order');
  }
}

?>
