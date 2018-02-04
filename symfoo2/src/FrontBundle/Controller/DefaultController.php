<?php

namespace FrontBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function indexAction()
    {
        return $this->render('FrontBundle:Default:index.html.twig');
    }
    public function BlogAction()
    {
        return $this->render('FrontBundle:Default:Blog.html.twig');
    }
    public function MembersAction()
    {
        return $this->render('FrontBundle:Default:Membres.html.twig');
    }
}
