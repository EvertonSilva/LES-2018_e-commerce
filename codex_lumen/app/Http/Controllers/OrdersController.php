<?php

namespace App\Http\Controllers;

use App\Order;
use Carbon\Carbon;
use Illuminate\Http\Request;

class OrdersController extends Controller
{

    public function showAllOrders()
    {
      return response()->json(Order::with('orderLines')->get());
    }

    public function showOneOrder($id)
    {
      $order = Order::find($id);
      $order->load('orderLines');
      return response()->json($order);
    }

    public function create(Request $request)
    {
      $order = Order::create($request->all());
      return response()->json($order, 201);
    }

    public function update(Request $request, $id)
    {
      $order = Order::findOrFail($id);
      $order->update($request->all());
      return response()->json($order, 200);
    }
}

?>
