<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Order extends Model {

  /**
  * Mass assignment
  */
  protected $fillable = array('user_id', 'total', 'purchase_date', 'status');

  /**
  * Model Relationships
  */
  public function orderLines()
  {
    return $this->hasMany('App\OrderLine');
  }
}

?>
