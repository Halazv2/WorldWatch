<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        \App\Models\User::factory()->create([
            'full_name' => 'Test User',
            'email' => 'test@example.com',
            'authors' => json_encode(['Test Author']),
            'categories' => json_encode(['Test Category']),
            'sources' => json_encode(['Test Source']),

        ]);
    }
}
