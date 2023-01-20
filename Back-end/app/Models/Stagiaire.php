<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Stagiaire extends Model
{
    use HasFactory;
    protected $table = 'stagiaires';
    protected $fillable = [
        'nom', 'prenom', 'image', 'filiere'
    ];
}
