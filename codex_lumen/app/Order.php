<?php

  namespace App;

  use Illuminate\Database\Eloquent\Model;

  class Order extends Model {

    /**
    * Mass assignment
    */
    protected $fillable = array('user_id', 'total', 'purchase_date');

    /**
    * Model Relationships
    */
    public function orderLines()
    {
      return $this->hasMany('App\OrderLine');
    }
    public function Payment()
    {
      return $this->hasMany('App\Payment');
    }
    public function coupons()
    {
      return $this->hasMany('App\Coupons');
    }
    public function shippingCost()
    {
      return $this->hasOne('App\ShippingCost');
    }
    public function ShippingAddress()
    {
      return $this->hasOne('App\ShippingAddress');
    }
  }

?>
