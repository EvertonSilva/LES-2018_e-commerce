<?php

namespace App\Http\Controllers;

use App\Order;
use Carbon\Carbon;
use Illuminate\Http\Request;

class OrdersController extends Controller
{

    public function showAllOrders()
    {
      return response()->json(Order::all());
    }

    public function showOneOrder($id)
    {
      return response()->json(Order::find($id));
    }

    public function create(Request $request)
    {
      $order = new Order;
      $order->user_id = $request->get('user_id');
      $order->total = $request->get('total');
      $order->purchase_date = Carbon::createFromFormat('Y-m-d', $request->get('purchase_date'));
      $order->status = $request->get('status');
      $order->save();
      return response()->json($order, 201);
    }
}

?>
