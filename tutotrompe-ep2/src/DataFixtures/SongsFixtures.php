<?php

namespace App\DataFixtures;

use App\Entity\Song;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\FixtureGroupInterface;

class SongsFixtures extends Fixture implements FixtureGroupInterface
{
    public function load(ObjectManager $manager)
    {
        $songs = [
            [
                'title' => 'Shine on you crazy diamond',
                'artist' => 'Pink Floyd'
            ],
            [
                'title' => 'Alone in Kyoto',
                'artist' => 'Air'
            ],
            [
                'title' => 'Overkill',
                'artist' => 'Motorhead'
            ],
            [
                'title' => 'Les princes des villes',
                'artist' => 'Michel Berger'
            ],
            [
                'title' => 'La cabane du pêcheur',
                'artist' => 'Francis Cabrel'
            ],
            [
                'title' => 'You think I ain\'t worth a dollar but I feel like a millionaire',
                'artist' => 'Queens Of The Stone Age'
            ],
        ];

        foreach ($songs as $data) {
            $song = new Song();
            $song->setTitle($data['title'])
                    ->setArtist($data['artist']);

            $manager->persist($song);
        }

        $manager->flush();
    }

    public static function getGroups(): array
    {
        return ['songs'];
    }
}
