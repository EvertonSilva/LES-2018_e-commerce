<?php
  namespace App\Http\Controllers;

  use App\Coupons;
  use Illuminate\Http\Request;
  use Illuminate\Support\Collection;

  class CouponsController extends Controller
  {
    public function showAllCoupons(Request $request)
    {
      $coupons = Coupons::all();
      $response_data = collect([]);
      foreach ($coupons as $coupon) {
        $order = $coupon->order()->get()[0];
        $entry = [
          'id' => $coupon->id,
          'type' => 'coupons',
          'attributes' => [
            'code' => $coupon->code,
            'coupon-type' => $coupon->coupon_type,
            'valid' => $coupon->valid,
          ],
          'relationships' => [
            'order' => [
              'data' => [
                'id' => $order->id,
                'type' => 'orders'
              ]
            ]
          ],
          'included' => [
            'type' => 'orders',
            'id' => $order->id,
            'attributes' => [
              'number' => $order->number
            ]
          ]
        ];
        $response_data->push($entry);
      }
      return response()->json(['data' => $response_data]);
    }
  }

 ?>
