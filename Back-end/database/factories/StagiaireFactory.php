<?php

namespace Database\Factories;

use App\Models\Stagiaire;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Stagiaire>
 */
class StagiaireFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected $model = Stagiaire::class;
    public function definition()
    {
        return [
            'nom' => fake()->name(),
            'prenom' => fake()->name(),
            'image' => fake()->name(),
            'filiere' => fake()->name()
        ];
    }
}
