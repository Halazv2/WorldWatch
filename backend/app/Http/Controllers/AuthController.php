<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Symfony\Component\HttpFoundation\Response;

class AuthController extends Controller
{
    public function store(RegisterRequest $request)
    {
        $user = User::create([
            'full_name' => $request->full_name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);


        return response()->json(['user' => $user, Response::HTTP_CREATED]);
    }

    public function login(Request $request)
    {
        if (!Auth::attempt($request->only('email', 'password'))) {
            return response()->json(['message' => 'Invalid login credentials'], Response::HTTP_UNAUTHORIZED);
        }

        /** @var User $user */
        $user = Auth::user();
        $token = $user->createToken('token')->plainTextToken;

        $cookie = cookie('jwt', $token, 60 * 24); // 1 day

        return response()->json(['message' => 'success'], Response::HTTP_OK)->withCookie($cookie);
    }

    public function logout()
    {
        $cookie = \Cookie::forget('jwt');

        return \response()->json(['message' => 'success'], Response::HTTP_OK)->withCookie($cookie);
    }

    public function  user()
    {
        return response()->json(['user' => auth()->user()], Response::HTTP_OK);
    }
}
