<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use \App\Models\User;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory(10)->create();

        User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
        ])
            ->contacts()
            ->createMany([
                [
                    'name' => 'Contact 1',
                    'contact' => '123456789',
                    'email' => 'contact1@example',
                ],
                [
                    'name' => 'Contact 2',
                    'contact' => '987654321',
                    'email' => 'contact2@example',
                ],
                [
                    'name' => 'Contact 3',
                    'contact' => '555555555',
                    'email' => 'contact3@example',
                ],
            ]);
    }
}
