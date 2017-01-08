<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class DefaultController extends Controller
{
    /**
     * @Route("/", name="homepage")
     */
    public function indexAction(Request $request)
    {
        $session = $request->getSession();

        //$session->set('conn_peer_id', 'bernardo');

        return $this->render('default/index.html.twig', [
            'peer_id'      => $session->get('peer_id'),
            'conn_peer_id' => $session->get('conn_peer_id')
        ]);
    }
}
