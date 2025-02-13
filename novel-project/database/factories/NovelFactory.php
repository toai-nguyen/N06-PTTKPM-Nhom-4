<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Novel;
/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Novel>
 */
class NovelFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected $model = Novel::class;
    public function definition(): array
    {
        $this->faker = \Faker\Factory::create('en_US');
        return [
            'author_id' => '1',
            'title' => $this->faker->sentence,
            'description' => $this->faker->paragraph,
            'image_url' => 'https://res.cloudinary.com/dvomghpsu/image/upload/v1739376003/novel_project/cover_image/default_cover_image.webp',
            'image_public_id' => 'novel_project/cover_image/default_cover_image',
            'status' => 'ongoing',
            'followers' => $this->faker->numberBetween(0, 1000),
            'number_of_chapters' => 0,
        ];
    }
}
