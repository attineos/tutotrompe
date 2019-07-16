<?php

namespace App\Controller\Api;

use FOS\RestBundle\Controller\AbstractFOSRestController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Component\HttpFoundation\Response;
use FOS\RestBundle\Controller\Annotations as Rest;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use App\Entity\Song;
use Symfony\Component\Validator\ConstraintViolationList;

/**
 * Movie controller.
 * @Route("/", name="api_songs")
 */
class SongsController extends AbstractFOSRestController
{
    /**
     * Lists all songs.
     * @Rest\Get("/songs", name="_get_songs")
     * @IsGranted("ROLE_USER")
     *
     * @return Response
     */
    public function getSongs()
    {
        $repository = $this->getDoctrine()->getRepository(Song::class);
        $songs = $repository->findAll();
        return $this->handleView($this->view($songs));
    }
    
    /**
     * Lists all songs.
     * @Rest\View(statusCode=Response::HTTP_CREATED)
     * @Rest\Post("/songs", name="_post_songs")
     * @ParamConverter("song",
     *     converter="fos_rest.request_body",
     *     options={
     *         "validator"={ "groups"="Create" }
     *     })
     * @IsGranted("ROLE_SUPER_ADMIN")
     */
    public function postSong(Song $song, ConstraintViolationList $violations)
    {
        if (count($violations)) {
            return $this->view($violations, Response::HTTP_BAD_REQUEST);
        }

        $em = $this->getDoctrine()->getManager();

        $em->persist($song);
        $em->flush();

        return $song;
    }
}
