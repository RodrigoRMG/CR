<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class GeneralController extends Controller
{
    public function getIndex()
    {
        return view('template.index');
    }
    public function getContact()
    {
        return view('template.contacto');
    }
}
